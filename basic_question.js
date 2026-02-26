(function () {
  const basicQuestions = [
    {
        "q":  "In BASIC, what is the main use of \u0027CPU\u0027?",
        "source":  "CPU",
        "options":  [
                        "perform processing and control operations",
                        "connect to network wirelessly",
                        "access websites and online services",
                        "show running apps and quick access"
                    ],
        "answer":  0
    },
    {
        "q":  "Choose the correct meaning of \u0027CPU\u0027 in BASIC.",
        "source":  "CPU",
        "options":  [
                        "find text quickly",
                        "run and manage computer system",
                        "connect to network wirelessly",
                        "perform processing and control operations"
                    ],
        "answer":  3
    },
    {
        "q":  "For beginner students, \u0027CPU\u0027 is used for:",
        "source":  "CPU",
        "options":  [
                        "perform processing and control operations",
                        "save information with a name",
                        "create a new file or window",
                        "scan physical document to digital file"
                    ],
        "answer":  0
    },
    {
        "q":  "Which option best describes \u0027CPU\u0027 in BASIC course?",
        "source":  "CPU",
        "options":  [
                        "open an existing file",
                        "perform processing and control operations",
                        "main screen workspace after login",
                        "connect to network wirelessly"
                    ],
        "answer":  1
    },
    {
        "q":  "Basic concept check: \u0027CPU\u0027 helps to:",
        "source":  "CPU",
        "options":  [
                        "find text quickly",
                        "connect to network wirelessly",
                        "perform processing and control operations",
                        "type text and commands"
                    ],
        "answer":  2
    },
    {
        "q":  "In practical class, \u0027CPU\u0027 is mostly used to:",
        "source":  "CPU",
        "options":  [
                        "find text quickly",
                        "perform processing and control operations",
                        "access websites and online services",
                        "produce hard copy output"
                    ],
        "answer":  1
    },
    {
        "q":  "Student test: what does \u0027CPU\u0027 mean in ",
        "source":  "CPU",
        "options":  [
                        "save information with a name",
                        "produce hard copy output",
                        "main screen workspace after login",
                        "perform processing and control operations"
                    ],
        "answer":  3
    },
    {
        "q":  "Select the right statement for \u0027CPU\u0027 in this BASIC exam.",
        "source":  "CPU",
        "options":  [
                        "perform processing and control operations",
                        "open an existing file",
                        "point click and select objects",
                        "run and manage computer system"
                    ],
        "answer":  0
    },
    {
        "q":  "\u0027BASIC\u0027 topic \u0027CPU\u0027 is related to:",
        "source":  "CPU",
        "options":  [
                        "find text quickly",
                        "run and manage computer system",
                        "organize many files together",
                        "perform processing and control operations"
                    ],
        "answer":  3
    },
    {
        "q":  "Quick revision: \u0027CPU\u0027 is used for which task?",
        "source":  "CPU",
        "options":  [
                        "perform processing and control operations",
                        "organize many files together",
                        "open an existing file",
                        "main screen workspace after login"
                    ],
        "answer":  0
    },
    {
        "q":  "In BASIC, what is the main use of \u0027Monitor\u0027?",
        "source":  "Monitor",
        "options":  [
                        "display output on screen",
                        "create a new file or window",
                        "main screen workspace after login",
                        "organize many files together"
                    ],
        "answer":  0
    },
    {
        "q":  "Choose the correct meaning of \u0027Monitor\u0027 in BASIC.",
        "source":  "Monitor",
        "options":  [
                        "carry portable storage data",
                        "display output on screen",
                        "open an existing file",
                        "send digital letters and files"
                    ],
        "answer":  1
    },
    {
        "q":  "For beginner students, \u0027Monitor\u0027 is used for:",
        "source":  "Monitor",
        "options":  [
                        "display output on screen",
                        "connect to network wirelessly",
                        "scan physical document to digital file",
                        "main screen workspace after login"
                    ],
        "answer":  0
    },
    {
        "q":  "Which option best describes \u0027Monitor\u0027 in BASIC course?",
        "source":  "Monitor",
        "options":  [
                        "produce hard copy output",
                        "connect to network wirelessly",
                        "display output on screen",
                        "find text quickly"
                    ],
        "answer":  2
    },
    {
        "q":  "Basic concept check: \u0027Monitor\u0027 helps to:",
        "source":  "Monitor",
        "options":  [
                        "create a new file or window",
                        "display output on screen",
                        "save information with a name",
                        "access websites and online services"
                    ],
        "answer":  1
    },
    {
        "q":  "In practical class, \u0027Monitor\u0027 is mostly used to:",
        "source":  "Monitor",
        "options":  [
                        "run and manage computer system",
                        "display output on screen",
                        "create a new file or window",
                        "connect to network wirelessly"
                    ],
        "answer":  1
    },
    {
        "q":  "Student test: what does \u0027Monitor\u0027 mean in ",
        "source":  "Monitor",
        "options":  [
                        "main screen workspace after login",
                        "send digital letters and files",
                        "open an existing file",
                        "display output on screen"
                    ],
        "answer":  3
    },
    {
        "q":  "Select the right statement for \u0027Monitor\u0027 in this BASIC exam.",
        "source":  "Monitor",
        "options":  [
                        "connect to network wirelessly",
                        "display output on screen",
                        "organize many files together",
                        "keep deleted files temporarily"
                    ],
        "answer":  1
    },
    {
        "q":  "\u0027BASIC\u0027 topic \u0027Monitor\u0027 is related to:",
        "source":  "Monitor",
        "options":  [
                        "display output on screen",
                        "organize many files together",
                        "main screen workspace after login",
                        "find text quickly"
                    ],
        "answer":  0
    },
    {
        "q":  "Quick revision: \u0027Monitor\u0027 is used for which task?",
        "source":  "Monitor",
        "options":  [
                        "display output on screen",
                        "type text and commands",
                        "access websites and online services",
                        "main screen workspace after login"
                    ],
        "answer":  0
    },
    {
        "q":  "In BASIC, what is the main use of \u0027Keyboard\u0027?",
        "source":  "Keyboard",
        "options":  [
                        "type text and commands",
                        "main screen workspace after login",
                        "scan physical document to digital file",
                        "perform processing and control operations"
                    ],
        "answer":  0
    },
    {
        "q":  "Choose the correct meaning of \u0027Keyboard\u0027 in BASIC.",
        "source":  "Keyboard",
        "options":  [
                        "keep deleted files temporarily",
                        "type text and commands",
                        "scan physical document to digital file",
                        "store large amount of data"
                    ],
        "answer":  1
    },
    {
        "q":  "For beginner students, \u0027Keyboard\u0027 is used for:",
        "source":  "Keyboard",
        "options":  [
                        "open an existing file",
                        "point click and select objects",
                        "store large amount of data",
                        "type text and commands"
                    ],
        "answer":  3
    },
    {
        "q":  "Which option best describes \u0027Keyboard\u0027 in BASIC course?",
        "source":  "Keyboard",
        "options":  [
                        "send digital letters and files",
                        "save information with a name",
                        "find text quickly",
                        "type text and commands"
                    ],
        "answer":  3
    },
    {
        "q":  "Basic concept check: \u0027Keyboard\u0027 helps to:",
        "source":  "Keyboard",
        "options":  [
                        "create a new file or window",
                        "type text and commands",
                        "open an existing file",
                        "scan physical document to digital file"
                    ],
        "answer":  1
    },
    {
        "q":  "In practical class, \u0027Keyboard\u0027 is mostly used to:",
        "source":  "Keyboard",
        "options":  [
                        "connect to network wirelessly",
                        "point click and select objects",
                        "type text and commands",
                        "carry portable storage data"
                    ],
        "answer":  2
    },
    {
        "q":  "Student test: what does \u0027Keyboard\u0027 mean in ",
        "source":  "Keyboard",
        "options":  [
                        "run and manage computer system",
                        "scan physical document to digital file",
                        "type text and commands",
                        "access websites and online services"
                    ],
        "answer":  2
    },
    {
        "q":  "Select the right statement for \u0027Keyboard\u0027 in this BASIC exam.",
        "source":  "Keyboard",
        "options":  [
                        "display output on screen",
                        "type text and commands",
                        "perform processing and control operations",
                        "keep deleted files temporarily"
                    ],
        "answer":  1
    },
    {
        "q":  "\u0027BASIC\u0027 topic \u0027Keyboard\u0027 is related to:",
        "source":  "Keyboard",
        "options":  [
                        "store large amount of data",
                        "carry portable storage data",
                        "type text and commands",
                        "access websites and online services"
                    ],
        "answer":  2
    },
    {
        "q":  "Quick revision: \u0027Keyboard\u0027 is used for which task?",
        "source":  "Keyboard",
        "options":  [
                        "type text and commands",
                        "scan physical document to digital file",
                        "carry portable storage data",
                        "store large amount of data"
                    ],
        "answer":  0
    },
    {
        "q":  "In BASIC, what is the main use of \u0027Mouse\u0027?",
        "source":  "Mouse",
        "options":  [
                        "point click and select objects",
                        "carry portable storage data",
                        "create a new file or window",
                        "access websites and online services"
                    ],
        "answer":  0
    },
    {
        "q":  "Choose the correct meaning of \u0027Mouse\u0027 in BASIC.",
        "source":  "Mouse",
        "options":  [
                        "scan physical document to digital file",
                        "produce hard copy output",
                        "access websites and online services",
                        "point click and select objects"
                    ],
        "answer":  3
    },
    {
        "q":  "For beginner students, \u0027Mouse\u0027 is used for:",
        "source":  "Mouse",
        "options":  [
                        "point click and select objects",
                        "create a new file or window",
                        "display output on screen",
                        "access websites and online services"
                    ],
        "answer":  0
    },
    {
        "q":  "Which option best describes \u0027Mouse\u0027 in BASIC course?",
        "source":  "Mouse",
        "options":  [
                        "point click and select objects",
                        "produce hard copy output",
                        "send digital letters and files",
                        "save information with a name"
                    ],
        "answer":  0
    },
    {
        "q":  "Basic concept check: \u0027Mouse\u0027 helps to:",
        "source":  "Mouse",
        "options":  [
                        "scan physical document to digital file",
                        "point click and select objects",
                        "find text quickly",
                        "carry portable storage data"
                    ],
        "answer":  1
    },
    {
        "q":  "In practical class, \u0027Mouse\u0027 is mostly used to:",
        "source":  "Mouse",
        "options":  [
                        "carry portable storage data",
                        "point click and select objects",
                        "scan physical document to digital file",
                        "open an existing file"
                    ],
        "answer":  1
    },
    {
        "q":  "Student test: what does \u0027Mouse\u0027 mean in ",
        "source":  "Mouse",
        "options":  [
                        "carry portable storage data",
                        "keep deleted files temporarily",
                        "store large amount of data",
                        "point click and select objects"
                    ],
        "answer":  3
    },
    {
        "q":  "Select the right statement for \u0027Mouse\u0027 in this BASIC exam.",
        "source":  "Mouse",
        "options":  [
                        "type text and commands",
                        "store large amount of data",
                        "point click and select objects",
                        "send digital letters and files"
                    ],
        "answer":  2
    },
    {
        "q":  "\u0027BASIC\u0027 topic \u0027Mouse\u0027 is related to:",
        "source":  "Mouse",
        "options":  [
                        "show running apps and quick access",
                        "save information with a name",
                        "carry portable storage data",
                        "point click and select objects"
                    ],
        "answer":  3
    },
    {
        "q":  "Quick revision: \u0027Mouse\u0027 is used for which task?",
        "source":  "Mouse",
        "options":  [
                        "type text and commands",
                        "carry portable storage data",
                        "connect to network wirelessly",
                        "point click and select objects"
                    ],
        "answer":  3
    },
    {
        "q":  "In BASIC, what is the main use of \u0027Printer\u0027?",
        "source":  "Printer",
        "options":  [
                        "store large amount of data",
                        "save information with a name",
                        "create a new file or window",
                        "produce hard copy output"
                    ],
        "answer":  3
    },
    {
        "q":  "Choose the correct meaning of \u0027Printer\u0027 in BASIC.",
        "source":  "Printer",
        "options":  [
                        "keep deleted files temporarily",
                        "save information with a name",
                        "type text and commands",
                        "produce hard copy output"
                    ],
        "answer":  3
    },
    {
        "q":  "For beginner students, \u0027Printer\u0027 is used for:",
        "source":  "Printer",
        "options":  [
                        "display output on screen",
                        "show running apps and quick access",
                        "produce hard copy output",
                        "keep deleted files temporarily"
                    ],
        "answer":  2
    },
    {
        "q":  "Which option best describes \u0027Printer\u0027 in BASIC course?",
        "source":  "Printer",
        "options":  [
                        "store large amount of data",
                        "carry portable storage data",
                        "produce hard copy output",
                        "point click and select objects"
                    ],
        "answer":  2
    },
    {
        "q":  "Basic concept check: \u0027Printer\u0027 helps to:",
        "source":  "Printer",
        "options":  [
                        "find text quickly",
                        "produce hard copy output",
                        "perform processing and control operations",
                        "organize many files together"
                    ],
        "answer":  1
    },
    {
        "q":  "In practical class, \u0027Printer\u0027 is mostly used to:",
        "source":  "Printer",
        "options":  [
                        "produce hard copy output",
                        "create a new file or window",
                        "find text quickly",
                        "save information with a name"
                    ],
        "answer":  0
    },
    {
        "q":  "Student test: what does \u0027Printer\u0027 mean in ",
        "source":  "Printer",
        "options":  [
                        "perform processing and control operations",
                        "organize many files together",
                        "access websites and online services",
                        "produce hard copy output"
                    ],
        "answer":  3
    },
    {
        "q":  "Select the right statement for \u0027Printer\u0027 in this BASIC exam.",
        "source":  "Printer",
        "options":  [
                        "produce hard copy output",
                        "carry portable storage data",
                        "find text quickly",
                        "scan physical document to digital file"
                    ],
        "answer":  0
    },
    {
        "q":  "\u0027BASIC\u0027 topic \u0027Printer\u0027 is related to:",
        "source":  "Printer",
        "options":  [
                        "run and manage computer system",
                        "perform processing and control operations",
                        "produce hard copy output",
                        "store large amount of data"
                    ],
        "answer":  2
    },
    {
        "q":  "Quick revision: \u0027Printer\u0027 is used for which task?",
        "source":  "Printer",
        "options":  [
                        "produce hard copy output",
                        "organize many files together",
                        "access websites and online services",
                        "perform processing and control operations"
                    ],
        "answer":  0
    },
    {
        "q":  "In BASIC, what is the main use of \u0027Scanner\u0027?",
        "source":  "Scanner",
        "options":  [
                        "type text and commands",
                        "find text quickly",
                        "store large amount of data",
                        "scan physical document to digital file"
                    ],
        "answer":  3
    },
    {
        "q":  "Choose the correct meaning of \u0027Scanner\u0027 in BASIC.",
        "source":  "Scanner",
        "options":  [
                        "find text quickly",
                        "scan physical document to digital file",
                        "access websites and online services",
                        "display output on screen"
                    ],
        "answer":  1
    },
    {
        "q":  "For beginner students, \u0027Scanner\u0027 is used for:",
        "source":  "Scanner",
        "options":  [
                        "organize many files together",
                        "scan physical document to digital file",
                        "display output on screen",
                        "main screen workspace after login"
                    ],
        "answer":  1
    },
    {
        "q":  "Which option best describes \u0027Scanner\u0027 in BASIC course?",
        "source":  "Scanner",
        "options":  [
                        "access websites and online services",
                        "organize many files together",
                        "scan physical document to digital file",
                        "open an existing file"
                    ],
        "answer":  2
    },
    {
        "q":  "Basic concept check: \u0027Scanner\u0027 helps to:",
        "source":  "Scanner",
        "options":  [
                        "open an existing file",
                        "keep deleted files temporarily",
                        "scan physical document to digital file",
                        "store large amount of data"
                    ],
        "answer":  2
    },
    {
        "q":  "In practical class, \u0027Scanner\u0027 is mostly used to:",
        "source":  "Scanner",
        "options":  [
                        "show running apps and quick access",
                        "keep deleted files temporarily",
                        "scan physical document to digital file",
                        "open an existing file"
                    ],
        "answer":  2
    },
    {
        "q":  "Student test: what does \u0027Scanner\u0027 mean in ",
        "source":  "Scanner",
        "options":  [
                        "find text quickly",
                        "scan physical document to digital file",
                        "keep deleted files temporarily",
                        "connect to network wirelessly"
                    ],
        "answer":  1
    },
    {
        "q":  "Select the right statement for \u0027Scanner\u0027 in this BASIC exam.",
        "source":  "Scanner",
        "options":  [
                        "save information with a name",
                        "organize many files together",
                        "scan physical document to digital file",
                        "display output on screen"
                    ],
        "answer":  2
    },
    {
        "q":  "\u0027BASIC\u0027 topic \u0027Scanner\u0027 is related to:",
        "source":  "Scanner",
        "options":  [
                        "open an existing file",
                        "carry portable storage data",
                        "keep deleted files temporarily",
                        "scan physical document to digital file"
                    ],
        "answer":  3
    },
    {
        "q":  "Quick revision: \u0027Scanner\u0027 is used for which task?",
        "source":  "Scanner",
        "options":  [
                        "type text and commands",
                        "scan physical document to digital file",
                        "save information with a name",
                        "store large amount of data"
                    ],
        "answer":  1
    },
    {
        "q":  "In BASIC, what is the main use of \u0027Hard Disk\u0027?",
        "source":  "Hard Disk",
        "options":  [
                        "main screen workspace after login",
                        "send digital letters and files",
                        "store large amount of data",
                        "scan physical document to digital file"
                    ],
        "answer":  2
    },
    {
        "q":  "Choose the correct meaning of \u0027Hard Disk\u0027 in BASIC.",
        "source":  "Hard Disk",
        "options":  [
                        "main screen workspace after login",
                        "store large amount of data",
                        "send digital letters and files",
                        "save information with a name"
                    ],
        "answer":  1
    },
    {
        "q":  "For beginner students, \u0027Hard Disk\u0027 is used for:",
        "source":  "Hard Disk",
        "options":  [
                        "keep deleted files temporarily",
                        "organize many files together",
                        "store large amount of data",
                        "produce hard copy output"
                    ],
        "answer":  2
    },
    {
        "q":  "Which option best describes \u0027Hard Disk\u0027 in BASIC course?",
        "source":  "Hard Disk",
        "options":  [
                        "save information with a name",
                        "store large amount of data",
                        "run and manage computer system",
                        "point click and select objects"
                    ],
        "answer":  1
    },
    {
        "q":  "Basic concept check: \u0027Hard Disk\u0027 helps to:",
        "source":  "Hard Disk",
        "options":  [
                        "perform processing and control operations",
                        "store large amount of data",
                        "access websites and online services",
                        "show running apps and quick access"
                    ],
        "answer":  1
    },
    {
        "q":  "In practical class, \u0027Hard Disk\u0027 is mostly used to:",
        "source":  "Hard Disk",
        "options":  [
                        "type text and commands",
                        "store large amount of data",
                        "show running apps and quick access",
                        "access websites and online services"
                    ],
        "answer":  1
    },
    {
        "q":  "Student test: what does \u0027Hard Disk\u0027 mean in ",
        "source":  "Hard Disk",
        "options":  [
                        "store large amount of data",
                        "display output on screen",
                        "keep deleted files temporarily",
                        "access websites and online services"
                    ],
        "answer":  0
    },
    {
        "q":  "Select the right statement for \u0027Hard Disk\u0027 in this BASIC exam.",
        "source":  "Hard Disk",
        "options":  [
                        "type text and commands",
                        "show running apps and quick access",
                        "organize many files together",
                        "store large amount of data"
                    ],
        "answer":  3
    },
    {
        "q":  "\u0027BASIC\u0027 topic \u0027Hard Disk\u0027 is related to:",
        "source":  "Hard Disk",
        "options":  [
                        "show running apps and quick access",
                        "run and manage computer system",
                        "type text and commands",
                        "store large amount of data"
                    ],
        "answer":  3
    },
    {
        "q":  "Quick revision: \u0027Hard Disk\u0027 is used for which task?",
        "source":  "Hard Disk",
        "options":  [
                        "scan physical document to digital file",
                        "save information with a name",
                        "point click and select objects",
                        "store large amount of data"
                    ],
        "answer":  3
    },
    {
        "q":  "In BASIC, what is the main use of \u0027Pen Drive\u0027?",
        "source":  "Pen Drive",
        "options":  [
                        "open an existing file",
                        "type text and commands",
                        "keep deleted files temporarily",
                        "carry portable storage data"
                    ],
        "answer":  3
    },
    {
        "q":  "Choose the correct meaning of \u0027Pen Drive\u0027 in BASIC.",
        "source":  "Pen Drive",
        "options":  [
                        "produce hard copy output",
                        "find text quickly",
                        "open an existing file",
                        "carry portable storage data"
                    ],
        "answer":  3
    },
    {
        "q":  "For beginner students, \u0027Pen Drive\u0027 is used for:",
        "source":  "Pen Drive",
        "options":  [
                        "show running apps and quick access",
                        "main screen workspace after login",
                        "run and manage computer system",
                        "carry portable storage data"
                    ],
        "answer":  3
    },
    {
        "q":  "Which option best describes \u0027Pen Drive\u0027 in BASIC course?",
        "source":  "Pen Drive",
        "options":  [
                        "show running apps and quick access",
                        "point click and select objects",
                        "find text quickly",
                        "carry portable storage data"
                    ],
        "answer":  3
    },
    {
        "q":  "Basic concept check: \u0027Pen Drive\u0027 helps to:",
        "source":  "Pen Drive",
        "options":  [
                        "carry portable storage data",
                        "type text and commands",
                        "main screen workspace after login",
                        "access websites and online services"
                    ],
        "answer":  0
    },
    {
        "q":  "In practical class, \u0027Pen Drive\u0027 is mostly used to:",
        "source":  "Pen Drive",
        "options":  [
                        "carry portable storage data",
                        "show running apps and quick access",
                        "access websites and online services",
                        "type text and commands"
                    ],
        "answer":  0
    },
    {
        "q":  "Student test: what does \u0027Pen Drive\u0027 mean in ",
        "source":  "Pen Drive",
        "options":  [
                        "access websites and online services",
                        "carry portable storage data",
                        "create a new file or window",
                        "produce hard copy output"
                    ],
        "answer":  1
    },
    {
        "q":  "Select the right statement for \u0027Pen Drive\u0027 in this BASIC exam.",
        "source":  "Pen Drive",
        "options":  [
                        "connect to network wirelessly",
                        "carry portable storage data",
                        "run and manage computer system",
                        "find text quickly"
                    ],
        "answer":  1
    },
    {
        "q":  "\u0027BASIC\u0027 topic \u0027Pen Drive\u0027 is related to:",
        "source":  "Pen Drive",
        "options":  [
                        "store large amount of data",
                        "carry portable storage data",
                        "scan physical document to digital file",
                        "display output on screen"
                    ],
        "answer":  1
    },
    {
        "q":  "Quick revision: \u0027Pen Drive\u0027 is used for which task?",
        "source":  "Pen Drive",
        "options":  [
                        "carry portable storage data",
                        "find text quickly",
                        "save information with a name",
                        "access websites and online services"
                    ],
        "answer":  0
    },
    {
        "q":  "In BASIC, what is the main use of \u0027Operating System\u0027?",
        "source":  "Operating System",
        "options":  [
                        "store large amount of data",
                        "point click and select objects",
                        "access websites and online services",
                        "run and manage computer system"
                    ],
        "answer":  3
    },
    {
        "q":  "Choose the correct meaning of \u0027Operating System\u0027 in BASIC.",
        "source":  "Operating System",
        "options":  [
                        "run and manage computer system",
                        "access websites and online services",
                        "carry portable storage data",
                        "find text quickly"
                    ],
        "answer":  0
    },
    {
        "q":  "For beginner students, \u0027Operating System\u0027 is used for:",
        "source":  "Operating System",
        "options":  [
                        "scan physical document to digital file",
                        "perform processing and control operations",
                        "access websites and online services",
                        "run and manage computer system"
                    ],
        "answer":  3
    },
    {
        "q":  "Which option best describes \u0027Operating System\u0027 in BASIC course?",
        "source":  "Operating System",
        "options":  [
                        "point click and select objects",
                        "run and manage computer system",
                        "keep deleted files temporarily",
                        "connect to network wirelessly"
                    ],
        "answer":  1
    },
    {
        "q":  "Basic concept check: \u0027Operating System\u0027 helps to:",
        "source":  "Operating System",
        "options":  [
                        "run and manage computer system",
                        "perform processing and control operations",
                        "carry portable storage data",
                        "connect to network wirelessly"
                    ],
        "answer":  0
    },
    {
        "q":  "In practical class, \u0027Operating System\u0027 is mostly used to:",
        "source":  "Operating System",
        "options":  [
                        "display output on screen",
                        "run and manage computer system",
                        "find text quickly",
                        "save information with a name"
                    ],
        "answer":  1
    },
    {
        "q":  "Student test: what does \u0027Operating System\u0027 mean in ",
        "source":  "Operating System",
        "options":  [
                        "show running apps and quick access",
                        "carry portable storage data",
                        "run and manage computer system",
                        "scan physical document to digital file"
                    ],
        "answer":  2
    },
    {
        "q":  "Select the right statement for \u0027Operating System\u0027 in this BASIC exam.",
        "source":  "Operating System",
        "options":  [
                        "point click and select objects",
                        "open an existing file",
                        "type text and commands",
                        "run and manage computer system"
                    ],
        "answer":  3
    },
    {
        "q":  "\u0027BASIC\u0027 topic \u0027Operating System\u0027 is related to:",
        "source":  "Operating System",
        "options":  [
                        "find text quickly",
                        "run and manage computer system",
                        "organize many files together",
                        "display output on screen"
                    ],
        "answer":  1
    },
    {
        "q":  "Quick revision: \u0027Operating System\u0027 is used for which task?",
        "source":  "Operating System",
        "options":  [
                        "run and manage computer system",
                        "perform processing and control operations",
                        "organize many files together",
                        "access websites and online services"
                    ],
        "answer":  0
    },
    {
        "q":  "In BASIC, what is the main use of \u0027Desktop\u0027?",
        "source":  "Desktop",
        "options":  [
                        "main screen workspace after login",
                        "carry portable storage data",
                        "type text and commands",
                        "scan physical document to digital file"
                    ],
        "answer":  0
    },
    {
        "q":  "Choose the correct meaning of \u0027Desktop\u0027 in BASIC.",
        "source":  "Desktop",
        "options":  [
                        "main screen workspace after login",
                        "display output on screen",
                        "carry portable storage data",
                        "type text and commands"
                    ],
        "answer":  0
    },
    {
        "q":  "For beginner students, \u0027Desktop\u0027 is used for:",
        "source":  "Desktop",
        "options":  [
                        "access websites and online services",
                        "main screen workspace after login",
                        "run and manage computer system",
                        "keep deleted files temporarily"
                    ],
        "answer":  1
    },
    {
        "q":  "Which option best describes \u0027Desktop\u0027 in BASIC course?",
        "source":  "Desktop",
        "options":  [
                        "perform processing and control operations",
                        "create a new file or window",
                        "organize many files together",
                        "main screen workspace after login"
                    ],
        "answer":  3
    },
    {
        "q":  "Basic concept check: \u0027Desktop\u0027 helps to:",
        "source":  "Desktop",
        "options":  [
                        "send digital letters and files",
                        "main screen workspace after login",
                        "open an existing file",
                        "display output on screen"
                    ],
        "answer":  1
    },
    {
        "q":  "In practical class, \u0027Desktop\u0027 is mostly used to:",
        "source":  "Desktop",
        "options":  [
                        "find text quickly",
                        "produce hard copy output",
                        "main screen workspace after login",
                        "save information with a name"
                    ],
        "answer":  2
    },
    {
        "q":  "Student test: what does \u0027Desktop\u0027 mean in ",
        "source":  "Desktop",
        "options":  [
                        "scan physical document to digital file",
                        "keep deleted files temporarily",
                        "main screen workspace after login",
                        "show running apps and quick access"
                    ],
        "answer":  2
    },
    {
        "q":  "Select the right statement for \u0027Desktop\u0027 in this BASIC exam.",
        "source":  "Desktop",
        "options":  [
                        "find text quickly",
                        "main screen workspace after login",
                        "create a new file or window",
                        "carry portable storage data"
                    ],
        "answer":  1
    },
    {
        "q":  "\u0027BASIC\u0027 topic \u0027Desktop\u0027 is related to:",
        "source":  "Desktop",
        "options":  [
                        "run and manage computer system",
                        "organize many files together",
                        "perform processing and control operations",
                        "main screen workspace after login"
                    ],
        "answer":  3
    },
    {
        "q":  "Quick revision: \u0027Desktop\u0027 is used for which task?",
        "source":  "Desktop",
        "options":  [
                        "main screen workspace after login",
                        "connect to network wirelessly",
                        "display output on screen",
                        "point click and select objects"
                    ],
        "answer":  0
    },
    {
        "q":  "In BASIC, what is the main use of \u0027Taskbar\u0027?",
        "source":  "Taskbar",
        "options":  [
                        "store large amount of data",
                        "display output on screen",
                        "show running apps and quick access",
                        "perform processing and control operations"
                    ],
        "answer":  2
    },
    {
        "q":  "Choose the correct meaning of \u0027Taskbar\u0027 in BASIC.",
        "source":  "Taskbar",
        "options":  [
                        "store large amount of data",
                        "show running apps and quick access",
                        "connect to network wirelessly",
                        "perform processing and control operations"
                    ],
        "answer":  1
    },
    {
        "q":  "For beginner students, \u0027Taskbar\u0027 is used for:",
        "source":  "Taskbar",
        "options":  [
                        "show running apps and quick access",
                        "access websites and online services",
                        "perform processing and control operations",
                        "point click and select objects"
                    ],
        "answer":  0
    },
    {
        "q":  "Which option best describes \u0027Taskbar\u0027 in BASIC course?",
        "source":  "Taskbar",
        "options":  [
                        "keep deleted files temporarily",
                        "show running apps and quick access",
                        "organize many files together",
                        "save information with a name"
                    ],
        "answer":  1
    },
    {
        "q":  "Basic concept check: \u0027Taskbar\u0027 helps to:",
        "source":  "Taskbar",
        "options":  [
                        "organize many files together",
                        "show running apps and quick access",
                        "run and manage computer system",
                        "create a new file or window"
                    ],
        "answer":  1
    },
    {
        "q":  "In practical class, \u0027Taskbar\u0027 is mostly used to:",
        "source":  "Taskbar",
        "options":  [
                        "connect to network wirelessly",
                        "save information with a name",
                        "point click and select objects",
                        "show running apps and quick access"
                    ],
        "answer":  3
    },
    {
        "q":  "Student test: what does \u0027Taskbar\u0027 mean in ",
        "source":  "Taskbar",
        "options":  [
                        "show running apps and quick access",
                        "organize many files together",
                        "access websites and online services",
                        "store large amount of data"
                    ],
        "answer":  0
    },
    {
        "q":  "Select the right statement for \u0027Taskbar\u0027 in this BASIC exam.",
        "source":  "Taskbar",
        "options":  [
                        "type text and commands",
                        "display output on screen",
                        "run and manage computer system",
                        "show running apps and quick access"
                    ],
        "answer":  3
    },
    {
        "q":  "\u0027BASIC\u0027 topic \u0027Taskbar\u0027 is related to:",
        "source":  "Taskbar",
        "options":  [
                        "keep deleted files temporarily",
                        "show running apps and quick access",
                        "store large amount of data",
                        "find text quickly"
                    ],
        "answer":  1
    },
    {
        "q":  "Quick revision: \u0027Taskbar\u0027 is used for which task?",
        "source":  "Taskbar",
        "options":  [
                        "main screen workspace after login",
                        "show running apps and quick access",
                        "run and manage computer system",
                        "open an existing file"
                    ],
        "answer":  1
    },
    {
        "q":  "In BASIC, what is the main use of \u0027Recycle Bin\u0027?",
        "source":  "Recycle Bin",
        "options":  [
                        "keep deleted files temporarily",
                        "show running apps and quick access",
                        "connect to network wirelessly",
                        "scan physical document to digital file"
                    ],
        "answer":  0
    },
    {
        "q":  "Choose the correct meaning of \u0027Recycle Bin\u0027 in BASIC.",
        "source":  "Recycle Bin",
        "options":  [
                        "store large amount of data",
                        "find text quickly",
                        "keep deleted files temporarily",
                        "send digital letters and files"
                    ],
        "answer":  2
    },
    {
        "q":  "For beginner students, \u0027Recycle Bin\u0027 is used for:",
        "source":  "Recycle Bin",
        "options":  [
                        "connect to network wirelessly",
                        "open an existing file",
                        "keep deleted files temporarily",
                        "produce hard copy output"
                    ],
        "answer":  2
    },
    {
        "q":  "Which option best describes \u0027Recycle Bin\u0027 in BASIC course?",
        "source":  "Recycle Bin",
        "options":  [
                        "carry portable storage data",
                        "open an existing file",
                        "keep deleted files temporarily",
                        "point click and select objects"
                    ],
        "answer":  2
    },
    {
        "q":  "Basic concept check: \u0027Recycle Bin\u0027 helps to:",
        "source":  "Recycle Bin",
        "options":  [
                        "save information with a name",
                        "type text and commands",
                        "keep deleted files temporarily",
                        "main screen workspace after login"
                    ],
        "answer":  2
    },
    {
        "q":  "In practical class, \u0027Recycle Bin\u0027 is mostly used to:",
        "source":  "Recycle Bin",
        "options":  [
                        "point click and select objects",
                        "store large amount of data",
                        "keep deleted files temporarily",
                        "carry portable storage data"
                    ],
        "answer":  2
    },
    {
        "q":  "Student test: what does \u0027Recycle Bin\u0027 mean in ",
        "source":  "Recycle Bin",
        "options":  [
                        "display output on screen",
                        "produce hard copy output",
                        "open an existing file",
                        "keep deleted files temporarily"
                    ],
        "answer":  3
    },
    {
        "q":  "Select the right statement for \u0027Recycle Bin\u0027 in this BASIC exam.",
        "source":  "Recycle Bin",
        "options":  [
                        "find text quickly",
                        "perform processing and control operations",
                        "keep deleted files temporarily",
                        "access websites and online services"
                    ],
        "answer":  2
    },
    {
        "q":  "\u0027BASIC\u0027 topic \u0027Recycle Bin\u0027 is related to:",
        "source":  "Recycle Bin",
        "options":  [
                        "create a new file or window",
                        "keep deleted files temporarily",
                        "store large amount of data",
                        "main screen workspace after login"
                    ],
        "answer":  1
    },
    {
        "q":  "Quick revision: \u0027Recycle Bin\u0027 is used for which task?",
        "source":  "Recycle Bin",
        "options":  [
                        "display output on screen",
                        "run and manage computer system",
                        "keep deleted files temporarily",
                        "send digital letters and files"
                    ],
        "answer":  2
    },
    {
        "q":  "In BASIC, what is the main use of \u0027Ctrl + N\u0027?",
        "source":  "Ctrl + N",
        "options":  [
                        "produce hard copy output",
                        "create a new file or window",
                        "main screen workspace after login",
                        "organize many files together"
                    ],
        "answer":  1
    },
    {
        "q":  "Choose the correct meaning of \u0027Ctrl + N\u0027 in BASIC.",
        "source":  "Ctrl + N",
        "options":  [
                        "main screen workspace after login",
                        "create a new file or window",
                        "organize many files together",
                        "open an existing file"
                    ],
        "answer":  1
    },
    {
        "q":  "For beginner students, \u0027Ctrl + N\u0027 is used for:",
        "source":  "Ctrl + N",
        "options":  [
                        "show running apps and quick access",
                        "scan physical document to digital file",
                        "perform processing and control operations",
                        "create a new file or window"
                    ],
        "answer":  3
    },
    {
        "q":  "Which option best describes \u0027Ctrl + N\u0027 in BASIC course?",
        "source":  "Ctrl + N",
        "options":  [
                        "type text and commands",
                        "perform processing and control operations",
                        "create a new file or window",
                        "access websites and online services"
                    ],
        "answer":  2
    },
    {
        "q":  "Basic concept check: \u0027Ctrl + N\u0027 helps to:",
        "source":  "Ctrl + N",
        "options":  [
                        "perform processing and control operations",
                        "carry portable storage data",
                        "create a new file or window",
                        "show running apps and quick access"
                    ],
        "answer":  2
    },
    {
        "q":  "In practical class, \u0027Ctrl + N\u0027 is mostly used to:",
        "source":  "Ctrl + N",
        "options":  [
                        "create a new file or window",
                        "keep deleted files temporarily",
                        "find text quickly",
                        "type text and commands"
                    ],
        "answer":  0
    },
    {
        "q":  "Student test: what does \u0027Ctrl + N\u0027 mean in ",
        "source":  "Ctrl + N",
        "options":  [
                        "organize many files together",
                        "open an existing file",
                        "create a new file or window",
                        "keep deleted files temporarily"
                    ],
        "answer":  2
    },
    {
        "q":  "Select the right statement for \u0027Ctrl + N\u0027 in this BASIC exam.",
        "source":  "Ctrl + N",
        "options":  [
                        "organize many files together",
                        "create a new file or window",
                        "type text and commands",
                        "access websites and online services"
                    ],
        "answer":  1
    },
    {
        "q":  "\u0027BASIC\u0027 topic \u0027Ctrl + N\u0027 is related to:",
        "source":  "Ctrl + N",
        "options":  [
                        "save information with a name",
                        "create a new file or window",
                        "display output on screen",
                        "find text quickly"
                    ],
        "answer":  1
    },
    {
        "q":  "Quick revision: \u0027Ctrl + N\u0027 is used for which task?",
        "source":  "Ctrl + N",
        "options":  [
                        "carry portable storage data",
                        "create a new file or window",
                        "produce hard copy output",
                        "connect to network wirelessly"
                    ],
        "answer":  1
    },
    {
        "q":  "In BASIC, what is the main use of \u0027Ctrl + O\u0027?",
        "source":  "Ctrl + O",
        "options":  [
                        "point click and select objects",
                        "open an existing file",
                        "store large amount of data",
                        "keep deleted files temporarily"
                    ],
        "answer":  1
    },
    {
        "q":  "Choose the correct meaning of \u0027Ctrl + O\u0027 in BASIC.",
        "source":  "Ctrl + O",
        "options":  [
                        "open an existing file",
                        "carry portable storage data",
                        "connect to network wirelessly",
                        "save information with a name"
                    ],
        "answer":  0
    },
    {
        "q":  "For beginner students, \u0027Ctrl + O\u0027 is used for:",
        "source":  "Ctrl + O",
        "options":  [
                        "connect to network wirelessly",
                        "organize many files together",
                        "display output on screen",
                        "open an existing file"
                    ],
        "answer":  3
    },
    {
        "q":  "Which option best describes \u0027Ctrl + O\u0027 in BASIC course?",
        "source":  "Ctrl + O",
        "options":  [
                        "perform processing and control operations",
                        "display output on screen",
                        "scan physical document to digital file",
                        "open an existing file"
                    ],
        "answer":  3
    },
    {
        "q":  "Basic concept check: \u0027Ctrl + O\u0027 helps to:",
        "source":  "Ctrl + O",
        "options":  [
                        "store large amount of data",
                        "display output on screen",
                        "find text quickly",
                        "open an existing file"
                    ],
        "answer":  3
    },
    {
        "q":  "In practical class, \u0027Ctrl + O\u0027 is mostly used to:",
        "source":  "Ctrl + O",
        "options":  [
                        "organize many files together",
                        "open an existing file",
                        "main screen workspace after login",
                        "send digital letters and files"
                    ],
        "answer":  1
    },
    {
        "q":  "Student test: what does \u0027Ctrl + O\u0027 mean in ",
        "source":  "Ctrl + O",
        "options":  [
                        "create a new file or window",
                        "find text quickly",
                        "open an existing file",
                        "save information with a name"
                    ],
        "answer":  2
    },
    {
        "q":  "Select the right statement for \u0027Ctrl + O\u0027 in this BASIC exam.",
        "source":  "Ctrl + O",
        "options":  [
                        "show running apps and quick access",
                        "run and manage computer system",
                        "open an existing file",
                        "connect to network wirelessly"
                    ],
        "answer":  2
    },
    {
        "q":  "\u0027BASIC\u0027 topic \u0027Ctrl + O\u0027 is related to:",
        "source":  "Ctrl + O",
        "options":  [
                        "run and manage computer system",
                        "main screen workspace after login",
                        "open an existing file",
                        "type text and commands"
                    ],
        "answer":  2
    },
    {
        "q":  "Quick revision: \u0027Ctrl + O\u0027 is used for which task?",
        "source":  "Ctrl + O",
        "options":  [
                        "open an existing file",
                        "carry portable storage data",
                        "display output on screen",
                        "store large amount of data"
                    ],
        "answer":  0
    },
    {
        "q":  "In BASIC, what is the main use of \u0027Ctrl + F\u0027?",
        "source":  "Ctrl + F",
        "options":  [
                        "save information with a name",
                        "carry portable storage data",
                        "keep deleted files temporarily",
                        "find text quickly"
                    ],
        "answer":  3
    },
    {
        "q":  "Choose the correct meaning of \u0027Ctrl + F\u0027 in BASIC.",
        "source":  "Ctrl + F",
        "options":  [
                        "access websites and online services",
                        "main screen workspace after login",
                        "scan physical document to digital file",
                        "find text quickly"
                    ],
        "answer":  3
    },
    {
        "q":  "For beginner students, \u0027Ctrl + F\u0027 is used for:",
        "source":  "Ctrl + F",
        "options":  [
                        "find text quickly",
                        "run and manage computer system",
                        "show running apps and quick access",
                        "create a new file or window"
                    ],
        "answer":  0
    },
    {
        "q":  "Which option best describes \u0027Ctrl + F\u0027 in BASIC course?",
        "source":  "Ctrl + F",
        "options":  [
                        "open an existing file",
                        "find text quickly",
                        "scan physical document to digital file",
                        "main screen workspace after login"
                    ],
        "answer":  1
    },
    {
        "q":  "Basic concept check: \u0027Ctrl + F\u0027 helps to:",
        "source":  "Ctrl + F",
        "options":  [
                        "connect to network wirelessly",
                        "find text quickly",
                        "show running apps and quick access",
                        "open an existing file"
                    ],
        "answer":  1
    },
    {
        "q":  "In practical class, \u0027Ctrl + F\u0027 is mostly used to:",
        "source":  "Ctrl + F",
        "options":  [
                        "scan physical document to digital file",
                        "find text quickly",
                        "connect to network wirelessly",
                        "open an existing file"
                    ],
        "answer":  1
    },
    {
        "q":  "Student test: what does \u0027Ctrl + F\u0027 mean in ",
        "source":  "Ctrl + F",
        "options":  [
                        "type text and commands",
                        "scan physical document to digital file",
                        "run and manage computer system",
                        "find text quickly"
                    ],
        "answer":  3
    },
    {
        "q":  "Select the right statement for \u0027Ctrl + F\u0027 in this BASIC exam.",
        "source":  "Ctrl + F",
        "options":  [
                        "display output on screen",
                        "type text and commands",
                        "point click and select objects",
                        "find text quickly"
                    ],
        "answer":  3
    },
    {
        "q":  "\u0027BASIC\u0027 topic \u0027Ctrl + F\u0027 is related to:",
        "source":  "Ctrl + F",
        "options":  [
                        "send digital letters and files",
                        "run and manage computer system",
                        "find text quickly",
                        "access websites and online services"
                    ],
        "answer":  2
    },
    {
        "q":  "Quick revision: \u0027Ctrl + F\u0027 is used for which task?",
        "source":  "Ctrl + F",
        "options":  [
                        "create a new file or window",
                        "point click and select objects",
                        "find text quickly",
                        "access websites and online services"
                    ],
        "answer":  2
    },
    {
        "q":  "In BASIC, what is the main use of \u0027Internet\u0027?",
        "source":  "Internet",
        "options":  [
                        "save information with a name",
                        "access websites and online services",
                        "send digital letters and files",
                        "create a new file or window"
                    ],
        "answer":  1
    },
    {
        "q":  "Choose the correct meaning of \u0027Internet\u0027 in BASIC.",
        "source":  "Internet",
        "options":  [
                        "create a new file or window",
                        "carry portable storage data",
                        "access websites and online services",
                        "run and manage computer system"
                    ],
        "answer":  2
    },
    {
        "q":  "For beginner students, \u0027Internet\u0027 is used for:",
        "source":  "Internet",
        "options":  [
                        "access websites and online services",
                        "carry portable storage data",
                        "keep deleted files temporarily",
                        "organize many files together"
                    ],
        "answer":  0
    },
    {
        "q":  "Which option best describes \u0027Internet\u0027 in BASIC course?",
        "source":  "Internet",
        "options":  [
                        "perform processing and control operations",
                        "access websites and online services",
                        "store large amount of data",
                        "show running apps and quick access"
                    ],
        "answer":  1
    },
    {
        "q":  "Basic concept check: \u0027Internet\u0027 helps to:",
        "source":  "Internet",
        "options":  [
                        "create a new file or window",
                        "find text quickly",
                        "access websites and online services",
                        "open an existing file"
                    ],
        "answer":  2
    },
    {
        "q":  "In practical class, \u0027Internet\u0027 is mostly used to:",
        "source":  "Internet",
        "options":  [
                        "send digital letters and files",
                        "access websites and online services",
                        "display output on screen",
                        "run and manage computer system"
                    ],
        "answer":  1
    },
    {
        "q":  "Student test: what does \u0027Internet\u0027 mean in ",
        "source":  "Internet",
        "options":  [
                        "keep deleted files temporarily",
                        "find text quickly",
                        "create a new file or window",
                        "access websites and online services"
                    ],
        "answer":  3
    },
    {
        "q":  "Select the right statement for \u0027Internet\u0027 in this BASIC exam.",
        "source":  "Internet",
        "options":  [
                        "point click and select objects",
                        "keep deleted files temporarily",
                        "run and manage computer system",
                        "access websites and online services"
                    ],
        "answer":  3
    },
    {
        "q":  "\u0027BASIC\u0027 topic \u0027Internet\u0027 is related to:",
        "source":  "Internet",
        "options":  [
                        "access websites and online services",
                        "open an existing file",
                        "produce hard copy output",
                        "save information with a name"
                    ],
        "answer":  0
    },
    {
        "q":  "Quick revision: \u0027Internet\u0027 is used for which task?",
        "source":  "Internet",
        "options":  [
                        "produce hard copy output",
                        "create a new file or window",
                        "open an existing file",
                        "access websites and online services"
                    ],
        "answer":  3
    },
    {
        "q":  "In BASIC, what is the main use of \u0027Wi-Fi\u0027?",
        "source":  "Wi-Fi",
        "options":  [
                        "display output on screen",
                        "connect to network wirelessly",
                        "open an existing file",
                        "access websites and online services"
                    ],
        "answer":  1
    },
    {
        "q":  "Choose the correct meaning of \u0027Wi-Fi\u0027 in BASIC.",
        "source":  "Wi-Fi",
        "options":  [
                        "show running apps and quick access",
                        "keep deleted files temporarily",
                        "connect to network wirelessly",
                        "point click and select objects"
                    ],
        "answer":  2
    },
    {
        "q":  "For beginner students, \u0027Wi-Fi\u0027 is used for:",
        "source":  "Wi-Fi",
        "options":  [
                        "run and manage computer system",
                        "scan physical document to digital file",
                        "produce hard copy output",
                        "connect to network wirelessly"
                    ],
        "answer":  3
    },
    {
        "q":  "Which option best describes \u0027Wi-Fi\u0027 in BASIC course?",
        "source":  "Wi-Fi",
        "options":  [
                        "send digital letters and files",
                        "connect to network wirelessly",
                        "display output on screen",
                        "main screen workspace after login"
                    ],
        "answer":  1
    },
    {
        "q":  "Basic concept check: \u0027Wi-Fi\u0027 helps to:",
        "source":  "Wi-Fi",
        "options":  [
                        "store large amount of data",
                        "access websites and online services",
                        "connect to network wirelessly",
                        "scan physical document to digital file"
                    ],
        "answer":  2
    },
    {
        "q":  "In practical class, \u0027Wi-Fi\u0027 is mostly used to:",
        "source":  "Wi-Fi",
        "options":  [
                        "point click and select objects",
                        "show running apps and quick access",
                        "connect to network wirelessly",
                        "type text and commands"
                    ],
        "answer":  2
    },
    {
        "q":  "Student test: what does \u0027Wi-Fi\u0027 mean in ",
        "source":  "Wi-Fi",
        "options":  [
                        "store large amount of data",
                        "send digital letters and files",
                        "connect to network wirelessly",
                        "open an existing file"
                    ],
        "answer":  2
    },
    {
        "q":  "Select the right statement for \u0027Wi-Fi\u0027 in this BASIC exam.",
        "source":  "Wi-Fi",
        "options":  [
                        "connect to network wirelessly",
                        "carry portable storage data",
                        "open an existing file",
                        "scan physical document to digital file"
                    ],
        "answer":  0
    },
    {
        "q":  "\u0027BASIC\u0027 topic \u0027Wi-Fi\u0027 is related to:",
        "source":  "Wi-Fi",
        "options":  [
                        "send digital letters and files",
                        "connect to network wirelessly",
                        "carry portable storage data",
                        "find text quickly"
                    ],
        "answer":  1
    },
    {
        "q":  "Quick revision: \u0027Wi-Fi\u0027 is used for which task?",
        "source":  "Wi-Fi",
        "options":  [
                        "create a new file or window",
                        "connect to network wirelessly",
                        "main screen workspace after login",
                        "send digital letters and files"
                    ],
        "answer":  1
    },
    {
        "q":  "In BASIC, what is the main use of \u0027Email\u0027?",
        "source":  "Email",
        "options":  [
                        "access websites and online services",
                        "scan physical document to digital file",
                        "produce hard copy output",
                        "send digital letters and files"
                    ],
        "answer":  3
    },
    {
        "q":  "Choose the correct meaning of \u0027Email\u0027 in BASIC.",
        "source":  "Email",
        "options":  [
                        "send digital letters and files",
                        "save information with a name",
                        "organize many files together",
                        "main screen workspace after login"
                    ],
        "answer":  0
    },
    {
        "q":  "For beginner students, \u0027Email\u0027 is used for:",
        "source":  "Email",
        "options":  [
                        "save information with a name",
                        "point click and select objects",
                        "send digital letters and files",
                        "produce hard copy output"
                    ],
        "answer":  2
    },
    {
        "q":  "Which option best describes \u0027Email\u0027 in BASIC course?",
        "source":  "Email",
        "options":  [
                        "access websites and online services",
                        "send digital letters and files",
                        "keep deleted files temporarily",
                        "run and manage computer system"
                    ],
        "answer":  1
    },
    {
        "q":  "Basic concept check: \u0027Email\u0027 helps to:",
        "source":  "Email",
        "options":  [
                        "send digital letters and files",
                        "carry portable storage data",
                        "perform processing and control operations",
                        "type text and commands"
                    ],
        "answer":  0
    },
    {
        "q":  "In practical class, \u0027Email\u0027 is mostly used to:",
        "source":  "Email",
        "options":  [
                        "send digital letters and files",
                        "type text and commands",
                        "store large amount of data",
                        "point click and select objects"
                    ],
        "answer":  0
    },
    {
        "q":  "Student test: what does \u0027Email\u0027 mean in ",
        "source":  "Email",
        "options":  [
                        "send digital letters and files",
                        "connect to network wirelessly",
                        "store large amount of data",
                        "main screen workspace after login"
                    ],
        "answer":  0
    },
    {
        "q":  "Select the right statement for \u0027Email\u0027 in this BASIC exam.",
        "source":  "Email",
        "options":  [
                        "send digital letters and files",
                        "organize many files together",
                        "open an existing file",
                        "main screen workspace after login"
                    ],
        "answer":  0
    },
    {
        "q":  "\u0027BASIC\u0027 topic \u0027Email\u0027 is related to:",
        "source":  "Email",
        "options":  [
                        "perform processing and control operations",
                        "display output on screen",
                        "send digital letters and files",
                        "keep deleted files temporarily"
                    ],
        "answer":  2
    },
    {
        "q":  "Quick revision: \u0027Email\u0027 is used for which task?",
        "source":  "Email",
        "options":  [
                        "save information with a name",
                        "send digital letters and files",
                        "run and manage computer system",
                        "show running apps and quick access"
                    ],
        "answer":  1
    },
    {
        "q":  "In BASIC, what is the main use of \u0027File\u0027?",
        "source":  "File",
        "options":  [
                        "find text quickly",
                        "carry portable storage data",
                        "save information with a name",
                        "organize many files together"
                    ],
        "answer":  2
    },
    {
        "q":  "Choose the correct meaning of \u0027File\u0027 in BASIC.",
        "source":  "File",
        "options":  [
                        "scan physical document to digital file",
                        "display output on screen",
                        "access websites and online services",
                        "save information with a name"
                    ],
        "answer":  3
    },
    {
        "q":  "For beginner students, \u0027File\u0027 is used for:",
        "source":  "File",
        "options":  [
                        "carry portable storage data",
                        "scan physical document to digital file",
                        "display output on screen",
                        "save information with a name"
                    ],
        "answer":  3
    },
    {
        "q":  "Which option best describes \u0027File\u0027 in BASIC course?",
        "source":  "File",
        "options":  [
                        "connect to network wirelessly",
                        "save information with a name",
                        "organize many files together",
                        "keep deleted files temporarily"
                    ],
        "answer":  1
    },
    {
        "q":  "Basic concept check: \u0027File\u0027 helps to:",
        "source":  "File",
        "options":  [
                        "save information with a name",
                        "show running apps and quick access",
                        "connect to network wirelessly",
                        "organize many files together"
                    ],
        "answer":  0
    },
    {
        "q":  "In practical class, \u0027File\u0027 is mostly used to:",
        "source":  "File",
        "options":  [
                        "save information with a name",
                        "find text quickly",
                        "send digital letters and files",
                        "organize many files together"
                    ],
        "answer":  0
    },
    {
        "q":  "Student test: what does \u0027File\u0027 mean in ",
        "source":  "File",
        "options":  [
                        "open an existing file",
                        "display output on screen",
                        "scan physical document to digital file",
                        "save information with a name"
                    ],
        "answer":  3
    },
    {
        "q":  "Select the right statement for \u0027File\u0027 in this BASIC exam.",
        "source":  "File",
        "options":  [
                        "show running apps and quick access",
                        "connect to network wirelessly",
                        "organize many files together",
                        "save information with a name"
                    ],
        "answer":  3
    },
    {
        "q":  "\u0027BASIC\u0027 topic \u0027File\u0027 is related to:",
        "source":  "File",
        "options":  [
                        "save information with a name",
                        "connect to network wirelessly",
                        "show running apps and quick access",
                        "carry portable storage data"
                    ],
        "answer":  0
    },
    {
        "q":  "Quick revision: \u0027File\u0027 is used for which task?",
        "source":  "File",
        "options":  [
                        "find text quickly",
                        "carry portable storage data",
                        "store large amount of data",
                        "save information with a name"
                    ],
        "answer":  3
    },
    {
        "q":  "In BASIC, what is the main use of \u0027Folder\u0027?",
        "source":  "Folder",
        "options":  [
                        "run and manage computer system",
                        "access websites and online services",
                        "find text quickly",
                        "organize many files together"
                    ],
        "answer":  3
    },
    {
        "q":  "Choose the correct meaning of \u0027Folder\u0027 in BASIC.",
        "source":  "Folder",
        "options":  [
                        "show running apps and quick access",
                        "run and manage computer system",
                        "organize many files together",
                        "main screen workspace after login"
                    ],
        "answer":  2
    },
    {
        "q":  "For beginner students, \u0027Folder\u0027 is used for:",
        "source":  "Folder",
        "options":  [
                        "produce hard copy output",
                        "main screen workspace after login",
                        "organize many files together",
                        "carry portable storage data"
                    ],
        "answer":  2
    },
    {
        "q":  "Which option best describes \u0027Folder\u0027 in BASIC course?",
        "source":  "Folder",
        "options":  [
                        "type text and commands",
                        "create a new file or window",
                        "send digital letters and files",
                        "organize many files together"
                    ],
        "answer":  3
    },
    {
        "q":  "Basic concept check: \u0027Folder\u0027 helps to:",
        "source":  "Folder",
        "options":  [
                        "connect to network wirelessly",
                        "point click and select objects",
                        "run and manage computer system",
                        "organize many files together"
                    ],
        "answer":  3
    },
    {
        "q":  "In practical class, \u0027Folder\u0027 is mostly used to:",
        "source":  "Folder",
        "options":  [
                        "produce hard copy output",
                        "keep deleted files temporarily",
                        "show running apps and quick access",
                        "organize many files together"
                    ],
        "answer":  3
    },
    {
        "q":  "Student test: what does \u0027Folder\u0027 mean in ",
        "source":  "Folder",
        "options":  [
                        "main screen workspace after login",
                        "store large amount of data",
                        "show running apps and quick access",
                        "organize many files together"
                    ],
        "answer":  3
    },
    {
        "q":  "Select the right statement for \u0027Folder\u0027 in this BASIC exam.",
        "source":  "Folder",
        "options":  [
                        "display output on screen",
                        "point click and select objects",
                        "scan physical document to digital file",
                        "organize many files together"
                    ],
        "answer":  3
    },
    {
        "q":  "\u0027BASIC\u0027 topic \u0027Folder\u0027 is related to:",
        "source":  "Folder",
        "options":  [
                        "point click and select objects",
                        "save information with a name",
                        "run and manage computer system",
                        "organize many files together"
                    ],
        "answer":  3
    },
    {
        "q":  "Quick revision: \u0027Folder\u0027 is used for which task?",
        "source":  "Folder",
        "options":  [
                        "connect to network wirelessly",
                        "organize many files together",
                        "open an existing file",
                        "store large amount of data"
                    ],
        "answer":  1
    }
];

  window.IGCIM_QUESTION_BANKS = window.IGCIM_QUESTION_BANKS || {};
  window.IGCIM_QUESTION_BANKS.BASIC = basicQuestions;
})();

