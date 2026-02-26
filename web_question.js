(function () {
  const webQuestions = [
    {
        "q":  "In WEB, what is the main use of \u0027HTML\u0027?",
        "source":  "HTML",
        "options":  [
                        "define structure of webpage elements",
                        "represent webpage as programmable object model",
                        "apply styles colors and spacing",
                        "create clickable links"
                    ],
        "answer":  0
    },
    {
        "q":  "Choose the correct meaning of \u0027HTML\u0027 in WEB.",
        "source":  "HTML",
        "options":  [
                        "add extra settings to HTML tags",
                        "collect user input data",
                        "define structure of webpage elements",
                        "accept typed data from user"
                    ],
        "answer":  2
    },
    {
        "q":  "For beginner students, \u0027HTML\u0027 is used for:",
        "source":  "HTML",
        "options":  [
                        "apply styles colors and spacing",
                        "define structure of webpage elements",
                        "align items in responsive layout",
                        "accept typed data from user"
                    ],
        "answer":  1
    },
    {
        "q":  "Which option best describes \u0027HTML\u0027 in WEB course?",
        "source":  "HTML",
        "options":  [
                        "align items in responsive layout",
                        "respond to user interaction",
                        "define structure of webpage elements",
                        "create clickable links"
                    ],
        "answer":  2
    },
    {
        "q":  "Basic concept check: \u0027HTML\u0027 helps to:",
        "source":  "HTML",
        "options":  [
                        "save simple data in browser",
                        "apply styles colors and spacing",
                        "respond to user interaction",
                        "define structure of webpage elements"
                    ],
        "answer":  3
    },
    {
        "q":  "In practical class, \u0027HTML\u0027 is mostly used to:",
        "source":  "HTML",
        "options":  [
                        "mark and define HTML element",
                        "store key and value pairs",
                        "create row and column layout",
                        "define structure of webpage elements"
                    ],
        "answer":  3
    },
    {
        "q":  "Student test: what does \u0027HTML\u0027 mean in ",
        "source":  "HTML",
        "options":  [
                        "adapt layout to screen sizes",
                        "mark and define HTML element",
                        "align items in responsive layout",
                        "define structure of webpage elements"
                    ],
        "answer":  3
    },
    {
        "q":  "Select the right statement for \u0027HTML\u0027 in this WEB exam.",
        "source":  "HTML",
        "options":  [
                        "store value for later use",
                        "represent webpage as programmable object model",
                        "define structure of webpage elements",
                        "respond to user interaction"
                    ],
        "answer":  2
    },
    {
        "q":  "\u0027WEB\u0027 topic \u0027HTML\u0027 is related to:",
        "source":  "HTML",
        "options":  [
                        "represent webpage as programmable object model",
                        "accept typed data from user",
                        "save simple data in browser",
                        "define structure of webpage elements"
                    ],
        "answer":  3
    },
    {
        "q":  "Quick revision: \u0027HTML\u0027 is used for which task?",
        "source":  "HTML",
        "options":  [
                        "create clickable links",
                        "store key and value pairs",
                        "save simple data in browser",
                        "define structure of webpage elements"
                    ],
        "answer":  3
    },
    {
        "q":  "In WEB, what is the main use of \u0027CSS\u0027?",
        "source":  "CSS",
        "options":  [
                        "represent webpage as programmable object model",
                        "apply styles colors and spacing",
                        "display image on webpage",
                        "adapt layout to screen sizes"
                    ],
        "answer":  1
    },
    {
        "q":  "Choose the correct meaning of \u0027CSS\u0027 in WEB.",
        "source":  "CSS",
        "options":  [
                        "apply styles colors and spacing",
                        "adapt layout to screen sizes",
                        "define structure of webpage elements",
                        "mark and define HTML element"
                    ],
        "answer":  0
    },
    {
        "q":  "For beginner students, \u0027CSS\u0027 is used for:",
        "source":  "CSS",
        "options":  [
                        "mark and define HTML element",
                        "display image on webpage",
                        "control behavior and page interaction",
                        "apply styles colors and spacing"
                    ],
        "answer":  3
    },
    {
        "q":  "Which option best describes \u0027CSS\u0027 in WEB course?",
        "source":  "CSS",
        "options":  [
                        "reuse block of JavaScript code",
                        "trigger action on click",
                        "collect user input data",
                        "apply styles colors and spacing"
                    ],
        "answer":  3
    },
    {
        "q":  "Basic concept check: \u0027CSS\u0027 helps to:",
        "source":  "CSS",
        "options":  [
                        "save simple data in browser",
                        "reuse block of JavaScript code",
                        "apply styles colors and spacing",
                        "control behavior and page interaction"
                    ],
        "answer":  2
    },
    {
        "q":  "In practical class, \u0027CSS\u0027 is mostly used to:",
        "source":  "CSS",
        "options":  [
                        "align items in responsive layout",
                        "save simple data in browser",
                        "apply styles colors and spacing",
                        "control behavior and page interaction"
                    ],
        "answer":  2
    },
    {
        "q":  "Student test: what does \u0027CSS\u0027 mean in ",
        "source":  "CSS",
        "options":  [
                        "reuse block of JavaScript code",
                        "apply styles colors and spacing",
                        "save simple data in browser",
                        "create clickable links"
                    ],
        "answer":  1
    },
    {
        "q":  "Select the right statement for \u0027CSS\u0027 in this WEB exam.",
        "source":  "CSS",
        "options":  [
                        "define structure of webpage elements",
                        "create clickable links",
                        "display image on webpage",
                        "apply styles colors and spacing"
                    ],
        "answer":  3
    },
    {
        "q":  "\u0027WEB\u0027 topic \u0027CSS\u0027 is related to:",
        "source":  "CSS",
        "options":  [
                        "apply styles colors and spacing",
                        "mark and define HTML element",
                        "collect user input data",
                        "trigger action on click"
                    ],
        "answer":  0
    },
    {
        "q":  "Quick revision: \u0027CSS\u0027 is used for which task?",
        "source":  "CSS",
        "options":  [
                        "apply styles colors and spacing",
                        "save simple data in browser",
                        "create row and column layout",
                        "control behavior and page interaction"
                    ],
        "answer":  0
    },
    {
        "q":  "In WEB, what is the main use of \u0027JavaScript\u0027?",
        "source":  "JavaScript",
        "options":  [
                        "align items in responsive layout",
                        "control behavior and page interaction",
                        "save simple data in browser",
                        "hold ordered list of values"
                    ],
        "answer":  1
    },
    {
        "q":  "Choose the correct meaning of \u0027JavaScript\u0027 in WEB.",
        "source":  "JavaScript",
        "options":  [
                        "store value for later use",
                        "control behavior and page interaction",
                        "display image on webpage",
                        "mark and define HTML element"
                    ],
        "answer":  1
    },
    {
        "q":  "For beginner students, \u0027JavaScript\u0027 is used for:",
        "source":  "JavaScript",
        "options":  [
                        "define structure of webpage elements",
                        "save simple data in browser",
                        "control behavior and page interaction",
                        "respond to user interaction"
                    ],
        "answer":  2
    },
    {
        "q":  "Which option best describes \u0027JavaScript\u0027 in WEB course?",
        "source":  "JavaScript",
        "options":  [
                        "hold ordered list of values",
                        "control behavior and page interaction",
                        "display image on webpage",
                        "create row and column layout"
                    ],
        "answer":  1
    },
    {
        "q":  "Basic concept check: \u0027JavaScript\u0027 helps to:",
        "source":  "JavaScript",
        "options":  [
                        "create row and column layout",
                        "control behavior and page interaction",
                        "mark and define HTML element",
                        "add extra settings to HTML tags"
                    ],
        "answer":  1
    },
    {
        "q":  "In practical class, \u0027JavaScript\u0027 is mostly used to:",
        "source":  "JavaScript",
        "options":  [
                        "trigger action on click",
                        "control behavior and page interaction",
                        "accept typed data from user",
                        "adapt layout to screen sizes"
                    ],
        "answer":  1
    },
    {
        "q":  "Student test: what does \u0027JavaScript\u0027 mean in ",
        "source":  "JavaScript",
        "options":  [
                        "represent webpage as programmable object model",
                        "add extra settings to HTML tags",
                        "apply styles colors and spacing",
                        "control behavior and page interaction"
                    ],
        "answer":  3
    },
    {
        "q":  "Select the right statement for \u0027JavaScript\u0027 in this WEB exam.",
        "source":  "JavaScript",
        "options":  [
                        "control behavior and page interaction",
                        "store key and value pairs",
                        "store value for later use",
                        "create row and column layout"
                    ],
        "answer":  0
    },
    {
        "q":  "\u0027WEB\u0027 topic \u0027JavaScript\u0027 is related to:",
        "source":  "JavaScript",
        "options":  [
                        "create row and column layout",
                        "define structure of webpage elements",
                        "store key and value pairs",
                        "control behavior and page interaction"
                    ],
        "answer":  3
    },
    {
        "q":  "Quick revision: \u0027JavaScript\u0027 is used for which task?",
        "source":  "JavaScript",
        "options":  [
                        "mark and define HTML element",
                        "control behavior and page interaction",
                        "collect user input data",
                        "store key and value pairs"
                    ],
        "answer":  1
    },
    {
        "q":  "In WEB, what is the main use of \u0027Tag\u0027?",
        "source":  "Tag",
        "options":  [
                        "add extra settings to HTML tags",
                        "represent webpage as programmable object model",
                        "save simple data in browser",
                        "mark and define HTML element"
                    ],
        "answer":  3
    },
    {
        "q":  "Choose the correct meaning of \u0027Tag\u0027 in WEB.",
        "source":  "Tag",
        "options":  [
                        "collect user input data",
                        "respond to user interaction",
                        "save simple data in browser",
                        "mark and define HTML element"
                    ],
        "answer":  3
    },
    {
        "q":  "For beginner students, \u0027Tag\u0027 is used for:",
        "source":  "Tag",
        "options":  [
                        "accept typed data from user",
                        "store value for later use",
                        "save simple data in browser",
                        "mark and define HTML element"
                    ],
        "answer":  3
    },
    {
        "q":  "Which option best describes \u0027Tag\u0027 in WEB course?",
        "source":  "Tag",
        "options":  [
                        "control behavior and page interaction",
                        "store value for later use",
                        "mark and define HTML element",
                        "reuse block of JavaScript code"
                    ],
        "answer":  2
    },
    {
        "q":  "Basic concept check: \u0027Tag\u0027 helps to:",
        "source":  "Tag",
        "options":  [
                        "add extra settings to HTML tags",
                        "apply styles colors and spacing",
                        "collect user input data",
                        "mark and define HTML element"
                    ],
        "answer":  3
    },
    {
        "q":  "In practical class, \u0027Tag\u0027 is mostly used to:",
        "source":  "Tag",
        "options":  [
                        "accept typed data from user",
                        "trigger action on click",
                        "mark and define HTML element",
                        "create clickable links"
                    ],
        "answer":  2
    },
    {
        "q":  "Student test: what does \u0027Tag\u0027 mean in ",
        "source":  "Tag",
        "options":  [
                        "mark and define HTML element",
                        "store value for later use",
                        "trigger action on click",
                        "save simple data in browser"
                    ],
        "answer":  0
    },
    {
        "q":  "Select the right statement for \u0027Tag\u0027 in this WEB exam.",
        "source":  "Tag",
        "options":  [
                        "create row and column layout",
                        "control behavior and page interaction",
                        "respond to user interaction",
                        "mark and define HTML element"
                    ],
        "answer":  3
    },
    {
        "q":  "\u0027WEB\u0027 topic \u0027Tag\u0027 is related to:",
        "source":  "Tag",
        "options":  [
                        "mark and define HTML element",
                        "store value for later use",
                        "create clickable links",
                        "add extra settings to HTML tags"
                    ],
        "answer":  0
    },
    {
        "q":  "Quick revision: \u0027Tag\u0027 is used for which task?",
        "source":  "Tag",
        "options":  [
                        "save simple data in browser",
                        "store key and value pairs",
                        "trigger action on click",
                        "mark and define HTML element"
                    ],
        "answer":  3
    },
    {
        "q":  "In WEB, what is the main use of \u0027Attribute\u0027?",
        "source":  "Attribute",
        "options":  [
                        "add extra settings to HTML tags",
                        "display image on webpage",
                        "save simple data in browser",
                        "create clickable links"
                    ],
        "answer":  0
    },
    {
        "q":  "Choose the correct meaning of \u0027Attribute\u0027 in WEB.",
        "source":  "Attribute",
        "options":  [
                        "apply styles colors and spacing",
                        "collect user input data",
                        "add extra settings to HTML tags",
                        "create row and column layout"
                    ],
        "answer":  2
    },
    {
        "q":  "For beginner students, \u0027Attribute\u0027 is used for:",
        "source":  "Attribute",
        "options":  [
                        "save simple data in browser",
                        "add extra settings to HTML tags",
                        "accept typed data from user",
                        "store key and value pairs"
                    ],
        "answer":  1
    },
    {
        "q":  "Which option best describes \u0027Attribute\u0027 in WEB course?",
        "source":  "Attribute",
        "options":  [
                        "define structure of webpage elements",
                        "add extra settings to HTML tags",
                        "store key and value pairs",
                        "represent webpage as programmable object model"
                    ],
        "answer":  1
    },
    {
        "q":  "Basic concept check: \u0027Attribute\u0027 helps to:",
        "source":  "Attribute",
        "options":  [
                        "create row and column layout",
                        "create clickable links",
                        "define structure of webpage elements",
                        "add extra settings to HTML tags"
                    ],
        "answer":  3
    },
    {
        "q":  "In practical class, \u0027Attribute\u0027 is mostly used to:",
        "source":  "Attribute",
        "options":  [
                        "align items in responsive layout",
                        "add extra settings to HTML tags",
                        "accept typed data from user",
                        "adapt layout to screen sizes"
                    ],
        "answer":  1
    },
    {
        "q":  "Student test: what does \u0027Attribute\u0027 mean in ",
        "source":  "Attribute",
        "options":  [
                        "mark and define HTML element",
                        "define structure of webpage elements",
                        "collect user input data",
                        "add extra settings to HTML tags"
                    ],
        "answer":  3
    },
    {
        "q":  "Select the right statement for \u0027Attribute\u0027 in this WEB exam.",
        "source":  "Attribute",
        "options":  [
                        "add extra settings to HTML tags",
                        "align items in responsive layout",
                        "display image on webpage",
                        "trigger action on click"
                    ],
        "answer":  0
    },
    {
        "q":  "\u0027WEB\u0027 topic \u0027Attribute\u0027 is related to:",
        "source":  "Attribute",
        "options":  [
                        "adapt layout to screen sizes",
                        "accept typed data from user",
                        "add extra settings to HTML tags",
                        "respond to user interaction"
                    ],
        "answer":  2
    },
    {
        "q":  "Quick revision: \u0027Attribute\u0027 is used for which task?",
        "source":  "Attribute",
        "options":  [
                        "add extra settings to HTML tags",
                        "adapt layout to screen sizes",
                        "save simple data in browser",
                        "apply styles colors and spacing"
                    ],
        "answer":  0
    },
    {
        "q":  "In WEB, what is the main use of \u0027Anchor Tag\u0027?",
        "source":  "Anchor Tag",
        "options":  [
                        "represent webpage as programmable object model",
                        "create clickable links",
                        "apply styles colors and spacing",
                        "store key and value pairs"
                    ],
        "answer":  1
    },
    {
        "q":  "Choose the correct meaning of \u0027Anchor Tag\u0027 in WEB.",
        "source":  "Anchor Tag",
        "options":  [
                        "reuse block of JavaScript code",
                        "create clickable links",
                        "define structure of webpage elements",
                        "accept typed data from user"
                    ],
        "answer":  1
    },
    {
        "q":  "For beginner students, \u0027Anchor Tag\u0027 is used for:",
        "source":  "Anchor Tag",
        "options":  [
                        "create row and column layout",
                        "create clickable links",
                        "store key and value pairs",
                        "apply styles colors and spacing"
                    ],
        "answer":  1
    },
    {
        "q":  "Which option best describes \u0027Anchor Tag\u0027 in WEB course?",
        "source":  "Anchor Tag",
        "options":  [
                        "add extra settings to HTML tags",
                        "adapt layout to screen sizes",
                        "store value for later use",
                        "create clickable links"
                    ],
        "answer":  3
    },
    {
        "q":  "Basic concept check: \u0027Anchor Tag\u0027 helps to:",
        "source":  "Anchor Tag",
        "options":  [
                        "create row and column layout",
                        "accept typed data from user",
                        "create clickable links",
                        "mark and define HTML element"
                    ],
        "answer":  2
    },
    {
        "q":  "In practical class, \u0027Anchor Tag\u0027 is mostly used to:",
        "source":  "Anchor Tag",
        "options":  [
                        "create clickable links",
                        "apply styles colors and spacing",
                        "define structure of webpage elements",
                        "align items in responsive layout"
                    ],
        "answer":  0
    },
    {
        "q":  "Student test: what does \u0027Anchor Tag\u0027 mean in ",
        "source":  "Anchor Tag",
        "options":  [
                        "create clickable links",
                        "store value for later use",
                        "reuse block of JavaScript code",
                        "store key and value pairs"
                    ],
        "answer":  0
    },
    {
        "q":  "Select the right statement for \u0027Anchor Tag\u0027 in this WEB exam.",
        "source":  "Anchor Tag",
        "options":  [
                        "create clickable links",
                        "apply styles colors and spacing",
                        "accept typed data from user",
                        "control behavior and page interaction"
                    ],
        "answer":  0
    },
    {
        "q":  "\u0027WEB\u0027 topic \u0027Anchor Tag\u0027 is related to:",
        "source":  "Anchor Tag",
        "options":  [
                        "mark and define HTML element",
                        "store key and value pairs",
                        "create clickable links",
                        "save simple data in browser"
                    ],
        "answer":  2
    },
    {
        "q":  "Quick revision: \u0027Anchor Tag\u0027 is used for which task?",
        "source":  "Anchor Tag",
        "options":  [
                        "save simple data in browser",
                        "adapt layout to screen sizes",
                        "store value for later use",
                        "create clickable links"
                    ],
        "answer":  3
    },
    {
        "q":  "In WEB, what is the main use of \u0027Image Tag\u0027?",
        "source":  "Image Tag",
        "options":  [
                        "display image on webpage",
                        "adapt layout to screen sizes",
                        "represent webpage as programmable object model",
                        "mark and define HTML element"
                    ],
        "answer":  0
    },
    {
        "q":  "Choose the correct meaning of \u0027Image Tag\u0027 in WEB.",
        "source":  "Image Tag",
        "options":  [
                        "add extra settings to HTML tags",
                        "control behavior and page interaction",
                        "adapt layout to screen sizes",
                        "display image on webpage"
                    ],
        "answer":  3
    },
    {
        "q":  "For beginner students, \u0027Image Tag\u0027 is used for:",
        "source":  "Image Tag",
        "options":  [
                        "trigger action on click",
                        "respond to user interaction",
                        "display image on webpage",
                        "control behavior and page interaction"
                    ],
        "answer":  2
    },
    {
        "q":  "Which option best describes \u0027Image Tag\u0027 in WEB course?",
        "source":  "Image Tag",
        "options":  [
                        "control behavior and page interaction",
                        "display image on webpage",
                        "accept typed data from user",
                        "align items in responsive layout"
                    ],
        "answer":  1
    },
    {
        "q":  "Basic concept check: \u0027Image Tag\u0027 helps to:",
        "source":  "Image Tag",
        "options":  [
                        "store key and value pairs",
                        "trigger action on click",
                        "reuse block of JavaScript code",
                        "display image on webpage"
                    ],
        "answer":  3
    },
    {
        "q":  "In practical class, \u0027Image Tag\u0027 is mostly used to:",
        "source":  "Image Tag",
        "options":  [
                        "define structure of webpage elements",
                        "display image on webpage",
                        "respond to user interaction",
                        "create row and column layout"
                    ],
        "answer":  1
    },
    {
        "q":  "Student test: what does \u0027Image Tag\u0027 mean in ",
        "source":  "Image Tag",
        "options":  [
                        "save simple data in browser",
                        "add extra settings to HTML tags",
                        "display image on webpage",
                        "apply styles colors and spacing"
                    ],
        "answer":  2
    },
    {
        "q":  "Select the right statement for \u0027Image Tag\u0027 in this WEB exam.",
        "source":  "Image Tag",
        "options":  [
                        "store value for later use",
                        "display image on webpage",
                        "control behavior and page interaction",
                        "hold ordered list of values"
                    ],
        "answer":  1
    },
    {
        "q":  "\u0027WEB\u0027 topic \u0027Image Tag\u0027 is related to:",
        "source":  "Image Tag",
        "options":  [
                        "display image on webpage",
                        "create clickable links",
                        "hold ordered list of values",
                        "respond to user interaction"
                    ],
        "answer":  0
    },
    {
        "q":  "Quick revision: \u0027Image Tag\u0027 is used for which task?",
        "source":  "Image Tag",
        "options":  [
                        "create clickable links",
                        "control behavior and page interaction",
                        "display image on webpage",
                        "store key and value pairs"
                    ],
        "answer":  2
    },
    {
        "q":  "In WEB, what is the main use of \u0027Form\u0027?",
        "source":  "Form",
        "options":  [
                        "accept typed data from user",
                        "hold ordered list of values",
                        "represent webpage as programmable object model",
                        "collect user input data"
                    ],
        "answer":  3
    },
    {
        "q":  "Choose the correct meaning of \u0027Form\u0027 in WEB.",
        "source":  "Form",
        "options":  [
                        "collect user input data",
                        "reuse block of JavaScript code",
                        "store value for later use",
                        "store key and value pairs"
                    ],
        "answer":  0
    },
    {
        "q":  "For beginner students, \u0027Form\u0027 is used for:",
        "source":  "Form",
        "options":  [
                        "collect user input data",
                        "adapt layout to screen sizes",
                        "apply styles colors and spacing",
                        "reuse block of JavaScript code"
                    ],
        "answer":  0
    },
    {
        "q":  "Which option best describes \u0027Form\u0027 in WEB course?",
        "source":  "Form",
        "options":  [
                        "collect user input data",
                        "control behavior and page interaction",
                        "store key and value pairs",
                        "reuse block of JavaScript code"
                    ],
        "answer":  0
    },
    {
        "q":  "Basic concept check: \u0027Form\u0027 helps to:",
        "source":  "Form",
        "options":  [
                        "adapt layout to screen sizes",
                        "collect user input data",
                        "trigger action on click",
                        "store key and value pairs"
                    ],
        "answer":  1
    },
    {
        "q":  "In practical class, \u0027Form\u0027 is mostly used to:",
        "source":  "Form",
        "options":  [
                        "align items in responsive layout",
                        "collect user input data",
                        "save simple data in browser",
                        "apply styles colors and spacing"
                    ],
        "answer":  1
    },
    {
        "q":  "Student test: what does \u0027Form\u0027 mean in ",
        "source":  "Form",
        "options":  [
                        "create row and column layout",
                        "define structure of webpage elements",
                        "store key and value pairs",
                        "collect user input data"
                    ],
        "answer":  3
    },
    {
        "q":  "Select the right statement for \u0027Form\u0027 in this WEB exam.",
        "source":  "Form",
        "options":  [
                        "collect user input data",
                        "store key and value pairs",
                        "hold ordered list of values",
                        "align items in responsive layout"
                    ],
        "answer":  0
    },
    {
        "q":  "\u0027WEB\u0027 topic \u0027Form\u0027 is related to:",
        "source":  "Form",
        "options":  [
                        "collect user input data",
                        "save simple data in browser",
                        "mark and define HTML element",
                        "store value for later use"
                    ],
        "answer":  0
    },
    {
        "q":  "Quick revision: \u0027Form\u0027 is used for which task?",
        "source":  "Form",
        "options":  [
                        "store key and value pairs",
                        "collect user input data",
                        "reuse block of JavaScript code",
                        "trigger action on click"
                    ],
        "answer":  1
    },
    {
        "q":  "In WEB, what is the main use of \u0027Input Field\u0027?",
        "source":  "Input Field",
        "options":  [
                        "accept typed data from user",
                        "align items in responsive layout",
                        "define structure of webpage elements",
                        "save simple data in browser"
                    ],
        "answer":  0
    },
    {
        "q":  "Choose the correct meaning of \u0027Input Field\u0027 in WEB.",
        "source":  "Input Field",
        "options":  [
                        "store value for later use",
                        "accept typed data from user",
                        "create row and column layout",
                        "represent webpage as programmable object model"
                    ],
        "answer":  1
    },
    {
        "q":  "For beginner students, \u0027Input Field\u0027 is used for:",
        "source":  "Input Field",
        "options":  [
                        "represent webpage as programmable object model",
                        "accept typed data from user",
                        "trigger action on click",
                        "apply styles colors and spacing"
                    ],
        "answer":  1
    },
    {
        "q":  "Which option best describes \u0027Input Field\u0027 in WEB course?",
        "source":  "Input Field",
        "options":  [
                        "accept typed data from user",
                        "control behavior and page interaction",
                        "mark and define HTML element",
                        "hold ordered list of values"
                    ],
        "answer":  0
    },
    {
        "q":  "Basic concept check: \u0027Input Field\u0027 helps to:",
        "source":  "Input Field",
        "options":  [
                        "save simple data in browser",
                        "display image on webpage",
                        "accept typed data from user",
                        "define structure of webpage elements"
                    ],
        "answer":  2
    },
    {
        "q":  "In practical class, \u0027Input Field\u0027 is mostly used to:",
        "source":  "Input Field",
        "options":  [
                        "reuse block of JavaScript code",
                        "create row and column layout",
                        "represent webpage as programmable object model",
                        "accept typed data from user"
                    ],
        "answer":  3
    },
    {
        "q":  "Student test: what does \u0027Input Field\u0027 mean in ",
        "source":  "Input Field",
        "options":  [
                        "add extra settings to HTML tags",
                        "apply styles colors and spacing",
                        "hold ordered list of values",
                        "accept typed data from user"
                    ],
        "answer":  3
    },
    {
        "q":  "Select the right statement for \u0027Input Field\u0027 in this WEB exam.",
        "source":  "Input Field",
        "options":  [
                        "apply styles colors and spacing",
                        "control behavior and page interaction",
                        "accept typed data from user",
                        "align items in responsive layout"
                    ],
        "answer":  2
    },
    {
        "q":  "\u0027WEB\u0027 topic \u0027Input Field\u0027 is related to:",
        "source":  "Input Field",
        "options":  [
                        "create row and column layout",
                        "respond to user interaction",
                        "accept typed data from user",
                        "collect user input data"
                    ],
        "answer":  2
    },
    {
        "q":  "Quick revision: \u0027Input Field\u0027 is used for which task?",
        "source":  "Input Field",
        "options":  [
                        "control behavior and page interaction",
                        "accept typed data from user",
                        "hold ordered list of values",
                        "collect user input data"
                    ],
        "answer":  1
    },
    {
        "q":  "In WEB, what is the main use of \u0027Button\u0027?",
        "source":  "Button",
        "options":  [
                        "trigger action on click",
                        "display image on webpage",
                        "create row and column layout",
                        "save simple data in browser"
                    ],
        "answer":  0
    },
    {
        "q":  "Choose the correct meaning of \u0027Button\u0027 in WEB.",
        "source":  "Button",
        "options":  [
                        "trigger action on click",
                        "respond to user interaction",
                        "store key and value pairs",
                        "create row and column layout"
                    ],
        "answer":  0
    },
    {
        "q":  "For beginner students, \u0027Button\u0027 is used for:",
        "source":  "Button",
        "options":  [
                        "represent webpage as programmable object model",
                        "trigger action on click",
                        "save simple data in browser",
                        "collect user input data"
                    ],
        "answer":  1
    },
    {
        "q":  "Which option best describes \u0027Button\u0027 in WEB course?",
        "source":  "Button",
        "options":  [
                        "apply styles colors and spacing",
                        "trigger action on click",
                        "represent webpage as programmable object model",
                        "reuse block of JavaScript code"
                    ],
        "answer":  1
    },
    {
        "q":  "Basic concept check: \u0027Button\u0027 helps to:",
        "source":  "Button",
        "options":  [
                        "trigger action on click",
                        "store key and value pairs",
                        "align items in responsive layout",
                        "respond to user interaction"
                    ],
        "answer":  0
    },
    {
        "q":  "In practical class, \u0027Button\u0027 is mostly used to:",
        "source":  "Button",
        "options":  [
                        "respond to user interaction",
                        "apply styles colors and spacing",
                        "trigger action on click",
                        "collect user input data"
                    ],
        "answer":  2
    },
    {
        "q":  "Student test: what does \u0027Button\u0027 mean in ",
        "source":  "Button",
        "options":  [
                        "apply styles colors and spacing",
                        "trigger action on click",
                        "accept typed data from user",
                        "hold ordered list of values"
                    ],
        "answer":  1
    },
    {
        "q":  "Select the right statement for \u0027Button\u0027 in this WEB exam.",
        "source":  "Button",
        "options":  [
                        "mark and define HTML element",
                        "control behavior and page interaction",
                        "respond to user interaction",
                        "trigger action on click"
                    ],
        "answer":  3
    },
    {
        "q":  "\u0027WEB\u0027 topic \u0027Button\u0027 is related to:",
        "source":  "Button",
        "options":  [
                        "define structure of webpage elements",
                        "add extra settings to HTML tags",
                        "create row and column layout",
                        "trigger action on click"
                    ],
        "answer":  3
    },
    {
        "q":  "Quick revision: \u0027Button\u0027 is used for which task?",
        "source":  "Button",
        "options":  [
                        "trigger action on click",
                        "store value for later use",
                        "respond to user interaction",
                        "collect user input data"
                    ],
        "answer":  0
    },
    {
        "q":  "In WEB, what is the main use of \u0027DOM\u0027?",
        "source":  "DOM",
        "options":  [
                        "collect user input data",
                        "save simple data in browser",
                        "store value for later use",
                        "represent webpage as programmable object model"
                    ],
        "answer":  3
    },
    {
        "q":  "Choose the correct meaning of \u0027DOM\u0027 in WEB.",
        "source":  "DOM",
        "options":  [
                        "hold ordered list of values",
                        "save simple data in browser",
                        "accept typed data from user",
                        "represent webpage as programmable object model"
                    ],
        "answer":  3
    },
    {
        "q":  "For beginner students, \u0027DOM\u0027 is used for:",
        "source":  "DOM",
        "options":  [
                        "create row and column layout",
                        "represent webpage as programmable object model",
                        "store value for later use",
                        "store key and value pairs"
                    ],
        "answer":  1
    },
    {
        "q":  "Which option best describes \u0027DOM\u0027 in WEB course?",
        "source":  "DOM",
        "options":  [
                        "store key and value pairs",
                        "represent webpage as programmable object model",
                        "add extra settings to HTML tags",
                        "accept typed data from user"
                    ],
        "answer":  1
    },
    {
        "q":  "Basic concept check: \u0027DOM\u0027 helps to:",
        "source":  "DOM",
        "options":  [
                        "create row and column layout",
                        "respond to user interaction",
                        "represent webpage as programmable object model",
                        "apply styles colors and spacing"
                    ],
        "answer":  2
    },
    {
        "q":  "In practical class, \u0027DOM\u0027 is mostly used to:",
        "source":  "DOM",
        "options":  [
                        "hold ordered list of values",
                        "respond to user interaction",
                        "align items in responsive layout",
                        "represent webpage as programmable object model"
                    ],
        "answer":  3
    },
    {
        "q":  "Student test: what does \u0027DOM\u0027 mean in ",
        "source":  "DOM",
        "options":  [
                        "represent webpage as programmable object model",
                        "reuse block of JavaScript code",
                        "display image on webpage",
                        "store value for later use"
                    ],
        "answer":  0
    },
    {
        "q":  "Select the right statement for \u0027DOM\u0027 in this WEB exam.",
        "source":  "DOM",
        "options":  [
                        "control behavior and page interaction",
                        "respond to user interaction",
                        "accept typed data from user",
                        "represent webpage as programmable object model"
                    ],
        "answer":  3
    },
    {
        "q":  "\u0027WEB\u0027 topic \u0027DOM\u0027 is related to:",
        "source":  "DOM",
        "options":  [
                        "adapt layout to screen sizes",
                        "represent webpage as programmable object model",
                        "accept typed data from user",
                        "store key and value pairs"
                    ],
        "answer":  1
    },
    {
        "q":  "Quick revision: \u0027DOM\u0027 is used for which task?",
        "source":  "DOM",
        "options":  [
                        "represent webpage as programmable object model",
                        "store value for later use",
                        "display image on webpage",
                        "hold ordered list of values"
                    ],
        "answer":  0
    },
    {
        "q":  "In WEB, what is the main use of \u0027Event\u0027?",
        "source":  "Event",
        "options":  [
                        "save simple data in browser",
                        "store value for later use",
                        "respond to user interaction",
                        "apply styles colors and spacing"
                    ],
        "answer":  2
    },
    {
        "q":  "Choose the correct meaning of \u0027Event\u0027 in WEB.",
        "source":  "Event",
        "options":  [
                        "align items in responsive layout",
                        "respond to user interaction",
                        "create row and column layout",
                        "mark and define HTML element"
                    ],
        "answer":  1
    },
    {
        "q":  "For beginner students, \u0027Event\u0027 is used for:",
        "source":  "Event",
        "options":  [
                        "create clickable links",
                        "adapt layout to screen sizes",
                        "respond to user interaction",
                        "store key and value pairs"
                    ],
        "answer":  2
    },
    {
        "q":  "Which option best describes \u0027Event\u0027 in WEB course?",
        "source":  "Event",
        "options":  [
                        "reuse block of JavaScript code",
                        "respond to user interaction",
                        "mark and define HTML element",
                        "align items in responsive layout"
                    ],
        "answer":  1
    },
    {
        "q":  "Basic concept check: \u0027Event\u0027 helps to:",
        "source":  "Event",
        "options":  [
                        "trigger action on click",
                        "create row and column layout",
                        "respond to user interaction",
                        "adapt layout to screen sizes"
                    ],
        "answer":  2
    },
    {
        "q":  "In practical class, \u0027Event\u0027 is mostly used to:",
        "source":  "Event",
        "options":  [
                        "display image on webpage",
                        "add extra settings to HTML tags",
                        "respond to user interaction",
                        "represent webpage as programmable object model"
                    ],
        "answer":  2
    },
    {
        "q":  "Student test: what does \u0027Event\u0027 mean in ",
        "source":  "Event",
        "options":  [
                        "represent webpage as programmable object model",
                        "respond to user interaction",
                        "reuse block of JavaScript code",
                        "store value for later use"
                    ],
        "answer":  1
    },
    {
        "q":  "Select the right statement for \u0027Event\u0027 in this WEB exam.",
        "source":  "Event",
        "options":  [
                        "reuse block of JavaScript code",
                        "store value for later use",
                        "respond to user interaction",
                        "mark and define HTML element"
                    ],
        "answer":  2
    },
    {
        "q":  "\u0027WEB\u0027 topic \u0027Event\u0027 is related to:",
        "source":  "Event",
        "options":  [
                        "store key and value pairs",
                        "mark and define HTML element",
                        "respond to user interaction",
                        "trigger action on click"
                    ],
        "answer":  2
    },
    {
        "q":  "Quick revision: \u0027Event\u0027 is used for which task?",
        "source":  "Event",
        "options":  [
                        "store key and value pairs",
                        "respond to user interaction",
                        "hold ordered list of values",
                        "save simple data in browser"
                    ],
        "answer":  1
    },
    {
        "q":  "In WEB, what is the main use of \u0027Function\u0027?",
        "source":  "Function",
        "options":  [
                        "display image on webpage",
                        "reuse block of JavaScript code",
                        "save simple data in browser",
                        "apply styles colors and spacing"
                    ],
        "answer":  1
    },
    {
        "q":  "Choose the correct meaning of \u0027Function\u0027 in WEB.",
        "source":  "Function",
        "options":  [
                        "respond to user interaction",
                        "reuse block of JavaScript code",
                        "represent webpage as programmable object model",
                        "create clickable links"
                    ],
        "answer":  1
    },
    {
        "q":  "For beginner students, \u0027Function\u0027 is used for:",
        "source":  "Function",
        "options":  [
                        "store value for later use",
                        "apply styles colors and spacing",
                        "adapt layout to screen sizes",
                        "reuse block of JavaScript code"
                    ],
        "answer":  3
    },
    {
        "q":  "Which option best describes \u0027Function\u0027 in WEB course?",
        "source":  "Function",
        "options":  [
                        "add extra settings to HTML tags",
                        "reuse block of JavaScript code",
                        "display image on webpage",
                        "store value for later use"
                    ],
        "answer":  1
    },
    {
        "q":  "Basic concept check: \u0027Function\u0027 helps to:",
        "source":  "Function",
        "options":  [
                        "reuse block of JavaScript code",
                        "store key and value pairs",
                        "accept typed data from user",
                        "collect user input data"
                    ],
        "answer":  0
    },
    {
        "q":  "In practical class, \u0027Function\u0027 is mostly used to:",
        "source":  "Function",
        "options":  [
                        "reuse block of JavaScript code",
                        "align items in responsive layout",
                        "add extra settings to HTML tags",
                        "display image on webpage"
                    ],
        "answer":  0
    },
    {
        "q":  "Student test: what does \u0027Function\u0027 mean in ",
        "source":  "Function",
        "options":  [
                        "add extra settings to HTML tags",
                        "control behavior and page interaction",
                        "reuse block of JavaScript code",
                        "align items in responsive layout"
                    ],
        "answer":  2
    },
    {
        "q":  "Select the right statement for \u0027Function\u0027 in this WEB exam.",
        "source":  "Function",
        "options":  [
                        "reuse block of JavaScript code",
                        "represent webpage as programmable object model",
                        "control behavior and page interaction",
                        "store value for later use"
                    ],
        "answer":  0
    },
    {
        "q":  "\u0027WEB\u0027 topic \u0027Function\u0027 is related to:",
        "source":  "Function",
        "options":  [
                        "align items in responsive layout",
                        "trigger action on click",
                        "reuse block of JavaScript code",
                        "save simple data in browser"
                    ],
        "answer":  2
    },
    {
        "q":  "Quick revision: \u0027Function\u0027 is used for which task?",
        "source":  "Function",
        "options":  [
                        "store key and value pairs",
                        "define structure of webpage elements",
                        "create clickable links",
                        "reuse block of JavaScript code"
                    ],
        "answer":  3
    },
    {
        "q":  "In WEB, what is the main use of \u0027Variable\u0027?",
        "source":  "Variable",
        "options":  [
                        "represent webpage as programmable object model",
                        "define structure of webpage elements",
                        "store value for later use",
                        "store key and value pairs"
                    ],
        "answer":  2
    },
    {
        "q":  "Choose the correct meaning of \u0027Variable\u0027 in WEB.",
        "source":  "Variable",
        "options":  [
                        "create clickable links",
                        "store value for later use",
                        "display image on webpage",
                        "collect user input data"
                    ],
        "answer":  1
    },
    {
        "q":  "For beginner students, \u0027Variable\u0027 is used for:",
        "source":  "Variable",
        "options":  [
                        "represent webpage as programmable object model",
                        "save simple data in browser",
                        "add extra settings to HTML tags",
                        "store value for later use"
                    ],
        "answer":  3
    },
    {
        "q":  "Which option best describes \u0027Variable\u0027 in WEB course?",
        "source":  "Variable",
        "options":  [
                        "control behavior and page interaction",
                        "store value for later use",
                        "respond to user interaction",
                        "trigger action on click"
                    ],
        "answer":  1
    },
    {
        "q":  "Basic concept check: \u0027Variable\u0027 helps to:",
        "source":  "Variable",
        "options":  [
                        "control behavior and page interaction",
                        "accept typed data from user",
                        "hold ordered list of values",
                        "store value for later use"
                    ],
        "answer":  3
    },
    {
        "q":  "In practical class, \u0027Variable\u0027 is mostly used to:",
        "source":  "Variable",
        "options":  [
                        "store value for later use",
                        "accept typed data from user",
                        "add extra settings to HTML tags",
                        "mark and define HTML element"
                    ],
        "answer":  0
    },
    {
        "q":  "Student test: what does \u0027Variable\u0027 mean in ",
        "source":  "Variable",
        "options":  [
                        "represent webpage as programmable object model",
                        "store value for later use",
                        "create row and column layout",
                        "trigger action on click"
                    ],
        "answer":  1
    },
    {
        "q":  "Select the right statement for \u0027Variable\u0027 in this WEB exam.",
        "source":  "Variable",
        "options":  [
                        "store value for later use",
                        "control behavior and page interaction",
                        "create row and column layout",
                        "hold ordered list of values"
                    ],
        "answer":  0
    },
    {
        "q":  "\u0027WEB\u0027 topic \u0027Variable\u0027 is related to:",
        "source":  "Variable",
        "options":  [
                        "mark and define HTML element",
                        "reuse block of JavaScript code",
                        "store value for later use",
                        "apply styles colors and spacing"
                    ],
        "answer":  2
    },
    {
        "q":  "Quick revision: \u0027Variable\u0027 is used for which task?",
        "source":  "Variable",
        "options":  [
                        "save simple data in browser",
                        "add extra settings to HTML tags",
                        "store value for later use",
                        "trigger action on click"
                    ],
        "answer":  2
    },
    {
        "q":  "In WEB, what is the main use of \u0027Array\u0027?",
        "source":  "Array",
        "options":  [
                        "control behavior and page interaction",
                        "hold ordered list of values",
                        "mark and define HTML element",
                        "define structure of webpage elements"
                    ],
        "answer":  1
    },
    {
        "q":  "Choose the correct meaning of \u0027Array\u0027 in WEB.",
        "source":  "Array",
        "options":  [
                        "hold ordered list of values",
                        "define structure of webpage elements",
                        "apply styles colors and spacing",
                        "accept typed data from user"
                    ],
        "answer":  0
    },
    {
        "q":  "For beginner students, \u0027Array\u0027 is used for:",
        "source":  "Array",
        "options":  [
                        "control behavior and page interaction",
                        "create clickable links",
                        "display image on webpage",
                        "hold ordered list of values"
                    ],
        "answer":  3
    },
    {
        "q":  "Which option best describes \u0027Array\u0027 in WEB course?",
        "source":  "Array",
        "options":  [
                        "hold ordered list of values",
                        "define structure of webpage elements",
                        "represent webpage as programmable object model",
                        "accept typed data from user"
                    ],
        "answer":  0
    },
    {
        "q":  "Basic concept check: \u0027Array\u0027 helps to:",
        "source":  "Array",
        "options":  [
                        "hold ordered list of values",
                        "represent webpage as programmable object model",
                        "adapt layout to screen sizes",
                        "add extra settings to HTML tags"
                    ],
        "answer":  0
    },
    {
        "q":  "In practical class, \u0027Array\u0027 is mostly used to:",
        "source":  "Array",
        "options":  [
                        "define structure of webpage elements",
                        "hold ordered list of values",
                        "create row and column layout",
                        "adapt layout to screen sizes"
                    ],
        "answer":  1
    },
    {
        "q":  "Student test: what does \u0027Array\u0027 mean in ",
        "source":  "Array",
        "options":  [
                        "hold ordered list of values",
                        "display image on webpage",
                        "create row and column layout",
                        "align items in responsive layout"
                    ],
        "answer":  0
    },
    {
        "q":  "Select the right statement for \u0027Array\u0027 in this WEB exam.",
        "source":  "Array",
        "options":  [
                        "create row and column layout",
                        "apply styles colors and spacing",
                        "add extra settings to HTML tags",
                        "hold ordered list of values"
                    ],
        "answer":  3
    },
    {
        "q":  "\u0027WEB\u0027 topic \u0027Array\u0027 is related to:",
        "source":  "Array",
        "options":  [
                        "hold ordered list of values",
                        "align items in responsive layout",
                        "define structure of webpage elements",
                        "adapt layout to screen sizes"
                    ],
        "answer":  0
    },
    {
        "q":  "Quick revision: \u0027Array\u0027 is used for which task?",
        "source":  "Array",
        "options":  [
                        "display image on webpage",
                        "hold ordered list of values",
                        "add extra settings to HTML tags",
                        "store key and value pairs"
                    ],
        "answer":  1
    },
    {
        "q":  "In WEB, what is the main use of \u0027Object\u0027?",
        "source":  "Object",
        "options":  [
                        "store key and value pairs",
                        "trigger action on click",
                        "define structure of webpage elements",
                        "hold ordered list of values"
                    ],
        "answer":  0
    },
    {
        "q":  "Choose the correct meaning of \u0027Object\u0027 in WEB.",
        "source":  "Object",
        "options":  [
                        "define structure of webpage elements",
                        "store value for later use",
                        "store key and value pairs",
                        "respond to user interaction"
                    ],
        "answer":  2
    },
    {
        "q":  "For beginner students, \u0027Object\u0027 is used for:",
        "source":  "Object",
        "options":  [
                        "align items in responsive layout",
                        "add extra settings to HTML tags",
                        "store key and value pairs",
                        "hold ordered list of values"
                    ],
        "answer":  2
    },
    {
        "q":  "Which option best describes \u0027Object\u0027 in WEB course?",
        "source":  "Object",
        "options":  [
                        "apply styles colors and spacing",
                        "reuse block of JavaScript code",
                        "store key and value pairs",
                        "hold ordered list of values"
                    ],
        "answer":  2
    },
    {
        "q":  "Basic concept check: \u0027Object\u0027 helps to:",
        "source":  "Object",
        "options":  [
                        "save simple data in browser",
                        "create clickable links",
                        "accept typed data from user",
                        "store key and value pairs"
                    ],
        "answer":  3
    },
    {
        "q":  "In practical class, \u0027Object\u0027 is mostly used to:",
        "source":  "Object",
        "options":  [
                        "save simple data in browser",
                        "trigger action on click",
                        "define structure of webpage elements",
                        "store key and value pairs"
                    ],
        "answer":  3
    },
    {
        "q":  "Student test: what does \u0027Object\u0027 mean in ",
        "source":  "Object",
        "options":  [
                        "display image on webpage",
                        "store value for later use",
                        "store key and value pairs",
                        "accept typed data from user"
                    ],
        "answer":  2
    },
    {
        "q":  "Select the right statement for \u0027Object\u0027 in this WEB exam.",
        "source":  "Object",
        "options":  [
                        "store key and value pairs",
                        "define structure of webpage elements",
                        "hold ordered list of values",
                        "mark and define HTML element"
                    ],
        "answer":  0
    },
    {
        "q":  "\u0027WEB\u0027 topic \u0027Object\u0027 is related to:",
        "source":  "Object",
        "options":  [
                        "define structure of webpage elements",
                        "store key and value pairs",
                        "represent webpage as programmable object model",
                        "align items in responsive layout"
                    ],
        "answer":  1
    },
    {
        "q":  "Quick revision: \u0027Object\u0027 is used for which task?",
        "source":  "Object",
        "options":  [
                        "accept typed data from user",
                        "store key and value pairs",
                        "adapt layout to screen sizes",
                        "apply styles colors and spacing"
                    ],
        "answer":  1
    },
    {
        "q":  "In WEB, what is the main use of \u0027Flexbox\u0027?",
        "source":  "Flexbox",
        "options":  [
                        "align items in responsive layout",
                        "adapt layout to screen sizes",
                        "apply styles colors and spacing",
                        "add extra settings to HTML tags"
                    ],
        "answer":  0
    },
    {
        "q":  "Choose the correct meaning of \u0027Flexbox\u0027 in WEB.",
        "source":  "Flexbox",
        "options":  [
                        "control behavior and page interaction",
                        "apply styles colors and spacing",
                        "align items in responsive layout",
                        "collect user input data"
                    ],
        "answer":  2
    },
    {
        "q":  "For beginner students, \u0027Flexbox\u0027 is used for:",
        "source":  "Flexbox",
        "options":  [
                        "accept typed data from user",
                        "create clickable links",
                        "align items in responsive layout",
                        "store value for later use"
                    ],
        "answer":  2
    },
    {
        "q":  "Which option best describes \u0027Flexbox\u0027 in WEB course?",
        "source":  "Flexbox",
        "options":  [
                        "display image on webpage",
                        "represent webpage as programmable object model",
                        "align items in responsive layout",
                        "collect user input data"
                    ],
        "answer":  2
    },
    {
        "q":  "Basic concept check: \u0027Flexbox\u0027 helps to:",
        "source":  "Flexbox",
        "options":  [
                        "store key and value pairs",
                        "align items in responsive layout",
                        "accept typed data from user",
                        "control behavior and page interaction"
                    ],
        "answer":  1
    },
    {
        "q":  "In practical class, \u0027Flexbox\u0027 is mostly used to:",
        "source":  "Flexbox",
        "options":  [
                        "align items in responsive layout",
                        "define structure of webpage elements",
                        "create row and column layout",
                        "respond to user interaction"
                    ],
        "answer":  0
    },
    {
        "q":  "Student test: what does \u0027Flexbox\u0027 mean in ",
        "source":  "Flexbox",
        "options":  [
                        "control behavior and page interaction",
                        "align items in responsive layout",
                        "adapt layout to screen sizes",
                        "trigger action on click"
                    ],
        "answer":  1
    },
    {
        "q":  "Select the right statement for \u0027Flexbox\u0027 in this WEB exam.",
        "source":  "Flexbox",
        "options":  [
                        "add extra settings to HTML tags",
                        "align items in responsive layout",
                        "hold ordered list of values",
                        "represent webpage as programmable object model"
                    ],
        "answer":  1
    },
    {
        "q":  "\u0027WEB\u0027 topic \u0027Flexbox\u0027 is related to:",
        "source":  "Flexbox",
        "options":  [
                        "align items in responsive layout",
                        "apply styles colors and spacing",
                        "store key and value pairs",
                        "reuse block of JavaScript code"
                    ],
        "answer":  0
    },
    {
        "q":  "Quick revision: \u0027Flexbox\u0027 is used for which task?",
        "source":  "Flexbox",
        "options":  [
                        "align items in responsive layout",
                        "store key and value pairs",
                        "apply styles colors and spacing",
                        "control behavior and page interaction"
                    ],
        "answer":  0
    },
    {
        "q":  "In WEB, what is the main use of \u0027Grid\u0027?",
        "source":  "Grid",
        "options":  [
                        "create row and column layout",
                        "store value for later use",
                        "collect user input data",
                        "trigger action on click"
                    ],
        "answer":  0
    },
    {
        "q":  "Choose the correct meaning of \u0027Grid\u0027 in WEB.",
        "source":  "Grid",
        "options":  [
                        "save simple data in browser",
                        "store key and value pairs",
                        "create row and column layout",
                        "align items in responsive layout"
                    ],
        "answer":  2
    },
    {
        "q":  "For beginner students, \u0027Grid\u0027 is used for:",
        "source":  "Grid",
        "options":  [
                        "store key and value pairs",
                        "hold ordered list of values",
                        "collect user input data",
                        "create row and column layout"
                    ],
        "answer":  3
    },
    {
        "q":  "Which option best describes \u0027Grid\u0027 in WEB course?",
        "source":  "Grid",
        "options":  [
                        "apply styles colors and spacing",
                        "trigger action on click",
                        "create row and column layout",
                        "reuse block of JavaScript code"
                    ],
        "answer":  2
    },
    {
        "q":  "Basic concept check: \u0027Grid\u0027 helps to:",
        "source":  "Grid",
        "options":  [
                        "create clickable links",
                        "adapt layout to screen sizes",
                        "create row and column layout",
                        "store value for later use"
                    ],
        "answer":  2
    },
    {
        "q":  "In practical class, \u0027Grid\u0027 is mostly used to:",
        "source":  "Grid",
        "options":  [
                        "store value for later use",
                        "create row and column layout",
                        "adapt layout to screen sizes",
                        "create clickable links"
                    ],
        "answer":  1
    },
    {
        "q":  "Student test: what does \u0027Grid\u0027 mean in ",
        "source":  "Grid",
        "options":  [
                        "apply styles colors and spacing",
                        "store key and value pairs",
                        "trigger action on click",
                        "create row and column layout"
                    ],
        "answer":  3
    },
    {
        "q":  "Select the right statement for \u0027Grid\u0027 in this WEB exam.",
        "source":  "Grid",
        "options":  [
                        "collect user input data",
                        "create clickable links",
                        "accept typed data from user",
                        "create row and column layout"
                    ],
        "answer":  3
    },
    {
        "q":  "\u0027WEB\u0027 topic \u0027Grid\u0027 is related to:",
        "source":  "Grid",
        "options":  [
                        "create row and column layout",
                        "reuse block of JavaScript code",
                        "accept typed data from user",
                        "store key and value pairs"
                    ],
        "answer":  0
    },
    {
        "q":  "Quick revision: \u0027Grid\u0027 is used for which task?",
        "source":  "Grid",
        "options":  [
                        "display image on webpage",
                        "create row and column layout",
                        "accept typed data from user",
                        "align items in responsive layout"
                    ],
        "answer":  1
    },
    {
        "q":  "In WEB, what is the main use of \u0027Responsive Design\u0027?",
        "source":  "Responsive Design",
        "options":  [
                        "trigger action on click",
                        "adapt layout to screen sizes",
                        "store key and value pairs",
                        "add extra settings to HTML tags"
                    ],
        "answer":  1
    },
    {
        "q":  "Choose the correct meaning of \u0027Responsive Design\u0027 in WEB.",
        "source":  "Responsive Design",
        "options":  [
                        "collect user input data",
                        "align items in responsive layout",
                        "adapt layout to screen sizes",
                        "display image on webpage"
                    ],
        "answer":  2
    },
    {
        "q":  "For beginner students, \u0027Responsive Design\u0027 is used for:",
        "source":  "Responsive Design",
        "options":  [
                        "adapt layout to screen sizes",
                        "display image on webpage",
                        "define structure of webpage elements",
                        "align items in responsive layout"
                    ],
        "answer":  0
    },
    {
        "q":  "Which option best describes \u0027Responsive Design\u0027 in WEB course?",
        "source":  "Responsive Design",
        "options":  [
                        "adapt layout to screen sizes",
                        "control behavior and page interaction",
                        "represent webpage as programmable object model",
                        "store value for later use"
                    ],
        "answer":  0
    },
    {
        "q":  "Basic concept check: \u0027Responsive Design\u0027 helps to:",
        "source":  "Responsive Design",
        "options":  [
                        "store value for later use",
                        "control behavior and page interaction",
                        "align items in responsive layout",
                        "adapt layout to screen sizes"
                    ],
        "answer":  3
    },
    {
        "q":  "In practical class, \u0027Responsive Design\u0027 is mostly used to:",
        "source":  "Responsive Design",
        "options":  [
                        "collect user input data",
                        "trigger action on click",
                        "display image on webpage",
                        "adapt layout to screen sizes"
                    ],
        "answer":  3
    },
    {
        "q":  "Student test: what does \u0027Responsive Design\u0027 mean in ",
        "source":  "Responsive Design",
        "options":  [
                        "adapt layout to screen sizes",
                        "create row and column layout",
                        "collect user input data",
                        "reuse block of JavaScript code"
                    ],
        "answer":  0
    },
    {
        "q":  "Select the right statement for \u0027Responsive Design\u0027 in this WEB exam.",
        "source":  "Responsive Design",
        "options":  [
                        "adapt layout to screen sizes",
                        "represent webpage as programmable object model",
                        "hold ordered list of values",
                        "display image on webpage"
                    ],
        "answer":  0
    },
    {
        "q":  "\u0027WEB\u0027 topic \u0027Responsive Design\u0027 is related to:",
        "source":  "Responsive Design",
        "options":  [
                        "create clickable links",
                        "adapt layout to screen sizes",
                        "respond to user interaction",
                        "trigger action on click"
                    ],
        "answer":  1
    },
    {
        "q":  "Quick revision: \u0027Responsive Design\u0027 is used for which task?",
        "source":  "Responsive Design",
        "options":  [
                        "represent webpage as programmable object model",
                        "collect user input data",
                        "respond to user interaction",
                        "adapt layout to screen sizes"
                    ],
        "answer":  3
    },
    {
        "q":  "In WEB, what is the main use of \u0027Local Storage\u0027?",
        "source":  "Local Storage",
        "options":  [
                        "align items in responsive layout",
                        "save simple data in browser",
                        "store value for later use",
                        "apply styles colors and spacing"
                    ],
        "answer":  1
    },
    {
        "q":  "Choose the correct meaning of \u0027Local Storage\u0027 in WEB.",
        "source":  "Local Storage",
        "options":  [
                        "store value for later use",
                        "display image on webpage",
                        "define structure of webpage elements",
                        "save simple data in browser"
                    ],
        "answer":  3
    },
    {
        "q":  "For beginner students, \u0027Local Storage\u0027 is used for:",
        "source":  "Local Storage",
        "options":  [
                        "trigger action on click",
                        "display image on webpage",
                        "accept typed data from user",
                        "save simple data in browser"
                    ],
        "answer":  3
    },
    {
        "q":  "Which option best describes \u0027Local Storage\u0027 in WEB course?",
        "source":  "Local Storage",
        "options":  [
                        "adapt layout to screen sizes",
                        "save simple data in browser",
                        "store value for later use",
                        "hold ordered list of values"
                    ],
        "answer":  1
    },
    {
        "q":  "Basic concept check: \u0027Local Storage\u0027 helps to:",
        "source":  "Local Storage",
        "options":  [
                        "define structure of webpage elements",
                        "save simple data in browser",
                        "adapt layout to screen sizes",
                        "represent webpage as programmable object model"
                    ],
        "answer":  1
    },
    {
        "q":  "In practical class, \u0027Local Storage\u0027 is mostly used to:",
        "source":  "Local Storage",
        "options":  [
                        "store key and value pairs",
                        "save simple data in browser",
                        "represent webpage as programmable object model",
                        "control behavior and page interaction"
                    ],
        "answer":  1
    },
    {
        "q":  "Student test: what does \u0027Local Storage\u0027 mean in ",
        "source":  "Local Storage",
        "options":  [
                        "save simple data in browser",
                        "display image on webpage",
                        "collect user input data",
                        "reuse block of JavaScript code"
                    ],
        "answer":  0
    },
    {
        "q":  "Select the right statement for \u0027Local Storage\u0027 in this WEB exam.",
        "source":  "Local Storage",
        "options":  [
                        "represent webpage as programmable object model",
                        "create row and column layout",
                        "adapt layout to screen sizes",
                        "save simple data in browser"
                    ],
        "answer":  3
    },
    {
        "q":  "\u0027WEB\u0027 topic \u0027Local Storage\u0027 is related to:",
        "source":  "Local Storage",
        "options":  [
                        "create row and column layout",
                        "align items in responsive layout",
                        "control behavior and page interaction",
                        "save simple data in browser"
                    ],
        "answer":  3
    },
    {
        "q":  "Quick revision: \u0027Local Storage\u0027 is used for which task?",
        "source":  "Local Storage",
        "options":  [
                        "save simple data in browser",
                        "define structure of webpage elements",
                        "trigger action on click",
                        "adapt layout to screen sizes"
                    ],
        "answer":  0
    }
];

  window.IGCIM_QUESTION_BANKS = window.IGCIM_QUESTION_BANKS || {};
  window.IGCIM_QUESTION_BANKS.WEB = webQuestions;
})();

