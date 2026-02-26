const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

if (menuBtn && mainNav) {
  menuBtn.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
}

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("contactMsg").textContent = "Message submitted successfully. We will contact you soon.";
    contactForm.reset();
  });
}

const registrationForm = document.getElementById("registrationForm");
if (registrationForm) {
  registrationForm.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("registrationMsg").textContent = "Registration submitted successfully. Our team will call you shortly.";
    registrationForm.reset();
  });
}

const verifyForm = document.getElementById("verifyForm");
if (verifyForm) {
  verifyForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(verifyForm);
    const student = {
      studentName: formData.get("studentName")?.toString().trim(),
      enrollNo: formData.get("enrollNo")?.toString().trim(),
      examType: formData.get("examType")?.toString().trim(),
    };

    if (!student.studentName || !student.enrollNo || !student.examType) {
      alert("Please fill all fields.");
      return;
    }

    localStorage.setItem("igcim_exam_student", JSON.stringify(student));
    localStorage.removeItem("igcim_exam_result");
    window.location.href = "exam.html";
  });
}

function shuffleArray(items) {
  const list = [...items];
  for (let i = list.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}

function uniqueQuestionsByText(pool) {
  const uniqueMap = new Map();
  for (const item of pool) {
    if (!item || !item.q) {
      continue;
    }
    const key = item.q.toString().trim().toLowerCase();
    if (!uniqueMap.has(key)) {
      uniqueMap.set(key, item);
    }
  }
  return Array.from(uniqueMap.values());
}

function buildRandomQuestionSet(pool, targetCount, examType) {
  if (!Array.isArray(pool) || pool.length === 0) {
    return [];
  }

  const uniquePool = uniqueQuestionsByText(pool);
  if (uniquePool.length === 0) {
    return [];
  }

  let selected;
  if (uniquePool.length >= targetCount) {
    selected = shuffleArray(uniquePool).slice(0, targetCount);
  } else {
    selected = shuffleArray(uniquePool);
  }

  // Avoid same exact question order in consecutive attempts for the same exam.
  const examKey = examType || "GENERIC";
  const lastSeqKey = `igcim_last_sequence_${examKey}`;
  const getSignature = (list) => list.map((q) => q.q.toString().trim().toLowerCase()).join("||");
  const previousSignature = localStorage.getItem(lastSeqKey);
  let currentSignature = getSignature(selected);

  if (previousSignature && selected.length > 1) {
    let retries = 0;
    while (currentSignature === previousSignature && retries < 5) {
      selected = shuffleArray(selected);
      currentSignature = getSignature(selected);
      retries += 1;
    }
  }

  localStorage.setItem(lastSeqKey, currentSignature);
  return selected;
}

function getQuestionBank() {
  return window.IGCIM_QUESTION_BANKS || {};
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
  const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
}

function normalizeText(value) {
  return (value || "").toString().replace(/\s+/g, " ").trim();
}

function upperFirst(value) {
  if (!value) {
    return "";
  }
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function ensureQuestionMark(value) {
  const clean = normalizeText(value);
  if (!clean) {
    return "";
  }
  if (/[?.!]$/.test(clean)) {
    return clean;
  }
  return `${clean}?`;
}

function formatQuestionText(rawQuestion) {
  let text = normalizeText(rawQuestion);
  if (!text) {
    return "";
  }

  const patterns = [
    [/^choose the correct statement about\s+(.+)$/i, "What is the correct statement about $1"],
    [/^select the correct method to\s+(.+)$/i, "What is the correct method to $1"],
    [/^which option is right for\s+(.+)$/i, "Which option is correct for $1"],
    [/^pick the correct answer for\s+(.+)$/i, "What is the correct answer for $1"],
    [/^from the given options,\s*select how to\s+(.+)$/i, "How do you $1"],
    [/^choose the correct statement for\s+(.+)$/i, "What is the correct statement for $1"],
  ];

  for (const [regex, replacement] of patterns) {
    if (regex.test(text)) {
      text = text.replace(regex, replacement);
      break;
    }
  }

  return ensureQuestionMark(upperFirst(text));
}

function formatSourceText(rawSource) {
  const source = normalizeText(rawSource || "General Topic");
  return upperFirst(source);
}

const examForm = document.getElementById("examForm");
if (examForm) {
  const meta = document.getElementById("examMeta");
  const MAX_EXAM_QUESTIONS = 75;
  const EXAM_DURATION_SECONDS = 90 * 60;

  const studentData = localStorage.getItem("igcim_exam_student");
  if (!studentData) {
    meta.textContent = "Student verification not found. Please verify first.";
    examForm.innerHTML = '<a class="btn btn-primary" href="student_verify.html">Go to Verification</a>';
  } else {
    const student = JSON.parse(studentData);
    const allBanks = getQuestionBank();
    const pool = allBanks[student.examType] || [];
    const questions = buildRandomQuestionSet(pool, MAX_EXAM_QUESTIONS, student.examType);

    meta.textContent = `Student: ${student.studentName} | Enrollment: ${student.enrollNo} | Exam: ${student.examType} | Duration: 1 hr 30 min`;

    if (questions.length === 0) {
      examForm.innerHTML = "<p>No questions available for this exam.</p>";
    } else {
      let currentIndex = 0;
      let submitted = false;
      const answers = new Array(questions.length).fill(null);
      let remainingSeconds = EXAM_DURATION_SECONDS;

      const unloadHandler = (e) => {
        if (!submitted) {
          e.preventDefault();
          e.returnValue = "";
        }
      };
      window.addEventListener("beforeunload", unloadHandler);

      examForm.innerHTML = `
        <div class="exam-shell">
          <div class="exam-topbar">
            <div>
              <p class="exam-mini">Exam Progress</p>
              <strong id="examProgressLabel">Question 1 of ${questions.length}</strong>
            </div>
            <div class="exam-top-actions">
              <div class="exam-timer" id="examTimer">${formatTime(remainingSeconds)}</div>
              <button class="btn btn-primary btn-small" type="button" id="submitTopBtn">Submit Exam</button>
              <button class="btn btn-outline btn-small" type="button" id="fullscreenBtn">Fullscreen</button>
            </div>
          </div>
          <div class="exam-progress">
            <span id="examProgressFill"></span>
          </div>
          <div class="exam-layout">
            <aside class="exam-palette" id="examPalette"></aside>
            <section class="question-card" id="questionCard"></section>
          </div>
          <div class="camera-monitor card" id="cameraMonitor">
            <div class="camera-head">
              <strong>Camera Check (Optional)</strong>
              <div class="camera-actions">
                <button type="button" class="btn btn-outline btn-small" id="manualWarnBtn">Mark No Face</button>
                <button type="button" class="btn btn-outline btn-small" id="toggleCameraBtn">Start Camera</button>
              </div>
            </div>
            <div class="camera-feed-wrap">
              <div class="camera-preview">
                <video id="cameraVideo" autoplay muted playsinline></video>
                <canvas id="cameraCanvas"></canvas>
              </div>
            </div>
            <p class="camera-note" id="cameraNotice">Camera is optional. Exam will continue even if camera is unavailable.</p>
          </div>
        </div>
      `;

      const progressLabel = document.getElementById("examProgressLabel");
      const progressFill = document.getElementById("examProgressFill");
      const examTimer = document.getElementById("examTimer");
      const questionCard = document.getElementById("questionCard");
      const examPalette = document.getElementById("examPalette");
      const fullscreenBtn = document.getElementById("fullscreenBtn");
      const submitTopBtn = document.getElementById("submitTopBtn");
      const toggleCameraBtn = document.getElementById("toggleCameraBtn");
      const manualWarnBtn = document.getElementById("manualWarnBtn");
      const cameraVideo = document.getElementById("cameraVideo");
      const cameraCanvas = document.getElementById("cameraCanvas");
      const cameraNotice = document.getElementById("cameraNotice");
      let cameraStream = null;
      let faceTimer = null;
      let fallbackTimer = null;
      let faceDetector = null;
      let cameraActive = false;
      const analysisCanvas = document.createElement("canvas");
      const analysisCtx = analysisCanvas.getContext("2d");

      function startFallbackPresenceMonitor() {
        if (!analysisCtx) {
          return;
        }

        fallbackTimer = setInterval(() => {
          try {
            if (!cameraActive || cameraVideo.readyState < 2) {
              return;
            }

            analysisCanvas.width = 160;
            analysisCanvas.height = 120;
            analysisCtx.drawImage(cameraVideo, 0, 0, analysisCanvas.width, analysisCanvas.height);
            const frame = analysisCtx.getImageData(0, 0, analysisCanvas.width, analysisCanvas.height).data;

            let sum = 0;
            let sumSq = 0;
            for (let i = 0; i < frame.length; i += 4) {
              const gray = (frame[i] + frame[i + 1] + frame[i + 2]) / 3;
              sum += gray;
              sumSq += gray * gray;
            }

            const pixels = frame.length / 4;
            const mean = sum / pixels;
            const variance = (sumSq / pixels) - (mean * mean);

            // Approx obstruction/no clear subject signals (very dark or very flat frame).
            if (mean < 35 || variance < 180) {
              cameraNotice.textContent = "Warning: Camera view may be blocked or face not clearly visible (optional).";
              cameraNotice.classList.add("warning");
            } else {
              cameraNotice.textContent = "Camera active. FaceDetector not supported, so basic visibility check is running.";
              cameraNotice.classList.remove("warning");
            }
          } catch (_err) {
            cameraNotice.textContent = "Camera active. Unable to run visibility check (optional).";
            cameraNotice.classList.remove("warning");
          }
        }, 1500);
      }

      async function setupOptionalCamera() {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
          cameraNotice.textContent = "Camera API not supported in this browser. Exam will continue normally.";
          return;
        }

        try {
          cameraStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
          cameraVideo.srcObject = cameraStream;
          cameraActive = true;
          toggleCameraBtn.textContent = "Stop Camera";
          cameraNotice.textContent = "Camera started. Checking face visibility...";

          if ("FaceDetector" in window) {
            faceDetector = new window.FaceDetector({ fastMode: true, maxDetectedFaces: 1 });
            cameraCanvas.classList.remove("hidden");
            faceTimer = setInterval(async () => {
              try {
                if (!cameraActive || cameraVideo.readyState < 2) {
                  return;
                }
                const faces = await faceDetector.detect(cameraVideo);
                const ctx = cameraCanvas.getContext("2d");
                cameraCanvas.width = cameraVideo.videoWidth || 320;
                cameraCanvas.height = cameraVideo.videoHeight || 180;
                ctx.clearRect(0, 0, cameraCanvas.width, cameraCanvas.height);

                if (faces.length > 0) {
                  const face = faces[0].boundingBox;
                  ctx.strokeStyle = "#16a34a";
                  ctx.lineWidth = 3;
                  ctx.strokeRect(face.x, face.y, face.width, face.height);
                  cameraNotice.textContent = "Face detected. Exam continues.";
                  cameraNotice.classList.remove("warning");
                } else {
                  cameraNotice.textContent = "No face detected right now. Please sit in front of camera (optional).";
                  cameraNotice.classList.add("warning");
                }
              } catch (_err) {
                cameraNotice.textContent = "Face detection failed. Camera remains optional.";
                cameraNotice.classList.remove("warning");
              }
            }, 2000);
          } else {
            cameraCanvas.classList.add("hidden");
            cameraNotice.textContent = "Camera started. FaceDetector API not supported, using basic visibility warning.";
            cameraNotice.classList.remove("warning");
            startFallbackPresenceMonitor();
          }
        } catch (_err) {
          cameraNotice.textContent = "Camera permission denied/unavailable. Exam will continue without camera.";
          cameraNotice.classList.remove("warning");
        }
      }

      function stopOptionalCamera() {
        cameraActive = false;
        if (faceTimer) {
          clearInterval(faceTimer);
          faceTimer = null;
        }
        if (fallbackTimer) {
          clearInterval(fallbackTimer);
          fallbackTimer = null;
        }
        if (cameraStream) {
          cameraStream.getTracks().forEach((track) => track.stop());
          cameraStream = null;
        }
        const ctx = cameraCanvas.getContext("2d");
        ctx.clearRect(0, 0, cameraCanvas.width, cameraCanvas.height);
        cameraCanvas.classList.remove("hidden");
        toggleCameraBtn.textContent = "Start Camera";
        cameraNotice.textContent = "Camera stopped. Exam continues normally.";
        cameraNotice.classList.remove("warning");
      }

      function answeredCount() {
        return answers.filter((answer) => answer !== null).length;
      }

      function updateHeader() {
        progressLabel.textContent = `Question ${currentIndex + 1} of ${questions.length} | Answered ${answeredCount()}/${questions.length}`;
        const currentProgress = ((currentIndex + 1) / questions.length) * 100;
        progressFill.style.width = `${currentProgress}%`;
      }

      function submitExam(isAutoSubmit) {
        if (submitted) {
          return;
        }

        submitted = true;
        if (cameraActive) {
          stopOptionalCamera();
        }
        clearInterval(timerRef);
        window.removeEventListener("beforeunload", unloadHandler);

        let score = 0;
        questions.forEach((question, index) => {
          if (answers[index] === question.answer) {
            score += 1;
          }
        });

        const attempted = answeredCount();
        const unattempted = questions.length - attempted;
        const incorrect = attempted - score;
        const percentage = Math.round((score / questions.length) * 100);
        const result = percentage >= 40 ? "Pass" : "Fail";

        localStorage.setItem("igcim_exam_result", JSON.stringify({
          studentName: student.studentName,
          enrollNo: student.enrollNo,
          examType: student.examType,
          totalQuestions: questions.length,
          marks: score,
          percentage,
          attempted,
          correct: score,
          unattempted,
          incorrect,
          result,
          isAutoSubmit,
          submittedAt: new Date().toISOString(),
        }));

        window.location.href = "result.html";
      }

      function trySubmit(isAutoSubmit) {
        if (isAutoSubmit) {
          submitExam(true);
          return;
        }

        const unanswered = questions.length - answeredCount();
        if (unanswered > 0) {
          const shouldSubmit = window.confirm(`You still have ${unanswered} unattempted question(s). Submit anyway?`);
          if (!shouldSubmit) {
            return;
          }
        }

        submitExam(false);
      }

      function renderPalette() {
        examPalette.innerHTML = questions
          .map((_, index) => {
            const classes = [
              "palette-btn",
              index === currentIndex ? "current" : "",
              answers[index] !== null ? "answered" : "",
            ].join(" ");
            return `<button type="button" class="${classes}" data-index="${index}">${index + 1}</button>`;
          })
          .join("");

        examPalette.querySelectorAll(".palette-btn").forEach((btn) => {
          btn.addEventListener("click", () => {
            currentIndex = Number(btn.dataset.index);
            renderQuestion();
          });
        });
      }

      function renderQuestion() {
        const question = questions[currentIndex];
        const selected = answers[currentIndex];
        const isFirst = currentIndex === 0;
        const isLast = currentIndex === questions.length - 1;
        const displayQuestion = formatQuestionText(question.q || question.question);
        const displaySource = formatSourceText(question.source);
        const options = Array.isArray(question.options) ? question.options : [];

        questionCard.innerHTML = `
          <div class="question-head">
            <h3>Q${currentIndex + 1}. ${displayQuestion}</h3>
            <p class="question-source"><strong>Reference:</strong> ${displaySource}</p>
            <p>Select one correct option.</p>
          </div>
          <div class="option-list">
            ${options
              .map((option, optionIndex) => {
                const activeClass = selected === optionIndex ? "active" : "";
                return `
                  <button type="button" class="option-btn ${activeClass}" data-option="${optionIndex}">
                    <span>${String.fromCharCode(65 + optionIndex)}.</span> ${normalizeText(option)}
                  </button>
                `;
              })
              .join("")}
          </div>
          <div class="exam-controls in-card">
            <button type="button" class="btn btn-outline" id="prevBtn" ${isFirst ? "disabled" : ""}>Previous</button>
            <button type="button" class="btn ${isLast ? "btn-primary" : "btn-outline"}" id="nextBtn">${isLast ? "Submit Exam" : "Next"}</button>
          </div>
        `;

        questionCard.querySelectorAll(".option-btn").forEach((btn) => {
          btn.addEventListener("click", () => {
            answers[currentIndex] = Number(btn.dataset.option);
            renderQuestion();
          });
        });

        document.getElementById("prevBtn").addEventListener("click", () => {
          if (currentIndex > 0) {
            currentIndex -= 1;
            renderQuestion();
          }
        });

        document.getElementById("nextBtn").addEventListener("click", () => {
          if (isLast) {
            trySubmit(false);
            return;
          }

          if (currentIndex < questions.length - 1) {
            currentIndex += 1;
            renderQuestion();
          }
        });

        updateHeader();
        renderPalette();
      }

      submitTopBtn.addEventListener("click", () => {
        trySubmit(false);
      });

      toggleCameraBtn.addEventListener("click", async () => {
        if (cameraActive) {
          stopOptionalCamera();
        } else {
          await setupOptionalCamera();
        }
      });

      manualWarnBtn.addEventListener("click", () => {
        cameraNotice.textContent = "Manual warning: No face detected at this time (optional).";
        cameraNotice.classList.add("warning");
      });

      fullscreenBtn.addEventListener("click", async () => {
        if (document.fullscreenElement) {
          await document.exitFullscreen();
          fullscreenBtn.textContent = "Fullscreen";
        } else if (document.documentElement.requestFullscreen) {
          await document.documentElement.requestFullscreen();
          fullscreenBtn.textContent = "Exit Fullscreen";
        }
      });

      document.addEventListener("keydown", (e) => {
        if (submitted) {
          return;
        }

        if (e.key === "ArrowRight") {
          if (currentIndex < questions.length - 1) {
            currentIndex += 1;
            renderQuestion();
          }
        }

        if (e.key === "ArrowLeft") {
          if (currentIndex > 0) {
            currentIndex -= 1;
            renderQuestion();
          }
        }

        if (["1", "2", "3", "4"].includes(e.key)) {
          const selectedOption = Number(e.key) - 1;
          if (questions[currentIndex].options[selectedOption] !== undefined) {
            answers[currentIndex] = selectedOption;
            renderQuestion();
          }
        }
      });

      const timerRef = setInterval(() => {
        remainingSeconds -= 1;
        examTimer.textContent = formatTime(remainingSeconds);
        if (remainingSeconds <= 300) {
          examTimer.classList.add("danger");
        }
        if (remainingSeconds <= 0) {
          trySubmit(true);
        }
      }, 1000);

      renderQuestion();
    }
  }
}

const resultSummary = document.getElementById("resultSummary");
if (resultSummary) {
  const storedResult = localStorage.getItem("igcim_exam_result");

  if (!storedResult) {
    resultSummary.className = "card";
    resultSummary.innerHTML = `
      <h2>No Result Found</h2>
      <p>Please complete exam first.</p>
      <a class="btn btn-primary" href="student_verify.html">Go to Exam Verification</a>
    `;
  } else {
    const data = JSON.parse(storedResult);
    const resultClass = data.result === "Pass" ? "pass" : "fail";

    resultSummary.className = `card result-box ${resultClass}`;
    resultSummary.innerHTML = `
      <h2>${data.result} - ${data.examType} Exam</h2>
      <p><strong>Student Name:</strong> ${data.studentName}</p>
      <p><strong>Enrollment/Reg No:</strong> ${data.enrollNo}</p>
      <p><strong>Marks:</strong> ${data.marks} out of 75</p>
      <p><strong>Average:</strong> ${data.percentage}%</p>
      <p><strong>Attempted:</strong> ${data.attempted}</p>
      <p><strong>Correct:</strong> ${data.correct}</p>
      <p><strong>Unattempted:</strong> ${data.unattempted}</p>
      <p><strong>Incorrect:</strong> ${data.incorrect}</p>
      <p><strong>Submission Type:</strong> ${data.isAutoSubmit ? "Auto Submitted (Time Up)" : "Submitted by Student"}</p>
      <div class="hero-actions">
        <a href="student_verify.html" class="btn btn-outline">Take Another Exam</a>
        <a href="index.html" class="btn btn-primary">Back to Home</a>
      </div>
    `;
  }
}

const revealElements = document.querySelectorAll(".card, .stat, .question");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show", "reveal");
    }
  });
}, { threshold: 0.1 });

revealElements.forEach((el) => {
  el.classList.add("reveal");
  observer.observe(el);
});
