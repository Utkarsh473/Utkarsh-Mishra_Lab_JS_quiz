// 1. Questions should load in the display area (Initially, the first question should get loaded with corresponding options)
// 2. As soon as the user clicks an option (click event), 
// next question should load up.If that was the last question, score should be displayed in percentage
// 3. The option entered should be matched against the correct option and score should be updated. 
// 4. Functions used --> loadQuestion(),

// initialize global variables
let question = document.getElementById("question-text");
let options = Array.from(document.getElementsByClassName("button"));
let index = 0;
let score = 0;

// initialize the set of questions
let questionSet = [
    {
        "questionIndex": 1,
        "questionText": "JavaScript supports",
        "options": ["Functions", "XHMTL", "CSS", "HTML"],
        "correctAnswer": "Functions"
    },
    {
        "questionIndex": 2,
        "questionText": "Which language is used for styling web pages?",
        "options": ["HTML", "JQeury", "CSS", "XML"],
        "correctAnswer": "CSS"
    },
    {
        "questionIndex": 3,
        "questionText": "Which is not a JavaScript framework",
        "options": ["Python Script", "JQuery", "Django", "NodeJS"],
        "correctAnswer": "Django"
    },
    {
        "questionIndex": 4,
        "questionText": "Which language is used to connect to database?",
        "options": ["PHP", "HTML", "JS", "ALL"],
        "correctAnswer": "PHP"
    },
    {
        "questionIndex": 5,
        "questionText": "JavaScript is a",
        "options": ["Language", "Programming Language", "Development", "All"],
        "correctAnswer": "Programming Language"
    }
];



function initializeQuiz() {

    loadQuestion();
}

// funtion for loading questions
var loadQuestion = function () {
    if (index == questionSet.length) {
        showScore();
    }
    else {
        // update Footer with correct question index
        updateFooter();
        question.innerText = questionSet[index].questionText;
        for (var i = 0; i < options.length; i++) {
            options[i].innerText = questionSet[index].options[i];
        }
        acceptResponse();
    }
}
// eventHandler() will be passed as a function to the event
var eventHandler = function()
{
    // console.log("question Index "+index)
    console.log(this.innerText);
    checkAndUpdateScore(this.innerText)
    incrementIndex();
    loadQuestion();
}
// acceptResponse() triggers the event and calls eventHandler function
function acceptResponse() {
    options.forEach(element => {
        element.addEventListener('click', eventHandler)
        })
    }


// Increment the index of question upon submission
function incrementIndex()
{
    index++;
}

// Match the response submitted with correct response and update score accordingly
function checkAndUpdateScore(Response) {
    if (Response === questionSet[index].correctAnswer) {
        score++;
    }
}

//to update Footer
function updateFooter() {
    let footer = document.getElementById("footer");
    console.log(footer);

    footer.innerText = "Question " + (index + 1) + " of " + questionSet.length;
}

//Function to show score at the end
function showScore() {

let result = "<h1> Result </h1>"



let total = document.getElementById("container");

total.innerHTML = result + "<h2 id='score'> Your score is " + 
score/questionSet.length*100 + "% ("+ 
score + "/" + questionSet.length + ")" 
+ "</h2>";
}

// InitializeQuiz() will be called initially
initializeQuiz();