(function () {
  const internshipQuestions = [
    {
        source: 'Internship',
        q: "What is Computer?",
        options: ["Mechanical Device", "Electronic Device", "Chemical Device", "Communication Device"],
        answer: 1
    },
    {
        source: 'Internship',
        q: "What is the shortcut used to print a document in MS-Word?",
        options: ["Ctrl + S", "Ctrl + O", "Ctrl + P", "Ctrl + A"],
        answer: 2
    },
    {
        source: 'Internship',
        q: "Which one is the correct way to insert a Table in Ms-Word?",
        options: ["File Menu -> Save", "Home Tab -> Clpboard", "Home Tab -> Editing", "Insert Tab -> Table"],
        answer: 3
    },
    {
        source: 'Internship',
        q: "What is the purpose of Bold option?",
        options: ["To increase Font size", "To change the Text Colour", "To make Text Bold", "To decrease the Font size"],
        answer: 2
    },
    {
        source: 'Internship',
        q: "In which Tab you find the option for changing the Font Color?",
        options: ["File Menu", "Home Tab", "Insert Tab", "View Tab"],
        answer: 1
    },
    {
        source: 'Internship',
        q: "What is the full form of RAM?",
        options: ["Random Access Memory", "Read Access Memory", "Randomly applied Memory", "Read Accross Memory"],
        answer: 0
    },
    {
        source: 'Internship',
        q: "What is the full form of ROM?",
        options: ["Read Only Memory", "Random Access Memory", "Read Access Memory", "Random Across Memory"],
        answer: 0
    },
    {
        source: 'Internship',
        q: "Which Alignment is used to Align Text to Center?",
        options: ['Right Align', 'Left Align', 'Justify', 'Center Align'],
        answer: 3
    },
    {
        source: 'Internship',
        q: 'Which one of the following options, is the correct way to save a file?',
        options: ['Home Tab -> Save As', 'Insert Tab -> Picture', 'File Menu -> Save', 'File Menu -> Print'],
        answer: 2
    },
    {
        source: 'Internship',
        q: 'What is the correct way to open Ms-Word?',
        options: ['Start -> Type -> PowerPoint', 'Start -> Type -> Excel', 'Start -> Type -> Shut Down', 'Start -> Type -> Word'],
        answer: 3
    },
    {
        source: 'Internship',
        q: 'What is the purpose for creating a folder?',
        options: ['To store multiple files at once', 'To creating a New Word file', 'To Print a document', 'For creating a Chart'],
        answer: 0
    },
    {
        source: 'Internship',
        q: 'How to Start a Computer?',
        options: ['By Pressing Enter Key', 'By Pressing Power button','By Pressing Esc Key','By Pressing Ctrl + S Key',   ],
        answer: 1
    },
    {
        source: 'Internship',
        q: 'What is the shortcut key for inserting a new slide in Power-Point?',
        options: ['Ctrl + N', 'Ctrl + A', 'Ctrl + M', 'Ctrl + x'],
        answer: 2
    },
    {
        source: 'Internship',
        q: 'From the Options given below, Which one is an AI tool used for generating Texts?',
        options: ['Gemini', 'chatGPT', 'Codex', 'Both A & B'],
        answer: 3
    },
    {
        source: 'Internship',
        q: 'What is the full form of AI?',
        options: ['Artificial Intelligence', 'Artificial Information', 'Artificial Internet', 'Artificial Integration'],
        answer: 0
    },
    {
        source: 'Internship',
        q: 'What is the shortcut key for Copying a text?',
        options: ['Ctrl + V', 'Ctrl + C', 'Ctrl + X', 'Ctrl + Z'],
        answer: 1
    },
    {
        source: 'Internship',
        q: 'What is the shortcut Key to Cut any selected Text?',
        options: ['Ctrl + V', 'Ctrl + C', 'Ctrl + X', 'Ctrl + Z'],
        answer: 2
    },
    {
        source: 'Internship',
        q: 'What is the shortcut key for Undo an action?',
        options: ['Ctrl + V', 'Ctrl + C', 'Ctrl + X', 'Ctrl + Z'],
        answer: 3
    },
    {
        source: 'Internship',
        q: 'What is the shortcut key for Pasting a text?',
        options: ['Ctrl + V', 'Ctrl + C', 'Ctrl + X', 'Ctrl + Z'],
        answer: 0
    },
    {
        source: 'Internship',
        q: 'Which one of the following option is looks like a Typewriter?',
        options: ['Keyboard', 'Mouse', 'Monitor', 'Printer'],
        answer: 0
    },
    {
        source: 'Internship',
        q: "Which one of the following is konwn as father of computer?",
        options: ["Charles Babbage", "Alan Turing", "John Von Neumann", "Bill Gates"],
        answer: 0
    },
    {
        source: 'Internship',
        q: 'What is the purpose of using AI tools?',
        options: ['To Generate Texts', 'To Generate Images', 'To Generate Codes', 'All of these'],
        answer: 3
    },
    {
        source: 'Internship',
        q: 'What is the extension name of Ms-Word?',
        options: ['.pptx', '.jpg', '.docx', '.png'],
        answer: 2
    },
    {
        source: 'Internship',
        q: 'What is the extension name of Excel?',
        options: ['.bmp', '.txt', '.pdf', '.xlsx'],
        answer: 3
    },
    {
        source: 'Internship',
        q: 'What is the extension name of Power-Point?',
        options: ['.pdf', '.svg', '.html', '.pptx'],
        answer: 3
    },
    {
        source: 'Internship',
        q: 'What is the total number of rows in a single worksheet?',
        options: ['1048576', '16384', '23456', 'None of these'],
        answer: 0
    },
    {
        source: 'Internship',
        q: 'what is the total number of Columns in a single Worksheet?',
        options: ['1048576', '16384', '18000', 'None of these'],
        answer: 1
    },
    {
        source: 'Internship',
        q: 'Which of the following function, is used to add a number of a cell range?',
        options: ['SUM', 'AVERAGE', 'IF', 'COUNT'],
        answer: 0
    },
    {
        source: 'Internship',
        q: 'Which of the following is not a software application?',
        options: ['Ms-Word', 'Excel', 'Power-Point', 'Micorsoft'],
        answer: 3
    },
    {
        source: 'Internship',
        q: 'Which of the following is a search engine of Microsoft Comapany?',
        options: ['Google', 'Duck-Duck Go', 'Bing', 'Safari'],
        answer: 2
    },
    {
        source: 'Internship',
        q: 'Which of the following option is Web-browser?',
        options: ['Google Chrome', 'Power-Point', 'Microsoft Edge', 'Both A & C'],
        answer: 3
    },
    {
        source: 'Internship',
        q: 'Which kind of industires commonly uses computer systems?',
        options: ['Salse Organization', 'School/Colleges', 'Airports', 'All of these'],
        answer: 3
    },
    {
        source: 'Internship',
        q: 'Full Form of CPU?',
        options: ['Central Porcess User', 'Central Porcessing Unit', 'Central Porgress Unit', 'None of These'],
        answer: 1
    },
    {
        source: 'Internship',
        q: 'How do you start Power-Point?',
        options: ['Start -> Type -> PowerPoint', 'Start -> Type -> Excel', 'Start -> Type -> Shut Down', 'Start -> Type -> Word'],
        answer: 0
    },
    {
        source: 'Internship',
        q: 'How do you start Excel?',
        options: ['Start -> Type -> PowerPoint', 'Start -> Type -> Excel', 'Start -> Type -> Shut Down', 'Start -> Type -> Word'],
        answer: 1
    },
    {
        source: 'Internship',
        q: 'What is the primary use of Ms-Word?',
        options: ['Creating Spreadsheets', 'Creating Presentations', 'Creating Documents', 'None of these'],
        answer: 2
    },
    {
        source: 'Internship',
        q: 'Which of these AI tools is used for generating Images?',
        options: ['Gemini', 'chatGPT', 'Git-hub copilot', 'Both A & B'],
        answer: 3
    },
    {
        source: 'Internship',
        q: 'What is the primary use of Power-Point?',
        options: ['Creating Spreadsheets', 'Creating Presentations', 'Creating Documents', 'None of these'],
        answer: 1
    },
    {
        source: 'Internship',
        q: 'What is the primary use of Excel?',
        options: ['Creating Spreadsheets', 'Creating Presentations', 'Creating Documents', 'None of these'],
        answer: 0
    },
    {
        source: 'Internship',
        q: 'Which of the following is not an AI tool?',
        options: ['Gemini', 'chatGPT', 'Git-hub copilot', 'Microsoft Excel'],
        answer: 3
    },
    {
        source: 'Internship',
        q: 'Which of the following is not a Web-browser?',
        options: ['Google Chrome', 'Power-Point', 'Microsoft Edge', 'Both A & C'],
        answer: 1
    },
    {
        source: 'Internship',
        q: 'Which of the following is not a search engine?',
        options: ['Google', 'Duck-Duck Go', 'Bing', 'Microsoft Excel'],
        answer: 3
    },
    {
        source: 'Internship',
        q: '=IF(G1>=30, "Pass", "Fail"), what is the result of this formula, if the value of G1 is 25?',
        options: ['Pass', 'Fail', 'Error', 'None of these'],
        answer: 1
    },
    {
        source: 'Internship',
        q: 'Which of the following function is used to count the number of cells are selected in a cell range?',
        options: ['SUM', 'AVERAGE', 'IF', 'COUNT'],
        answer: 3
    },
    {
        source: 'Internship',
        q: 'Which of the following function is used to calculate the average of a cell range?',
        options: ['SUM', 'AVERAGE', 'IF', 'COUNT'],
        answer: 1
    },
    {
        source: 'Internship',
        q: 'In Excel what is the use of function name "Countif"?',
        options: ['To count cells with a specific value', 'To count cells with a specific condition', 'To count all cells in a range', 'None of these'],
        answer: 1
    },
    {
        source: 'Internship',
        q: 'What is the the purpose of using animation in Power-Point?',
        options: ['To make the presentation more attractive', 'To make the presentation more informative', 'To make the presentation more interactive', 'All of these'],
        answer: 3
    },
    {
        source: 'Internship',
        q: 'Which of the following is the right way to creating a new folder in Windows?',
        options: ['Right click on Desktop -> New -> Folder', 'Right click on Desktop -> New -> File', 'Left click on Desktop -> New -> Folder', 'None of these'],
        answer: 0
    },
    {
        source: 'Internship',
        q: 'What is the primary use purpose for Facebok Maketing?',
        options: ['Audience engagement', 'Image generation', 'Data storage', 'None of these'],
        answer: 0
    },
    {
        source: 'Internship',
        q: 'What are the main benefits of Instagram Business Profile?',
        options: ['Email automation', 'Advanced analytics', 'video editing', 'Data storage'], 
        answer: 1
    },
    {
        source: 'Internship',
        q: 'Which of the following is not a social media platform?',
        options: ['Facebook', 'Instagram', 'Twitter', 'Microsoft Excel'],
        answer: 3
    },
    {
        source: 'Internship',
        q: 'Which of the following is not a feature of Facebook?',
        options: ['Pages', 'Groups', 'Stories', 'Coding'],
        answer: 3
    },
    {
        source: 'Internship',
        q: 'Which of the following is a feature of Instagram?',
        options: ['Reels', 'Stories', 'Coding', 'Both A & B'],
        answer: 3
    },
    {
        source: 'Internship',
        q: 'In Power-Point Where do you find the option name "Photo Album"?',
        options: ['File Menu', 'Home Tab', 'Insert Tab', 'View Tab'],
        answer: 2
    },
    {
        source: 'Internship',
        q: 'Which of the following is a type of page orientation?',
        options: ['Portrait', 'Landscape', 'Both A & B', 'None of these'],
        answer: 2
    },
    {
        source: 'Internship',
        q: 'What is the default page size in Ms-word and Excel?',
        options: ['A4', 'Letter', 'Legal', 'None of these'],
        answer: 0
    },
    {
        source: 'Internship',
        q: 'What is the size of slide projection in Power-Point?',
        options: ['33mm', '36mm', '30mm', '40mm'],
        answer: 1
    },
    {
        source: 'Internship',
        q: 'What is the shortcut key for previewing a presentation in Power-Point?',
        options: ['F7', 'F6', 'F5', 'F8'],
        answer: 2
    },
    {
        source: 'Internship',
        q: 'What is the default page orientation in Ms-Word and Excel?',
        options: ['Portrait', 'Landscape', 'Both A & B', 'None of these'],
        answer: 0
    },
    {
        source: 'Internship',
        q: 'Why social media marketing is important for businesses?',
        options: ['To increase brand awareness', 'To engage with customers', 'To drive website traffic', 'All of these'],
        answer: 3
    },
    {
        source: 'Internship',
        q: 'In Excel, Which of the following function is used to find the maximum value in a range or cell range?',
        options: ['MAX', 'MIN', 'AVERAGE', 'COUNT'],
        answer: 0
    },
    {
        source: 'Internship',
        q: 'In Excel, Which of the following function is used to find the minimum value in a range or cell range?',
        options: ['MAX', 'MIN', 'AVERAGE', 'COUNT'],
        answer: 1
    },
    {
        source: 'Internship',
        q: 'What is Internet?',
        options: ['Network of Network', 'A local network of computers', 'A type of software', 'None of these'],
        answer: 0
    },
    {
        source: 'Internship',
        q: 'What is the full form of URL?',
        options: ['Uniform Resource Locator', 'Uniform Resource Link', 'Uniform Resource Language', 'None of these'],
        answer: 0
    },
    {
        source: 'Internship',
        q: 'What is the full form of E-mail?',
        options: ['Electronic Message', 'Electronic Mail', 'Electronic Medium', 'None of these'],
        answer: 1
    },
    {
        source: 'Internship',
        q: "What is the use of GMail?",
        options: ["To send and receive Emails", "To create documents", "To create presentations", "None of these"],
        answer: 0
    },
    {
        source: 'Internship',
        q: 'Which of the following is not an email service provider?',
        options: ['Gmail', 'Yahoo Mail', 'Outlook', 'Microsoft Excel'],
        answer: 3
    },
    {
        source: 'Internship',
        q: 'What is the main purpose of using email?',
        options: ['Personal Communication', 'Business Communication', 'Marketing', 'All of these'],
        answer: 3
    },
    {
        source: 'Internship',
        q: 'What is the main purpose of using Grammarly?',
        options: ['To check grammar and spelling', 'To create documents', 'To create presentations', 'None of these'],
        answer: 0
    },
    {
        source: 'Internship',
        q: 'Which kind of application is YouTube?',
        options: ['Text editor', 'Spread Sheet', "Social Media Platform", 'Presentation Software'],
        answer: 2
    },
    {
        source: 'Internship',
        q: 'What does OS stands for in computer terminology?',
        options: ['Operating System', 'Open Source', 'Online Service', 'None of these'],
        answer: 0
    },
    {
        source: 'Internship',
        q: 'Which of the following is not an operating system?',
        options: ['Windows', 'MacOS', 'Linux', 'Microsoft Excel'],
        answer: 3
    },
    {
        source: 'Internship',
        q: 'In which Tab you find border option in Ms-Word?',
        options: ['File Menu', 'Home Tab', 'Insert Tab', 'View Tab'],
        answer: 1
    },
    {
        source: 'Internship',
        q: "What is the shortcut key for selecting all the text in a document?",
        options: ["Ctrl + A", "Ctrl + S", "Ctrl + P", "Ctrl + O"],
        answer: 0
    },
    {
        source: 'Internship',
        q: 'To start a new pargraph in Ms-Word, which key do you press?',
        options: ['Enter', 'Tab', 'Space', 'Shift'],
        answer: 0
    }

];

  window.IGCIM_QUESTION_BANKS = window.IGCIM_QUESTION_BANKS || {};
  window.IGCIM_QUESTION_BANKS.INTERNSHIP = internshipQuestions;
})();
