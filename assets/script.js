var timerEl = document.getElementById('countdown');
var startEl = document.querySelector('#start');
var questionsEl = document.getElementById('question');
var containerEl = document.getElementById('container');
var answersEl = document.querySelector('#answers');
var container2El = document.getElementById('container2');

var multipleChoice = [
    {
        question: 'Which logical comparison means greater than or equal to?',
        choices: ['>','<=','>=',],
        correct: '>='
    }, {
        question: 'What do you use to make a variable assignment?',
        choice1: 'bar',
        choice2: 'var',
        choice3: 'gar',
        correct: '2'
    }
]

// console.log(multipleChoice.choices[1])
var score = 0;

// Setting up the timer
function countdown() {
    var timeLeft = 30;

    var timeInterval = setInterval(function () {
        if (timeLeft >= 1) {
            timerEl.textContent = 'Timer: ' + timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = ' ';
            clearInterval(timeInterval);
        }
    }, 1000);
    generateQuestions();

    containerEl.setAttribute('class', 'hidden');
}

// Function to present the questions
function generateQuestions() {
    questionsEl.textContent = multipleChoice[0].question
   
    for (x=0; x < multipleChoice[0].choices.length; x++) {
        btnEl = document.createElement('button')

        btnEl.textContent = multipleChoice[0].choices[x];

        container2El.append(btnEl);

        console.log(btnEl)
    } 

    btnEl.addEventListener('click', function () {
        questionsEl.textContent = multipleChoice[1].question;
    })

    // for (x=0; x < multipleChoice[1].choices.length; x++) {
    //     btnEl = document.createElement('button')

    //     btnEl.textContent = multipleChoice[0].choices[x];

    //     container2El.append(btnEl);

    //     console.log(btnEl)
    // }
}

// Button to start the quiz 
startEl.addEventListener('click', function () {
    countdown();
})