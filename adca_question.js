(function () {
  const adcaQuestions = [
    {
        "q":  "Choose the correct statement about design page layout in Pagemkaer.",
        "source":  "Pagemkaer",
        "options":  [
                        "Use a browser and search engine with keywords",
                        "Press F5 to start slide show from first slide",
                        "Use selection tools and layer mask to remove background",
                        "Use text frames and layout tools for page design"
                    ],
        "answer":  3
    },
    {
        "q":  "Select the correct method to create a heading in HTML page.",
        "source":  "HTML",
        "options":  [
                        "Use selection tools and layer mask to remove background",
                        "Open Start menu and choose Microsoft Excel",
                        "Use anchor tag with href attribute for link",
                        "Use h1 to h6 tags to create headings"
                    ],
        "answer":  3
    },
    {
        "q":  "From the given options, select how to make selected text bold in Word.",
        "source":  "Word",
        "options":  [
                        "Keyboard, mouse, and scanner are input devices",
                        "Select file, press F2, type new name, and press Enter",
                        "Use Ctrl plus S to save the current document",
                        "Use Ctrl plus B to apply bold formatting"
                    ],
        "answer":  3
    },
    {
        "q":  "Which option is right for record sales entry in Tally?",
        "source":  "Tally",
        "options":  [
                        "Use anchor tag with href attribute for link",
                        "Use text frames and layout tools for page design",
                        "Open Sales voucher and enter invoice details",
                        "Monitor, printer, and speaker are output devices"
                    ],
        "answer":  2
    },
    {
        "q":  "Which option is right for remove background in Photoshop?",
        "source":  "Photoshop",
        "options":  [
                        "Use query to filter and view required records",
                        "Use selection tools and layer mask to remove background",
                        "Use anchor tag with href attribute for link",
                        "Use table design or datasheet view to create table"
                    ],
        "answer":  1
    },
    {
        "q":  "Which of the following is the correct way to send email with attachment?",
        "source":  "Internet",
        "options":  [
                        "Use SUM formula to add selected cells",
                        "Open Sales voucher and enter invoice details",
                        "Use a browser and search engine with keywords",
                        "Compose email, attach file, then click send"
                    ],
        "answer":  3
    },
    {
        "q":  "Which option is right for create a table in MS Access?",
        "source":  "Access",
        "options":  [
                        "Use table design or datasheet view to create table",
                        "Keyboard, mouse, and scanner are input devices",
                        "Use anchor tag with href attribute for link",
                        "Monitor, printer, and speaker are output devices"
                    ],
        "answer":  0
    },
    {
        "q":  "Pick the correct answer for design page layout in Pagemkaer.",
        "source":  "Pagemkaer",
        "options":  [
                        "Use Ctrl plus M to insert a new slide",
                        "Monitor, printer, and speaker are output devices",
                        "Use text frames and layout tools for page design",
                        "Use SUM formula to add selected cells"
                    ],
        "answer":  2
    },
    {
        "q":  "Select the correct method to draw vector shape in CorelDraw.",
        "source":  "CorelDraw",
        "options":  [
                        "Use h1 to h6 tags to create headings",
                        "Use Ctrl plus M to insert a new slide",
                        "Select file, press F2, type new name, and press Enter",
                        "Use shape tools to create editable vector objects"
                    ],
        "answer":  3
    },
    {
        "q":  "Select the correct method to record sales entry in Tally.",
        "source":  "Tally",
        "options":  [
                        "Open Sales voucher and enter invoice details",
                        "Open Start menu and choose Microsoft Excel",
                        "Select data and insert chart from Insert tab",
                        "Use selection tools and layer mask to remove background"
                    ],
        "answer":  0
    },
    {
        "q":  "What is the best way to start a slide show in PowerPoint?",
        "source":  "PowerPoint",
        "options":  [
                        "Use anchor tag with href attribute for link",
                        "Keyboard, mouse, and scanner are input devices",
                        "Press F5 to start slide show from first slide",
                        "Select data and insert chart from Insert tab"
                    ],
        "answer":  2
    },
    {
        "q":  "From the given options, select how to design page layout in Pagemkaer.",
        "source":  "Pagemkaer",
        "options":  [
                        "Open Start menu and choose Microsoft Word",
                        "Use text frames and layout tools for page design",
                        "Compose email, attach file, then click send",
                        "Monitor, printer, and speaker are output devices"
                    ],
        "answer":  1
    },
    {
        "q":  "From the given options, select how to start a slide show in PowerPoint.",
        "source":  "PowerPoint",
        "options":  [
                        "Open Start menu and choose Microsoft Word",
                        "Use anchor tag with href attribute for link",
                        "Use query to filter and view required records",
                        "Press F5 to start slide show from first slide"
                    ],
        "answer":  3
    },
    {
        "q":  "From the given options, select how to remove background in Photoshop.",
        "source":  "Photoshop",
        "options":  [
                        "Monitor, printer, and speaker are output devices",
                        "Use a browser and search engine with keywords",
                        "Select data and insert chart from Insert tab",
                        "Use selection tools and layer mask to remove background"
                    ],
        "answer":  3
    },
    {
        "q":  "Which of the following is the correct way to add new slide in PowerPoint?",
        "source":  "PowerPoint",
        "options":  [
                        "Press Windows plus E to open File Explorer",
                        "Use Ctrl plus M to insert a new slide",
                        "Use selection tools and layer mask to remove background",
                        "Press F5 to start slide show from first slide"
                    ],
        "answer":  1
    },
    {
        "q":  "Which of the following is the correct way to create a heading in HTML page?",
        "source":  "HTML",
        "options":  [
                        "Use h1 to h6 tags to create headings",
                        "Use selection tools and layer mask to remove background",
                        "Use shape tools to create editable vector objects",
                        "Use text frames and layout tools for page design"
                    ],
        "answer":  0
    },
    {
        "q":  "Pick the correct answer for identify input devices in computer.",
        "source":  "Fundamentle",
        "options":  [
                        "Use text frames and layout tools for page design",
                        "Keyboard, mouse, and scanner are input devices",
                        "Use Ctrl plus S to save the current document",
                        "Use table design or datasheet view to create table"
                    ],
        "answer":  1
    },
    {
        "q":  "In practical exam, how do you open MS Excel?",
        "source":  "Excel",
        "options":  [
                        "Open Start menu and choose Microsoft Excel",
                        "Open Sales voucher and enter invoice details",
                        "Open Start menu and choose Microsoft Word",
                        "Press F5 to start slide show from first slide"
                    ],
        "answer":  0
    },
    {
        "q":  "From the given options, select how to create a heading in HTML page.",
        "source":  "HTML",
        "options":  [
                        "Use a browser and search engine with keywords",
                        "Use h1 to h6 tags to create headings",
                        "Keyboard, mouse, and scanner are input devices",
                        "Monitor, printer, and speaker are output devices"
                    ],
        "answer":  1
    },
    {
        "q":  "What is the best way to make selected text bold in Word?",
        "source":  "Word",
        "options":  [
                        "Use query to filter and view required records",
                        "Open Start menu and choose Microsoft Excel",
                        "Use Ctrl plus B to apply bold formatting",
                        "Select data and insert chart from Insert tab"
                    ],
        "answer":  2
    },
    {
        "q":  "What is the best way to identify input devices in computer?",
        "source":  "Fundamentle",
        "options":  [
                        "Monitor, printer, and speaker are output devices",
                        "Keyboard, mouse, and scanner are input devices",
                        "Select data and insert chart from Insert tab",
                        "Select file, press F2, type new name, and press Enter"
                    ],
        "answer":  1
    },
    {
        "q":  "From the given options, select how to identify input devices in computer.",
        "source":  "Fundamentle",
        "options":  [
                        "Use Ctrl plus S to save the current document",
                        "Select file, press F2, type new name, and press Enter",
                        "Keyboard, mouse, and scanner are input devices",
                        "Press F5 to start slide show from first slide"
                    ],
        "answer":  2
    },
    {
        "q":  "What is the best way to create a table in MS Access?",
        "source":  "Access",
        "options":  [
                        "Use table design or datasheet view to create table",
                        "Use Ctrl plus M to insert a new slide",
                        "Use h1 to h6 tags to create headings",
                        "Select file, press F2, type new name, and press Enter"
                    ],
        "answer":  0
    },
    {
        "q":  "Pick the correct answer for identify output devices in computer.",
        "source":  "Fundamentle",
        "options":  [
                        "Open Sales voucher and enter invoice details",
                        "Open Start menu and choose Microsoft Excel",
                        "Monitor, printer, and speaker are output devices",
                        "Use a browser and search engine with keywords"
                    ],
        "answer":  2
    },
    {
        "q":  "Which option is right for draw vector shape in CorelDraw?",
        "source":  "CorelDraw",
        "options":  [
                        "Use h1 to h6 tags to create headings",
                        "Use shape tools to create editable vector objects",
                        "Monitor, printer, and speaker are output devices",
                        "Select data and insert chart from Insert tab"
                    ],
        "answer":  1
    },
    {
        "q":  "What is the best way to calculate total using formula in Excel?",
        "source":  "Excel",
        "options":  [
                        "Open Start menu and choose Microsoft Word",
                        "Monitor, printer, and speaker are output devices",
                        "Use selection tools and layer mask to remove background",
                        "Use SUM formula to add selected cells"
                    ],
        "answer":  3
    },
    {
        "q":  "In practical exam, how do you find records in Access?",
        "source":  "Access",
        "options":  [
                        "Use query to filter and view required records",
                        "Use table design or datasheet view to create table",
                        "Open Start menu and choose Microsoft Word",
                        "Press Windows plus E to open File Explorer"
                    ],
        "answer":  0
    },
    {
        "q":  "Which option is right for search information on internet?",
        "source":  "Internet",
        "options":  [
                        "Use selection tools and layer mask to remove background",
                        "Use a browser and search engine with keywords",
                        "Use text frames and layout tools for page design",
                        "Use h1 to h6 tags to create headings"
                    ],
        "answer":  1
    },
    {
        "q":  "Which step is correct to start a slide show in PowerPoint?",
        "source":  "PowerPoint",
        "options":  [
                        "Press F5 to start slide show from first slide",
                        "Use h1 to h6 tags to create headings",
                        "Use anchor tag with href attribute for link",
                        "Use query to filter and view required records"
                    ],
        "answer":  0
    },
    {
        "q":  "Select the correct method to save a document quickly in Word.",
        "source":  "Word",
        "options":  [
                        "Press F5 to start slide show from first slide",
                        "Use shape tools to create editable vector objects",
                        "Monitor, printer, and speaker are output devices",
                        "Use Ctrl plus S to save the current document"
                    ],
        "answer":  3
    },
    {
        "q":  "Identify the correct process to identify output devices in computer.",
        "source":  "Fundamentle",
        "options":  [
                        "Monitor, printer, and speaker are output devices",
                        "Use anchor tag with href attribute for link",
                        "Use h1 to h6 tags to create headings",
                        "Open Sales voucher and enter invoice details"
                    ],
        "answer":  0
    },
    {
        "q":  "Which of the following is the correct way to create a table in MS Access?",
        "source":  "Access",
        "options":  [
                        "Use shape tools to create editable vector objects",
                        "Use SUM formula to add selected cells",
                        "Press Windows plus E to open File Explorer",
                        "Use table design or datasheet view to create table"
                    ],
        "answer":  3
    },
    {
        "q":  "Which step is correct to add new slide in PowerPoint?",
        "source":  "PowerPoint",
        "options":  [
                        "Use Ctrl plus M to insert a new slide",
                        "Open Sales voucher and enter invoice details",
                        "Use Ctrl plus S to save the current document",
                        "Use shape tools to create editable vector objects"
                    ],
        "answer":  0
    },
    {
        "q":  "Which of the following is the correct way to open File Explorer in Windows?",
        "source":  "Windows",
        "options":  [
                        "Use query to filter and view required records",
                        "Use table design or datasheet view to create table",
                        "Press Windows plus E to open File Explorer",
                        "Select data and insert chart from Insert tab"
                    ],
        "answer":  2
    },
    {
        "q":  "Which of the following is the correct way to save a document quickly in Word?",
        "source":  "Word",
        "options":  [
                        "Use Ctrl plus S to save the current document",
                        "Use text frames and layout tools for page design",
                        "Use shape tools to create editable vector objects",
                        "Use a browser and search engine with keywords"
                    ],
        "answer":  0
    },
    {
        "q":  "Choose the correct statement about record sales entry in Tally.",
        "source":  "Tally",
        "options":  [
                        "Monitor, printer, and speaker are output devices",
                        "Open Start menu and choose Microsoft Word",
                        "Use selection tools and layer mask to remove background",
                        "Open Sales voucher and enter invoice details"
                    ],
        "answer":  3
    },
    {
        "q":  "Which step is correct to open MS Excel?",
        "source":  "Excel",
        "options":  [
                        "Use shape tools to create editable vector objects",
                        "Open Start menu and choose Microsoft Excel",
                        "Use Ctrl plus S to save the current document",
                        "Use text frames and layout tools for page design"
                    ],
        "answer":  1
    },
    {
        "q":  "In practical exam, how do you rename a file in Windows?",
        "source":  "Windows",
        "options":  [
                        "Use table design or datasheet view to create table",
                        "Use text frames and layout tools for page design",
                        "Keyboard, mouse, and scanner are input devices",
                        "Select file, press F2, type new name, and press Enter"
                    ],
        "answer":  3
    },
    {
        "q":  "Which of the following is the correct way to draw vector shape in CorelDraw?",
        "source":  "CorelDraw",
        "options":  [
                        "Open Start menu and choose Microsoft Excel",
                        "Use table design or datasheet view to create table",
                        "Select data and insert chart from Insert tab",
                        "Use shape tools to create editable vector objects"
                    ],
        "answer":  3
    },
    {
        "q":  "In practical exam, how do you open MS Word?",
        "source":  "Word",
        "options":  [
                        "Press F5 to start slide show from first slide",
                        "Open Start menu and choose Microsoft Word",
                        "Open Sales voucher and enter invoice details",
                        "Press Windows plus E to open File Explorer"
                    ],
        "answer":  1
    },
    {
        "q":  "What is the best way to record sales entry in Tally?",
        "source":  "Tally",
        "options":  [
                        "Open Sales voucher and enter invoice details",
                        "Select file, press F2, type new name, and press Enter",
                        "Use query to filter and view required records",
                        "Use shape tools to create editable vector objects"
                    ],
        "answer":  0
    },
    {
        "q":  "Which step is correct to make selected text bold in Word?",
        "source":  "Word",
        "options":  [
                        "Select file, press F2, type new name, and press Enter",
                        "Use Ctrl plus B to apply bold formatting",
                        "Select data and insert chart from Insert tab",
                        "Open Sales voucher and enter invoice details"
                    ],
        "answer":  1
    },
    {
        "q":  "Which of the following is the correct way to remove background in Photoshop?",
        "source":  "Photoshop",
        "options":  [
                        "Use selection tools and layer mask to remove background",
                        "Use anchor tag with href attribute for link",
                        "Use Ctrl plus S to save the current document",
                        "Select file, press F2, type new name, and press Enter"
                    ],
        "answer":  0
    },
    {
        "q":  "Pick the correct answer for remove background in Photoshop.",
        "source":  "Photoshop",
        "options":  [
                        "Open Start menu and choose Microsoft Word",
                        "Use selection tools and layer mask to remove background",
                        "Use Ctrl plus M to insert a new slide",
                        "Use table design or datasheet view to create table"
                    ],
        "answer":  1
    },
    {
        "q":  "In practical exam, how do you record sales entry in Tally?",
        "source":  "Tally",
        "options":  [
                        "Monitor, printer, and speaker are output devices",
                        "Use a browser and search engine with keywords",
                        "Use SUM formula to add selected cells",
                        "Open Sales voucher and enter invoice details"
                    ],
        "answer":  3
    },
    {
        "q":  "Which step is correct to identify output devices in computer?",
        "source":  "Fundamentle",
        "options":  [
                        "Use selection tools and layer mask to remove background",
                        "Monitor, printer, and speaker are output devices",
                        "Use Ctrl plus M to insert a new slide",
                        "Use query to filter and view required records"
                    ],
        "answer":  1
    },
    {
        "q":  "Which step is correct to create a heading in HTML page?",
        "source":  "HTML",
        "options":  [
                        "Use SUM formula to add selected cells",
                        "Use h1 to h6 tags to create headings",
                        "Select data and insert chart from Insert tab",
                        "Use Ctrl plus B to apply bold formatting"
                    ],
        "answer":  1
    },
    {
        "q":  "Identify the correct process to rename a file in Windows.",
        "source":  "Windows",
        "options":  [
                        "Use text frames and layout tools for page design",
                        "Press Windows plus E to open File Explorer",
                        "Select file, press F2, type new name, and press Enter",
                        "Use Ctrl plus M to insert a new slide"
                    ],
        "answer":  2
    },
    {
        "q":  "Choose the correct statement about identify output devices in computer.",
        "source":  "Fundamentle",
        "options":  [
                        "Use h1 to h6 tags to create headings",
                        "Use Ctrl plus M to insert a new slide",
                        "Monitor, printer, and speaker are output devices",
                        "Use query to filter and view required records"
                    ],
        "answer":  2
    },
    {
        "q":  "Choose the correct statement about open MS Word.",
        "source":  "Word",
        "options":  [
                        "Open Start menu and choose Microsoft Word",
                        "Press Windows plus E to open File Explorer",
                        "Select data and insert chart from Insert tab",
                        "Use Ctrl plus S to save the current document"
                    ],
        "answer":  0
    },
    {
        "q":  "Choose the correct statement about create a chart in Excel.",
        "source":  "Excel",
        "options":  [
                        "Press Windows plus E to open File Explorer",
                        "Use Ctrl plus S to save the current document",
                        "Use anchor tag with href attribute for link",
                        "Select data and insert chart from Insert tab"
                    ],
        "answer":  3
    },
    {
        "q":  "Which step is correct to open File Explorer in Windows?",
        "source":  "Windows",
        "options":  [
                        "Open Sales voucher and enter invoice details",
                        "Compose email, attach file, then click send",
                        "Open Start menu and choose Microsoft Excel",
                        "Press Windows plus E to open File Explorer"
                    ],
        "answer":  3
    },
    {
        "q":  "Which option is right for start a slide show in PowerPoint?",
        "source":  "PowerPoint",
        "options":  [
                        "Monitor, printer, and speaker are output devices",
                        "Press F5 to start slide show from first slide",
                        "Open Sales voucher and enter invoice details",
                        "Use query to filter and view required records"
                    ],
        "answer":  1
    },
    {
        "q":  "In practical exam, how do you identify output devices in computer?",
        "source":  "Fundamentle",
        "options":  [
                        "Use text frames and layout tools for page design",
                        "Press Windows plus E to open File Explorer",
                        "Monitor, printer, and speaker are output devices",
                        "Compose email, attach file, then click send"
                    ],
        "answer":  2
    },
    {
        "q":  "Pick the correct answer for record sales entry in Tally.",
        "source":  "Tally",
        "options":  [
                        "Use SUM formula to add selected cells",
                        "Use Ctrl plus B to apply bold formatting",
                        "Open Sales voucher and enter invoice details",
                        "Press F5 to start slide show from first slide"
                    ],
        "answer":  2
    },
    {
        "q":  "In practical exam, how do you send email with attachment?",
        "source":  "Internet",
        "options":  [
                        "Press Windows plus E to open File Explorer",
                        "Use Ctrl plus S to save the current document",
                        "Compose email, attach file, then click send",
                        "Monitor, printer, and speaker are output devices"
                    ],
        "answer":  2
    },
    {
        "q":  "Which step is correct to rename a file in Windows?",
        "source":  "Windows",
        "options":  [
                        "Select file, press F2, type new name, and press Enter",
                        "Use Ctrl plus S to save the current document",
                        "Monitor, printer, and speaker are output devices",
                        "Press F5 to start slide show from first slide"
                    ],
        "answer":  0
    },
    {
        "q":  "Identify the correct process to create a heading in HTML page.",
        "source":  "HTML",
        "options":  [
                        "Use a browser and search engine with keywords",
                        "Select file, press F2, type new name, and press Enter",
                        "Use h1 to h6 tags to create headings",
                        "Use text frames and layout tools for page design"
                    ],
        "answer":  2
    },
    {
        "q":  "Which option is right for identify input devices in computer?",
        "source":  "Fundamentle",
        "options":  [
                        "Select file, press F2, type new name, and press Enter",
                        "Use h1 to h6 tags to create headings",
                        "Open Start menu and choose Microsoft Excel",
                        "Keyboard, mouse, and scanner are input devices"
                    ],
        "answer":  3
    },
    {
        "q":  "Which of the following is the correct way to design page layout in Pagemkaer?",
        "source":  "Pagemkaer",
        "options":  [
                        "Use shape tools to create editable vector objects",
                        "Open Sales voucher and enter invoice details",
                        "Use SUM formula to add selected cells",
                        "Use text frames and layout tools for page design"
                    ],
        "answer":  3
    },
    {
        "q":  "Choose the correct statement about open MS Excel.",
        "source":  "Excel",
        "options":  [
                        "Compose email, attach file, then click send",
                        "Select file, press F2, type new name, and press Enter",
                        "Open Start menu and choose Microsoft Excel",
                        "Use Ctrl plus B to apply bold formatting"
                    ],
        "answer":  2
    },
    {
        "q":  "Which option is right for design page layout in Pagemkaer?",
        "source":  "Pagemkaer",
        "options":  [
                        "Use Ctrl plus S to save the current document",
                        "Use Ctrl plus M to insert a new slide",
                        "Open Start menu and choose Microsoft Word",
                        "Use text frames and layout tools for page design"
                    ],
        "answer":  3
    },
    {
        "q":  "Which step is correct to create hyperlink in HTML?",
        "source":  "HTML",
        "options":  [
                        "Select file, press F2, type new name, and press Enter",
                        "Use anchor tag with href attribute for link",
                        "Compose email, attach file, then click send",
                        "Use Ctrl plus S to save the current document"
                    ],
        "answer":  1
    },
    {
        "q":  "Select the correct method to remove background in Photoshop.",
        "source":  "Photoshop",
        "options":  [
                        "Use selection tools and layer mask to remove background",
                        "Use SUM formula to add selected cells",
                        "Use a browser and search engine with keywords",
                        "Select file, press F2, type new name, and press Enter"
                    ],
        "answer":  0
    },
    {
        "q":  "Identify the correct process to open MS Word.",
        "source":  "Word",
        "options":  [
                        "Press Windows plus E to open File Explorer",
                        "Use SUM formula to add selected cells",
                        "Keyboard, mouse, and scanner are input devices",
                        "Open Start menu and choose Microsoft Word"
                    ],
        "answer":  3
    },
    {
        "q":  "Which of the following is the correct way to find records in Access?",
        "source":  "Access",
        "options":  [
                        "Open Sales voucher and enter invoice details",
                        "Use SUM formula to add selected cells",
                        "Use query to filter and view required records",
                        "Use a browser and search engine with keywords"
                    ],
        "answer":  2
    },
    {
        "q":  "In practical exam, how do you save a document quickly in Word?",
        "source":  "Word",
        "options":  [
                        "Open Sales voucher and enter invoice details",
                        "Compose email, attach file, then click send",
                        "Use Ctrl plus S to save the current document",
                        "Use h1 to h6 tags to create headings"
                    ],
        "answer":  2
    },
    {
        "q":  "Identify the correct process to save a document quickly in Word.",
        "source":  "Word",
        "options":  [
                        "Use table design or datasheet view to create table",
                        "Use a browser and search engine with keywords",
                        "Use Ctrl plus S to save the current document",
                        "Use Ctrl plus B to apply bold formatting"
                    ],
        "answer":  2
    },
    {
        "q":  "Which option is right for calculate total using formula in Excel?",
        "source":  "Excel",
        "options":  [
                        "Use shape tools to create editable vector objects",
                        "Select file, press F2, type new name, and press Enter",
                        "Use SUM formula to add selected cells",
                        "Use Ctrl plus M to insert a new slide"
                    ],
        "answer":  2
    },
    {
        "q":  "From the given options, select how to create a chart in Excel.",
        "source":  "Excel",
        "options":  [
                        "Use shape tools to create editable vector objects",
                        "Select data and insert chart from Insert tab",
                        "Use anchor tag with href attribute for link",
                        "Use h1 to h6 tags to create headings"
                    ],
        "answer":  1
    },
    {
        "q":  "From the given options, select how to save a document quickly in Word.",
        "source":  "Word",
        "options":  [
                        "Compose email, attach file, then click send",
                        "Use Ctrl plus S to save the current document",
                        "Press F5 to start slide show from first slide",
                        "Open Start menu and choose Microsoft Word"
                    ],
        "answer":  1
    },
    {
        "q":  "From the given options, select how to search information on internet.",
        "source":  "Internet",
        "options":  [
                        "Select file, press F2, type new name, and press Enter",
                        "Use Ctrl plus B to apply bold formatting",
                        "Use a browser and search engine with keywords",
                        "Select data and insert chart from Insert tab"
                    ],
        "answer":  2
    },
    {
        "q":  "Which of the following is the correct way to calculate total using formula in Excel?",
        "source":  "Excel",
        "options":  [
                        "Use SUM formula to add selected cells",
                        "Select file, press F2, type new name, and press Enter",
                        "Use anchor tag with href attribute for link",
                        "Use shape tools to create editable vector objects"
                    ],
        "answer":  0
    },
    {
        "q":  "Identify the correct process to create a table in MS Access.",
        "source":  "Access",
        "options":  [
                        "Use Ctrl plus S to save the current document",
                        "Use anchor tag with href attribute for link",
                        "Use table design or datasheet view to create table",
                        "Select file, press F2, type new name, and press Enter"
                    ],
        "answer":  2
    },
    {
        "q":  "In practical exam, how do you identify input devices in computer?",
        "source":  "Fundamentle",
        "options":  [
                        "Use SUM formula to add selected cells",
                        "Compose email, attach file, then click send",
                        "Open Start menu and choose Microsoft Word",
                        "Keyboard, mouse, and scanner are input devices"
                    ],
        "answer":  3
    },
    {
        "q":  "Pick the correct answer for open MS Excel.",
        "source":  "Excel",
        "options":  [
                        "Open Sales voucher and enter invoice details",
                        "Open Start menu and choose Microsoft Word",
                        "Open Start menu and choose Microsoft Excel",
                        "Use Ctrl plus B to apply bold formatting"
                    ],
        "answer":  2
    },
    {
        "q":  "Select the correct method to open MS Word.",
        "source":  "Word",
        "options":  [
                        "Use Ctrl plus B to apply bold formatting",
                        "Open Sales voucher and enter invoice details",
                        "Open Start menu and choose Microsoft Word",
                        "Use SUM formula to add selected cells"
                    ],
        "answer":  2
    },
    {
        "q":  "What is the best way to send email with attachment?",
        "source":  "Internet",
        "options":  [
                        "Open Start menu and choose Microsoft Excel",
                        "Open Sales voucher and enter invoice details",
                        "Press F5 to start slide show from first slide",
                        "Compose email, attach file, then click send"
                    ],
        "answer":  3
    },
    {
        "q":  "Choose the correct statement about create a heading in HTML page.",
        "source":  "HTML",
        "options":  [
                        "Use query to filter and view required records",
                        "Press F5 to start slide show from first slide",
                        "Use h1 to h6 tags to create headings",
                        "Use selection tools and layer mask to remove background"
                    ],
        "answer":  2
    },
    {
        "q":  "Which of the following is the correct way to open MS Excel?",
        "source":  "Excel",
        "options":  [
                        "Open Start menu and choose Microsoft Excel",
                        "Use h1 to h6 tags to create headings",
                        "Monitor, printer, and speaker are output devices",
                        "Select file, press F2, type new name, and press Enter"
                    ],
        "answer":  0
    },
    {
        "q":  "What is the best way to design page layout in Pagemkaer?",
        "source":  "Pagemkaer",
        "options":  [
                        "Compose email, attach file, then click send",
                        "Use text frames and layout tools for page design",
                        "Use query to filter and view required records",
                        "Use h1 to h6 tags to create headings"
                    ],
        "answer":  1
    },
    {
        "q":  "What is the best way to add new slide in PowerPoint?",
        "source":  "PowerPoint",
        "options":  [
                        "Use Ctrl plus M to insert a new slide",
                        "Use a browser and search engine with keywords",
                        "Monitor, printer, and speaker are output devices",
                        "Use Ctrl plus S to save the current document"
                    ],
        "answer":  0
    },
    {
        "q":  "In practical exam, how do you search information on internet?",
        "source":  "Internet",
        "options":  [
                        "Compose email, attach file, then click send",
                        "Use shape tools to create editable vector objects",
                        "Use Ctrl plus S to save the current document",
                        "Use a browser and search engine with keywords"
                    ],
        "answer":  3
    },
    {
        "q":  "Identify the correct process to search information on internet.",
        "source":  "Internet",
        "options":  [
                        "Use Ctrl plus M to insert a new slide",
                        "Select data and insert chart from Insert tab",
                        "Use shape tools to create editable vector objects",
                        "Use a browser and search engine with keywords"
                    ],
        "answer":  3
    },
    {
        "q":  "Which step is correct to send email with attachment?",
        "source":  "Internet",
        "options":  [
                        "Press Windows plus E to open File Explorer",
                        "Compose email, attach file, then click send",
                        "Use table design or datasheet view to create table",
                        "Use SUM formula to add selected cells"
                    ],
        "answer":  1
    },
    {
        "q":  "From the given options, select how to rename a file in Windows.",
        "source":  "Windows",
        "options":  [
                        "Select file, press F2, type new name, and press Enter",
                        "Use Ctrl plus B to apply bold formatting",
                        "Compose email, attach file, then click send",
                        "Use h1 to h6 tags to create headings"
                    ],
        "answer":  0
    },
    {
        "q":  "What is the best way to save a document quickly in Word?",
        "source":  "Word",
        "options":  [
                        "Use table design or datasheet view to create table",
                        "Use Ctrl plus S to save the current document",
                        "Use SUM formula to add selected cells",
                        "Monitor, printer, and speaker are output devices"
                    ],
        "answer":  1
    },
    {
        "q":  "Which step is correct to save a document quickly in Word?",
        "source":  "Word",
        "options":  [
                        "Press F5 to start slide show from first slide",
                        "Open Start menu and choose Microsoft Excel",
                        "Press Windows plus E to open File Explorer",
                        "Use Ctrl plus S to save the current document"
                    ],
        "answer":  3
    },
    {
        "q":  "What is the best way to search information on internet?",
        "source":  "Internet",
        "options":  [
                        "Use anchor tag with href attribute for link",
                        "Use a browser and search engine with keywords",
                        "Open Sales voucher and enter invoice details",
                        "Select data and insert chart from Insert tab"
                    ],
        "answer":  1
    },
    {
        "q":  "What is the best way to draw vector shape in CorelDraw?",
        "source":  "CorelDraw",
        "options":  [
                        "Compose email, attach file, then click send",
                        "Use Ctrl plus S to save the current document",
                        "Use a browser and search engine with keywords",
                        "Use shape tools to create editable vector objects"
                    ],
        "answer":  3
    },
    {
        "q":  "Pick the correct answer for rename a file in Windows.",
        "source":  "Windows",
        "options":  [
                        "Select data and insert chart from Insert tab",
                        "Use text frames and layout tools for page design",
                        "Use table design or datasheet view to create table",
                        "Select file, press F2, type new name, and press Enter"
                    ],
        "answer":  3
    },
    {
        "q":  "Pick the correct answer for start a slide show in PowerPoint.",
        "source":  "PowerPoint",
        "options":  [
                        "Press F5 to start slide show from first slide",
                        "Use table design or datasheet view to create table",
                        "Keyboard, mouse, and scanner are input devices",
                        "Press Windows plus E to open File Explorer"
                    ],
        "answer":  0
    },
    {
        "q":  "In practical exam, how do you design page layout in Pagemkaer?",
        "source":  "Pagemkaer",
        "options":  [
                        "Open Sales voucher and enter invoice details",
                        "Use text frames and layout tools for page design",
                        "Compose email, attach file, then click send",
                        "Use Ctrl plus M to insert a new slide"
                    ],
        "answer":  1
    },
    {
        "q":  "Identify the correct process to send email with attachment.",
        "source":  "Internet",
        "options":  [
                        "Use query to filter and view required records",
                        "Compose email, attach file, then click send",
                        "Press Windows plus E to open File Explorer",
                        "Open Start menu and choose Microsoft Word"
                    ],
        "answer":  1
    },
    {
        "q":  "Which step is correct to draw vector shape in CorelDraw?",
        "source":  "CorelDraw",
        "options":  [
                        "Select data and insert chart from Insert tab",
                        "Open Start menu and choose Microsoft Word",
                        "Use query to filter and view required records",
                        "Use shape tools to create editable vector objects"
                    ],
        "answer":  3
    },
    {
        "q":  "Identify the correct process to open File Explorer in Windows.",
        "source":  "Windows",
        "options":  [
                        "Use selection tools and layer mask to remove background",
                        "Use table design or datasheet view to create table",
                        "Press Windows plus E to open File Explorer",
                        "Open Start menu and choose Microsoft Excel"
                    ],
        "answer":  2
    },
    {
        "q":  "Select the correct method to make selected text bold in Word.",
        "source":  "Word",
        "options":  [
                        "Open Sales voucher and enter invoice details",
                        "Use Ctrl plus B to apply bold formatting",
                        "Use anchor tag with href attribute for link",
                        "Use a browser and search engine with keywords"
                    ],
        "answer":  1
    },
    {
        "q":  "From the given options, select how to open MS Excel.",
        "source":  "Excel",
        "options":  [
                        "Compose email, attach file, then click send",
                        "Open Start menu and choose Microsoft Excel",
                        "Use shape tools to create editable vector objects",
                        "Use Ctrl plus B to apply bold formatting"
                    ],
        "answer":  1
    },
    {
        "q":  "In practical exam, how do you create hyperlink in HTML?",
        "source":  "HTML",
        "options":  [
                        "Use anchor tag with href attribute for link",
                        "Use SUM formula to add selected cells",
                        "Use text frames and layout tools for page design",
                        "Monitor, printer, and speaker are output devices"
                    ],
        "answer":  0
    },
    {
        "q":  "Which option is right for find records in Access?",
        "source":  "Access",
        "options":  [
                        "Open Start menu and choose Microsoft Excel",
                        "Use query to filter and view required records",
                        "Open Sales voucher and enter invoice details",
                        "Monitor, printer, and speaker are output devices"
                    ],
        "answer":  1
    },
    {
        "q":  "Select the correct method to open File Explorer in Windows.",
        "source":  "Windows",
        "options":  [
                        "Use anchor tag with href attribute for link",
                        "Press Windows plus E to open File Explorer",
                        "Open Start menu and choose Microsoft Excel",
                        "Use Ctrl plus B to apply bold formatting"
                    ],
        "answer":  1
    },
    {
        "q":  "Which option is right for send email with attachment?",
        "source":  "Internet",
        "options":  [
                        "Use h1 to h6 tags to create headings",
                        "Use Ctrl plus M to insert a new slide",
                        "Compose email, attach file, then click send",
                        "Use selection tools and layer mask to remove background"
                    ],
        "answer":  2
    },
    {
        "q":  "Which of the following is the correct way to open MS Word?",
        "source":  "Word",
        "options":  [
                        "Keyboard, mouse, and scanner are input devices",
                        "Use Ctrl plus S to save the current document",
                        "Use Ctrl plus B to apply bold formatting",
                        "Open Start menu and choose Microsoft Word"
                    ],
        "answer":  3
    },
    {
        "q":  "Which step is correct to create a table in MS Access?",
        "source":  "Access",
        "options":  [
                        "Open Start menu and choose Microsoft Word",
                        "Use table design or datasheet view to create table",
                        "Keyboard, mouse, and scanner are input devices",
                        "Open Start menu and choose Microsoft Excel"
                    ],
        "answer":  1
    },
    {
        "q":  "Select the correct method to start a slide show in PowerPoint.",
        "source":  "PowerPoint",
        "options":  [
                        "Press F5 to start slide show from first slide",
                        "Use a browser and search engine with keywords",
                        "Compose email, attach file, then click send",
                        "Use query to filter and view required records"
                    ],
        "answer":  0
    },
    {
        "q":  "Choose the correct statement about identify input devices in computer.",
        "source":  "Fundamentle",
        "options":  [
                        "Use Ctrl plus B to apply bold formatting",
                        "Use shape tools to create editable vector objects",
                        "Select file, press F2, type new name, and press Enter",
                        "Keyboard, mouse, and scanner are input devices"
                    ],
        "answer":  3
    },
    {
        "q":  "In practical exam, how do you start a slide show in PowerPoint?",
        "source":  "PowerPoint",
        "options":  [
                        "Press Windows plus E to open File Explorer",
                        "Use SUM formula to add selected cells",
                        "Use Ctrl plus S to save the current document",
                        "Press F5 to start slide show from first slide"
                    ],
        "answer":  3
    },
    {
        "q":  "Which of the following is the correct way to create hyperlink in HTML?",
        "source":  "HTML",
        "options":  [
                        "Open Start menu and choose Microsoft Word",
                        "Press F5 to start slide show from first slide",
                        "Open Start menu and choose Microsoft Excel",
                        "Use anchor tag with href attribute for link"
                    ],
        "answer":  3
    },
    {
        "q":  "Which option is right for create a heading in HTML page?",
        "source":  "HTML",
        "options":  [
                        "Use query to filter and view required records",
                        "Use h1 to h6 tags to create headings",
                        "Use text frames and layout tools for page design",
                        "Use SUM formula to add selected cells"
                    ],
        "answer":  1
    },
    {
        "q":  "Select the correct method to send email with attachment.",
        "source":  "Internet",
        "options":  [
                        "Use anchor tag with href attribute for link",
                        "Compose email, attach file, then click send",
                        "Use Ctrl plus B to apply bold formatting",
                        "Use query to filter and view required records"
                    ],
        "answer":  1
    },
    {
        "q":  "Choose the correct statement about search information on internet.",
        "source":  "Internet",
        "options":  [
                        "Select file, press F2, type new name, and press Enter",
                        "Open Start menu and choose Microsoft Word",
                        "Use a browser and search engine with keywords",
                        "Keyboard, mouse, and scanner are input devices"
                    ],
        "answer":  2
    },
    {
        "q":  "Which option is right for open MS Word?",
        "source":  "Word",
        "options":  [
                        "Press F5 to start slide show from first slide",
                        "Use Ctrl plus M to insert a new slide",
                        "Open Start menu and choose Microsoft Word",
                        "Use a browser and search engine with keywords"
                    ],
        "answer":  2
    },
    {
        "q":  "Choose the correct statement about save a document quickly in Word.",
        "source":  "Word",
        "options":  [
                        "Open Sales voucher and enter invoice details",
                        "Use Ctrl plus S to save the current document",
                        "Monitor, printer, and speaker are output devices",
                        "Press Windows plus E to open File Explorer"
                    ],
        "answer":  1
    },
    {
        "q":  "What is the best way to find records in Access?",
        "source":  "Access",
        "options":  [
                        "Open Sales voucher and enter invoice details",
                        "Open Start menu and choose Microsoft Excel",
                        "Use query to filter and view required records",
                        "Monitor, printer, and speaker are output devices"
                    ],
        "answer":  2
    },
    {
        "q":  "What is the best way to open MS Word?",
        "source":  "Word",
        "options":  [
                        "Use text frames and layout tools for page design",
                        "Use shape tools to create editable vector objects",
                        "Open Start menu and choose Microsoft Word",
                        "Use anchor tag with href attribute for link"
                    ],
        "answer":  2
    },
    {
        "q":  "In practical exam, how do you create a table in MS Access?",
        "source":  "Access",
        "options":  [
                        "Use table design or datasheet view to create table",
                        "Monitor, printer, and speaker are output devices",
                        "Compose email, attach file, then click send",
                        "Use anchor tag with href attribute for link"
                    ],
        "answer":  0
    },
    {
        "q":  "Select the correct method to design page layout in Pagemkaer.",
        "source":  "Pagemkaer",
        "options":  [
                        "Press Windows plus E to open File Explorer",
                        "Use text frames and layout tools for page design",
                        "Use selection tools and layer mask to remove background",
                        "Open Start menu and choose Microsoft Excel"
                    ],
        "answer":  1
    },
    {
        "q":  "Which step is correct to open MS Word?",
        "source":  "Word",
        "options":  [
                        "Open Sales voucher and enter invoice details",
                        "Open Start menu and choose Microsoft Word",
                        "Keyboard, mouse, and scanner are input devices",
                        "Use h1 to h6 tags to create headings"
                    ],
        "answer":  1
    },
    {
        "q":  "Which step is correct to calculate total using formula in Excel?",
        "source":  "Excel",
        "options":  [
                        "Use a browser and search engine with keywords",
                        "Use SUM formula to add selected cells",
                        "Use selection tools and layer mask to remove background",
                        "Press Windows plus E to open File Explorer"
                    ],
        "answer":  1
    },
    {
        "q":  "Which step is correct to remove background in Photoshop?",
        "source":  "Photoshop",
        "options":  [
                        "Use anchor tag with href attribute for link",
                        "Use Ctrl plus S to save the current document",
                        "Use selection tools and layer mask to remove background",
                        "Use query to filter and view required records"
                    ],
        "answer":  2
    },
    {
        "q":  "Which option is right for create hyperlink in HTML?",
        "source":  "HTML",
        "options":  [
                        "Open Start menu and choose Microsoft Excel",
                        "Use anchor tag with href attribute for link",
                        "Use Ctrl plus M to insert a new slide",
                        "Monitor, printer, and speaker are output devices"
                    ],
        "answer":  1
    },
    {
        "q":  "From the given options, select how to draw vector shape in CorelDraw.",
        "source":  "CorelDraw",
        "options":  [
                        "Use shape tools to create editable vector objects",
                        "Use a browser and search engine with keywords",
                        "Compose email, attach file, then click send",
                        "Open Start menu and choose Microsoft Word"
                    ],
        "answer":  0
    },
    {
        "q":  "Identify the correct process to remove background in Photoshop.",
        "source":  "Photoshop",
        "options":  [
                        "Use Ctrl plus S to save the current document",
                        "Monitor, printer, and speaker are output devices",
                        "Use selection tools and layer mask to remove background",
                        "Compose email, attach file, then click send"
                    ],
        "answer":  2
    },
    {
        "q":  "Identify the correct process to start a slide show in PowerPoint.",
        "source":  "PowerPoint",
        "options":  [
                        "Use a browser and search engine with keywords",
                        "Select data and insert chart from Insert tab",
                        "Select file, press F2, type new name, and press Enter",
                        "Press F5 to start slide show from first slide"
                    ],
        "answer":  3
    },
    {
        "q":  "Choose the correct statement about open File Explorer in Windows.",
        "source":  "Windows",
        "options":  [
                        "Use shape tools to create editable vector objects",
                        "Use anchor tag with href attribute for link",
                        "Press Windows plus E to open File Explorer",
                        "Use a browser and search engine with keywords"
                    ],
        "answer":  2
    },
    {
        "q":  "Select the correct method to rename a file in Windows.",
        "source":  "Windows",
        "options":  [
                        "Select file, press F2, type new name, and press Enter",
                        "Press Windows plus E to open File Explorer",
                        "Use shape tools to create editable vector objects",
                        "Use table design or datasheet view to create table"
                    ],
        "answer":  0
    },
    {
        "q":  "Which of the following is the correct way to identify input devices in computer?",
        "source":  "Fundamentle",
        "options":  [
                        "Select data and insert chart from Insert tab",
                        "Monitor, printer, and speaker are output devices",
                        "Compose email, attach file, then click send",
                        "Keyboard, mouse, and scanner are input devices"
                    ],
        "answer":  3
    },
    {
        "q":  "Which of the following is the correct way to start a slide show in PowerPoint?",
        "source":  "PowerPoint",
        "options":  [
                        "Use query to filter and view required records",
                        "Use a browser and search engine with keywords",
                        "Select file, press F2, type new name, and press Enter",
                        "Press F5 to start slide show from first slide"
                    ],
        "answer":  3
    },
    {
        "q":  "Select the correct method to find records in Access.",
        "source":  "Access",
        "options":  [
                        "Use query to filter and view required records",
                        "Use Ctrl plus M to insert a new slide",
                        "Open Start menu and choose Microsoft Excel",
                        "Press Windows plus E to open File Explorer"
                    ],
        "answer":  0
    },
    {
        "q":  "From the given options, select how to open MS Word.",
        "source":  "Word",
        "options":  [
                        "Press F5 to start slide show from first slide",
                        "Open Start menu and choose Microsoft Word",
                        "Open Start menu and choose Microsoft Excel",
                        "Use h1 to h6 tags to create headings"
                    ],
        "answer":  1
    },
    {
        "q":  "From the given options, select how to create a table in MS Access.",
        "source":  "Access",
        "options":  [
                        "Press Windows plus E to open File Explorer",
                        "Use Ctrl plus B to apply bold formatting",
                        "Use selection tools and layer mask to remove background",
                        "Use table design or datasheet view to create table"
                    ],
        "answer":  3
    },
    {
        "q":  "Pick the correct answer for add new slide in PowerPoint.",
        "source":  "PowerPoint",
        "options":  [
                        "Select data and insert chart from Insert tab",
                        "Use shape tools to create editable vector objects",
                        "Press F5 to start slide show from first slide",
                        "Use Ctrl plus M to insert a new slide"
                    ],
        "answer":  3
    },
    {
        "q":  "Pick the correct answer for make selected text bold in Word.",
        "source":  "Word",
        "options":  [
                        "Use Ctrl plus M to insert a new slide",
                        "Use selection tools and layer mask to remove background",
                        "Press F5 to start slide show from first slide",
                        "Use Ctrl plus B to apply bold formatting"
                    ],
        "answer":  3
    },
    {
        "q":  "From the given options, select how to create hyperlink in HTML.",
        "source":  "HTML",
        "options":  [
                        "Monitor, printer, and speaker are output devices",
                        "Use anchor tag with href attribute for link",
                        "Keyboard, mouse, and scanner are input devices",
                        "Press F5 to start slide show from first slide"
                    ],
        "answer":  1
    },
    {
        "q":  "Identify the correct process to draw vector shape in CorelDraw.",
        "source":  "CorelDraw",
        "options":  [
                        "Use shape tools to create editable vector objects",
                        "Compose email, attach file, then click send",
                        "Use selection tools and layer mask to remove background",
                        "Select file, press F2, type new name, and press Enter"
                    ],
        "answer":  0
    },
    {
        "q":  "Select the correct method to open MS Excel.",
        "source":  "Excel",
        "options":  [
                        "Open Start menu and choose Microsoft Excel",
                        "Select data and insert chart from Insert tab",
                        "Use SUM formula to add selected cells",
                        "Use a browser and search engine with keywords"
                    ],
        "answer":  0
    },
    {
        "q":  "In practical exam, how do you create a heading in HTML page?",
        "source":  "HTML",
        "options":  [
                        "Use h1 to h6 tags to create headings",
                        "Use a browser and search engine with keywords",
                        "Select data and insert chart from Insert tab",
                        "Use SUM formula to add selected cells"
                    ],
        "answer":  0
    },
    {
        "q":  "Which step is correct to find records in Access?",
        "source":  "Access",
        "options":  [
                        "Use anchor tag with href attribute for link",
                        "Select data and insert chart from Insert tab",
                        "Use shape tools to create editable vector objects",
                        "Use query to filter and view required records"
                    ],
        "answer":  3
    },
    {
        "q":  "Which of the following is the correct way to make selected text bold in Word?",
        "source":  "Word",
        "options":  [
                        "Use shape tools to create editable vector objects",
                        "Use Ctrl plus B to apply bold formatting",
                        "Press F5 to start slide show from first slide",
                        "Use SUM formula to add selected cells"
                    ],
        "answer":  1
    },
    {
        "q":  "Pick the correct answer for draw vector shape in CorelDraw.",
        "source":  "CorelDraw",
        "options":  [
                        "Compose email, attach file, then click send",
                        "Use Ctrl plus B to apply bold formatting",
                        "Use h1 to h6 tags to create headings",
                        "Use shape tools to create editable vector objects"
                    ],
        "answer":  3
    },
    {
        "q":  "Pick the correct answer for search information on internet.",
        "source":  "Internet",
        "options":  [
                        "Use Ctrl plus M to insert a new slide",
                        "Select data and insert chart from Insert tab",
                        "Use a browser and search engine with keywords",
                        "Use h1 to h6 tags to create headings"
                    ],
        "answer":  2
    },
    {
        "q":  "Which step is correct to identify input devices in computer?",
        "source":  "Fundamentle",
        "options":  [
                        "Use Ctrl plus M to insert a new slide",
                        "Use a browser and search engine with keywords",
                        "Open Start menu and choose Microsoft Excel",
                        "Keyboard, mouse, and scanner are input devices"
                    ],
        "answer":  3
    },
    {
        "q":  "In practical exam, how do you remove background in Photoshop?",
        "source":  "Photoshop",
        "options":  [
                        "Open Sales voucher and enter invoice details",
                        "Use Ctrl plus S to save the current document",
                        "Keyboard, mouse, and scanner are input devices",
                        "Use selection tools and layer mask to remove background"
                    ],
        "answer":  3
    },
    {
        "q":  "Pick the correct answer for create hyperlink in HTML.",
        "source":  "HTML",
        "options":  [
                        "Use selection tools and layer mask to remove background",
                        "Use Ctrl plus M to insert a new slide",
                        "Use SUM formula to add selected cells",
                        "Use anchor tag with href attribute for link"
                    ],
        "answer":  3
    },
    {
        "q":  "Pick the correct answer for save a document quickly in Word.",
        "source":  "Word",
        "options":  [
                        "Use Ctrl plus S to save the current document",
                        "Open Start menu and choose Microsoft Word",
                        "Use Ctrl plus M to insert a new slide",
                        "Use Ctrl plus B to apply bold formatting"
                    ],
        "answer":  0
    },
    {
        "q":  "Select the correct method to identify output devices in computer.",
        "source":  "Fundamentle",
        "options":  [
                        "Use SUM formula to add selected cells",
                        "Compose email, attach file, then click send",
                        "Use h1 to h6 tags to create headings",
                        "Monitor, printer, and speaker are output devices"
                    ],
        "answer":  3
    },
    {
        "q":  "Which option is right for identify output devices in computer?",
        "source":  "Fundamentle",
        "options":  [
                        "Use table design or datasheet view to create table",
                        "Open Start menu and choose Microsoft Word",
                        "Monitor, printer, and speaker are output devices",
                        "Use shape tools to create editable vector objects"
                    ],
        "answer":  2
    },
    {
        "q":  "What is the best way to open File Explorer in Windows?",
        "source":  "Windows",
        "options":  [
                        "Use table design or datasheet view to create table",
                        "Press Windows plus E to open File Explorer",
                        "Use shape tools to create editable vector objects",
                        "Open Start menu and choose Microsoft Word"
                    ],
        "answer":  1
    },
    {
        "q":  "Select the correct method to create hyperlink in HTML.",
        "source":  "HTML",
        "options":  [
                        "Use table design or datasheet view to create table",
                        "Use anchor tag with href attribute for link",
                        "Use query to filter and view required records",
                        "Keyboard, mouse, and scanner are input devices"
                    ],
        "answer":  1
    },
    {
        "q":  "What is the best way to open MS Excel?",
        "source":  "Excel",
        "options":  [
                        "Use selection tools and layer mask to remove background",
                        "Use table design or datasheet view to create table",
                        "Open Start menu and choose Microsoft Excel",
                        "Select file, press F2, type new name, and press Enter"
                    ],
        "answer":  2
    },
    {
        "q":  "Pick the correct answer for find records in Access.",
        "source":  "Access",
        "options":  [
                        "Use Ctrl plus B to apply bold formatting",
                        "Open Sales voucher and enter invoice details",
                        "Use query to filter and view required records",
                        "Select file, press F2, type new name, and press Enter"
                    ],
        "answer":  2
    },
    {
        "q":  "Choose the correct statement about send email with attachment.",
        "source":  "Internet",
        "options":  [
                        "Use Ctrl plus S to save the current document",
                        "Select data and insert chart from Insert tab",
                        "Compose email, attach file, then click send",
                        "Use shape tools to create editable vector objects"
                    ],
        "answer":  2
    },
    {
        "q":  "What is the best way to rename a file in Windows?",
        "source":  "Windows",
        "options":  [
                        "Open Start menu and choose Microsoft Excel",
                        "Select file, press F2, type new name, and press Enter",
                        "Monitor, printer, and speaker are output devices",
                        "Keyboard, mouse, and scanner are input devices"
                    ],
        "answer":  1
    },
    {
        "q":  "Identify the correct process to find records in Access.",
        "source":  "Access",
        "options":  [
                        "Use shape tools to create editable vector objects",
                        "Use anchor tag with href attribute for link",
                        "Use query to filter and view required records",
                        "Press Windows plus E to open File Explorer"
                    ],
        "answer":  2
    },
    {
        "q":  "What is the best way to remove background in Photoshop?",
        "source":  "Photoshop",
        "options":  [
                        "Press F5 to start slide show from first slide",
                        "Use selection tools and layer mask to remove background",
                        "Use Ctrl plus M to insert a new slide",
                        "Open Sales voucher and enter invoice details"
                    ],
        "answer":  1
    },
    {
        "q":  "Which option is right for create a chart in Excel?",
        "source":  "Excel",
        "options":  [
                        "Select data and insert chart from Insert tab",
                        "Use text frames and layout tools for page design",
                        "Monitor, printer, and speaker are output devices",
                        "Compose email, attach file, then click send"
                    ],
        "answer":  0
    },
    {
        "q":  "Which step is correct to search information on internet?",
        "source":  "Internet",
        "options":  [
                        "Use shape tools to create editable vector objects",
                        "Use a browser and search engine with keywords",
                        "Use selection tools and layer mask to remove background",
                        "Use Ctrl plus M to insert a new slide"
                    ],
        "answer":  1
    },
    {
        "q":  "In practical exam, how do you open File Explorer in Windows?",
        "source":  "Windows",
        "options":  [
                        "Keyboard, mouse, and scanner are input devices",
                        "Monitor, printer, and speaker are output devices",
                        "Use Ctrl plus M to insert a new slide",
                        "Press Windows plus E to open File Explorer"
                    ],
        "answer":  3
    },
    {
        "q":  "In practical exam, how do you add new slide in PowerPoint?",
        "source":  "PowerPoint",
        "options":  [
                        "Press F5 to start slide show from first slide",
                        "Open Start menu and choose Microsoft Word",
                        "Use Ctrl plus S to save the current document",
                        "Use Ctrl plus M to insert a new slide"
                    ],
        "answer":  3
    },
    {
        "q":  "Choose the correct statement about calculate total using formula in Excel.",
        "source":  "Excel",
        "options":  [
                        "Keyboard, mouse, and scanner are input devices",
                        "Use SUM formula to add selected cells",
                        "Use a browser and search engine with keywords",
                        "Use shape tools to create editable vector objects"
                    ],
        "answer":  1
    },
    {
        "q":  "Identify the correct process to add new slide in PowerPoint.",
        "source":  "PowerPoint",
        "options":  [
                        "Use Ctrl plus M to insert a new slide",
                        "Use shape tools to create editable vector objects",
                        "Use text frames and layout tools for page design",
                        "Use table design or datasheet view to create table"
                    ],
        "answer":  0
    },
    {
        "q":  "What is the best way to create hyperlink in HTML?",
        "source":  "HTML",
        "options":  [
                        "Use anchor tag with href attribute for link",
                        "Use h1 to h6 tags to create headings",
                        "Open Sales voucher and enter invoice details",
                        "Select data and insert chart from Insert tab"
                    ],
        "answer":  0
    },
    {
        "q":  "Which step is correct to record sales entry in Tally?",
        "source":  "Tally",
        "options":  [
                        "Use a browser and search engine with keywords",
                        "Use shape tools to create editable vector objects",
                        "Open Sales voucher and enter invoice details",
                        "Use Ctrl plus M to insert a new slide"
                    ],
        "answer":  2
    },
    {
        "q":  "Pick the correct answer for calculate total using formula in Excel.",
        "source":  "Excel",
        "options":  [
                        "Use SUM formula to add selected cells",
                        "Use h1 to h6 tags to create headings",
                        "Select data and insert chart from Insert tab",
                        "Press F5 to start slide show from first slide"
                    ],
        "answer":  0
    },
    {
        "q":  "Which of the following is the correct way to create a chart in Excel?",
        "source":  "Excel",
        "options":  [
                        "Use Ctrl plus B to apply bold formatting",
                        "Select data and insert chart from Insert tab",
                        "Use selection tools and layer mask to remove background",
                        "Use query to filter and view required records"
                    ],
        "answer":  1
    },
    {
        "q":  "From the given options, select how to send email with attachment.",
        "source":  "Internet",
        "options":  [
                        "Use Ctrl plus M to insert a new slide",
                        "Compose email, attach file, then click send",
                        "Press Windows plus E to open File Explorer",
                        "Open Start menu and choose Microsoft Excel"
                    ],
        "answer":  1
    },
    {
        "q":  "Identify the correct process to calculate total using formula in Excel.",
        "source":  "Excel",
        "options":  [
                        "Use anchor tag with href attribute for link",
                        "Use shape tools to create editable vector objects",
                        "Use h1 to h6 tags to create headings",
                        "Use SUM formula to add selected cells"
                    ],
        "answer":  3
    },
    {
        "q":  "What is the best way to create a heading in HTML page?",
        "source":  "HTML",
        "options":  [
                        "Use shape tools to create editable vector objects",
                        "Select data and insert chart from Insert tab",
                        "Use h1 to h6 tags to create headings",
                        "Monitor, printer, and speaker are output devices"
                    ],
        "answer":  2
    },
    {
        "q":  "Identify the correct process to record sales entry in Tally.",
        "source":  "Tally",
        "options":  [
                        "Keyboard, mouse, and scanner are input devices",
                        "Open Sales voucher and enter invoice details",
                        "Select data and insert chart from Insert tab",
                        "Press F5 to start slide show from first slide"
                    ],
        "answer":  1
    },
    {
        "q":  "Identify the correct process to design page layout in Pagemkaer.",
        "source":  "Pagemkaer",
        "options":  [
                        "Use a browser and search engine with keywords",
                        "Use query to filter and view required records",
                        "Use text frames and layout tools for page design",
                        "Use Ctrl plus B to apply bold formatting"
                    ],
        "answer":  2
    },
    {
        "q":  "Pick the correct answer for open File Explorer in Windows.",
        "source":  "Windows",
        "options":  [
                        "Press Windows plus E to open File Explorer",
                        "Use Ctrl plus B to apply bold formatting",
                        "Use SUM formula to add selected cells",
                        "Keyboard, mouse, and scanner are input devices"
                    ],
        "answer":  0
    },
    {
        "q":  "Select the correct method to add new slide in PowerPoint.",
        "source":  "PowerPoint",
        "options":  [
                        "Keyboard, mouse, and scanner are input devices",
                        "Select file, press F2, type new name, and press Enter",
                        "Use Ctrl plus M to insert a new slide",
                        "Use Ctrl plus S to save the current document"
                    ],
        "answer":  2
    },
    {
        "q":  "In practical exam, how do you make selected text bold in Word?",
        "source":  "Word",
        "options":  [
                        "Keyboard, mouse, and scanner are input devices",
                        "Monitor, printer, and speaker are output devices",
                        "Use anchor tag with href attribute for link",
                        "Use Ctrl plus B to apply bold formatting"
                    ],
        "answer":  3
    },
    {
        "q":  "Pick the correct answer for send email with attachment.",
        "source":  "Internet",
        "options":  [
                        "Compose email, attach file, then click send",
                        "Use SUM formula to add selected cells",
                        "Use text frames and layout tools for page design",
                        "Use selection tools and layer mask to remove background"
                    ],
        "answer":  0
    },
    {
        "q":  "Pick the correct answer for open MS Word.",
        "source":  "Word",
        "options":  [
                        "Use table design or datasheet view to create table",
                        "Open Start menu and choose Microsoft Word",
                        "Use h1 to h6 tags to create headings",
                        "Monitor, printer, and speaker are output devices"
                    ],
        "answer":  1
    },
    {
        "q":  "Choose the correct statement about make selected text bold in Word.",
        "source":  "Word",
        "options":  [
                        "Select file, press F2, type new name, and press Enter",
                        "Use Ctrl plus B to apply bold formatting",
                        "Use query to filter and view required records",
                        "Use text frames and layout tools for page design"
                    ],
        "answer":  1
    },
    {
        "q":  "From the given options, select how to open File Explorer in Windows.",
        "source":  "Windows",
        "options":  [
                        "Use query to filter and view required records",
                        "Press Windows plus E to open File Explorer",
                        "Use Ctrl plus S to save the current document",
                        "Use table design or datasheet view to create table"
                    ],
        "answer":  1
    },
    {
        "q":  "Which option is right for add new slide in PowerPoint?",
        "source":  "PowerPoint",
        "options":  [
                        "Use Ctrl plus M to insert a new slide",
                        "Monitor, printer, and speaker are output devices",
                        "Use table design or datasheet view to create table",
                        "Use query to filter and view required records"
                    ],
        "answer":  0
    },
    {
        "q":  "Identify the correct process to identify input devices in computer.",
        "source":  "Fundamentle",
        "options":  [
                        "Use query to filter and view required records",
                        "Use anchor tag with href attribute for link",
                        "Keyboard, mouse, and scanner are input devices",
                        "Open Start menu and choose Microsoft Excel"
                    ],
        "answer":  2
    },
    {
        "q":  "From the given options, select how to add new slide in PowerPoint.",
        "source":  "PowerPoint",
        "options":  [
                        "Use selection tools and layer mask to remove background",
                        "Use SUM formula to add selected cells",
                        "Use Ctrl plus M to insert a new slide",
                        "Use Ctrl plus B to apply bold formatting"
                    ],
        "answer":  2
    },
    {
        "q":  "From the given options, select how to find records in Access.",
        "source":  "Access",
        "options":  [
                        "Use query to filter and view required records",
                        "Use shape tools to create editable vector objects",
                        "Use text frames and layout tools for page design",
                        "Use anchor tag with href attribute for link"
                    ],
        "answer":  0
    },
    {
        "q":  "Choose the correct statement about create a table in MS Access.",
        "source":  "Access",
        "options":  [
                        "Use table design or datasheet view to create table",
                        "Compose email, attach file, then click send",
                        "Open Start menu and choose Microsoft Excel",
                        "Use a browser and search engine with keywords"
                    ],
        "answer":  0
    },
    {
        "q":  "Which of the following is the correct way to record sales entry in Tally?",
        "source":  "Tally",
        "options":  [
                        "Compose email, attach file, then click send",
                        "Open Sales voucher and enter invoice details",
                        "Use anchor tag with href attribute for link",
                        "Press F5 to start slide show from first slide"
                    ],
        "answer":  1
    },
    {
        "q":  "Select the correct method to create a table in MS Access.",
        "source":  "Access",
        "options":  [
                        "Monitor, printer, and speaker are output devices",
                        "Use table design or datasheet view to create table",
                        "Use text frames and layout tools for page design",
                        "Use shape tools to create editable vector objects"
                    ],
        "answer":  1
    },
    {
        "q":  "Which of the following is the correct way to search information on internet?",
        "source":  "Internet",
        "options":  [
                        "Select data and insert chart from Insert tab",
                        "Use a browser and search engine with keywords",
                        "Use Ctrl plus M to insert a new slide",
                        "Select file, press F2, type new name, and press Enter"
                    ],
        "answer":  1
    },
    {
        "q":  "Choose the correct statement about rename a file in Windows.",
        "source":  "Windows",
        "options":  [
                        "Select file, press F2, type new name, and press Enter",
                        "Use anchor tag with href attribute for link",
                        "Use SUM formula to add selected cells",
                        "Use query to filter and view required records"
                    ],
        "answer":  0
    },
    {
        "q":  "Which of the following is the correct way to identify output devices in computer?",
        "source":  "Fundamentle",
        "options":  [
                        "Use Ctrl plus M to insert a new slide",
                        "Use SUM formula to add selected cells",
                        "Monitor, printer, and speaker are output devices",
                        "Open Sales voucher and enter invoice details"
                    ],
        "answer":  2
    },
    {
        "q":  "Choose the correct statement about find records in Access.",
        "source":  "Access",
        "options":  [
                        "Use shape tools to create editable vector objects",
                        "Compose email, attach file, then click send",
                        "Use Ctrl plus S to save the current document",
                        "Use query to filter and view required records"
                    ],
        "answer":  3
    },
    {
        "q":  "Which option is right for open File Explorer in Windows?",
        "source":  "Windows",
        "options":  [
                        "Use selection tools and layer mask to remove background",
                        "Use anchor tag with href attribute for link",
                        "Press Windows plus E to open File Explorer",
                        "Monitor, printer, and speaker are output devices"
                    ],
        "answer":  2
    },
    {
        "q":  "Which option is right for open MS Excel?",
        "source":  "Excel",
        "options":  [
                        "Open Sales voucher and enter invoice details",
                        "Compose email, attach file, then click send",
                        "Use SUM formula to add selected cells",
                        "Open Start menu and choose Microsoft Excel"
                    ],
        "answer":  3
    },
    {
        "q":  "From the given options, select how to calculate total using formula in Excel.",
        "source":  "Excel",
        "options":  [
                        "Use Ctrl plus B to apply bold formatting",
                        "Select data and insert chart from Insert tab",
                        "Use SUM formula to add selected cells",
                        "Use anchor tag with href attribute for link"
                    ],
        "answer":  2
    },
    {
        "q":  "What is the best way to create a chart in Excel?",
        "source":  "Excel",
        "options":  [
                        "Select data and insert chart from Insert tab",
                        "Use SUM formula to add selected cells",
                        "Use table design or datasheet view to create table",
                        "Use Ctrl plus S to save the current document"
                    ],
        "answer":  0
    },
    {
        "q":  "Which of the following is the correct way to rename a file in Windows?",
        "source":  "Windows",
        "options":  [
                        "Open Sales voucher and enter invoice details",
                        "Select file, press F2, type new name, and press Enter",
                        "Open Start menu and choose Microsoft Excel",
                        "Use Ctrl plus M to insert a new slide"
                    ],
        "answer":  1
    },
    {
        "q":  "Pick the correct answer for create a chart in Excel.",
        "source":  "Excel",
        "options":  [
                        "Use Ctrl plus B to apply bold formatting",
                        "Select data and insert chart from Insert tab",
                        "Press Windows plus E to open File Explorer",
                        "Keyboard, mouse, and scanner are input devices"
                    ],
        "answer":  1
    },
    {
        "q":  "From the given options, select how to identify output devices in computer.",
        "source":  "Fundamentle",
        "options":  [
                        "Select data and insert chart from Insert tab",
                        "Compose email, attach file, then click send",
                        "Open Start menu and choose Microsoft Word",
                        "Monitor, printer, and speaker are output devices"
                    ],
        "answer":  3
    },
    {
        "q":  "In practical exam, how do you create a chart in Excel?",
        "source":  "Excel",
        "options":  [
                        "Use a browser and search engine with keywords",
                        "Select data and insert chart from Insert tab",
                        "Use query to filter and view required records",
                        "Press Windows plus E to open File Explorer"
                    ],
        "answer":  1
    },
    {
        "q":  "Which option is right for make selected text bold in Word?",
        "source":  "Word",
        "options":  [
                        "Compose email, attach file, then click send",
                        "Use Ctrl plus B to apply bold formatting",
                        "Press Windows plus E to open File Explorer",
                        "Use table design or datasheet view to create table"
                    ],
        "answer":  1
    },
    {
        "q":  "Select the correct method to search information on internet.",
        "source":  "Internet",
        "options":  [
                        "Use a browser and search engine with keywords",
                        "Use SUM formula to add selected cells",
                        "Press F5 to start slide show from first slide",
                        "Select data and insert chart from Insert tab"
                    ],
        "answer":  0
    },
    {
        "q":  "Which option is right for save a document quickly in Word?",
        "source":  "Word",
        "options":  [
                        "Use table design or datasheet view to create table",
                        "Use Ctrl plus S to save the current document",
                        "Use text frames and layout tools for page design",
                        "Keyboard, mouse, and scanner are input devices"
                    ],
        "answer":  1
    },
    {
        "q":  "Pick the correct answer for create a heading in HTML page.",
        "source":  "HTML",
        "options":  [
                        "Open Sales voucher and enter invoice details",
                        "Use h1 to h6 tags to create headings",
                        "Keyboard, mouse, and scanner are input devices",
                        "Press F5 to start slide show from first slide"
                    ],
        "answer":  1
    }
];

  window.IGCIM_QUESTION_BANKS = window.IGCIM_QUESTION_BANKS || {};
  window.IGCIM_QUESTION_BANKS.ADCA = adcaQuestions;
})();

