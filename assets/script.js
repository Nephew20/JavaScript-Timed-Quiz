var timerEl = document.getElementById('countdown');
var startEl = document.querySelector('#start');
var questionsEl = document.getElementById('question');
var containerEl = document.getElementById('container');
var answersEl = document.querySelector('#answers');
var container2El = document.getElementById('container2');

// Array of multiple choice questions
var multipleChoice = [
    {
        question: 'Which logical comparison means greater than or equal to?',
        choices: ['>','<=','>='],
        correct: '>='
    }, {
        question: 'What do you use to make a variable assignment?',
        choices: ['bar', 'var', 'gar'],
        correct: 'var'
    }, {
        question: 'What is not a conditional statement?',
        choices: ['but', 'else', 'if'],
        correct: 'but'
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
   
   // 1st Question
    questionsEl.textContent = multipleChoice[0].question
   
    for (x=0; x < multipleChoice[0].choices.length; x++) {
        btnEl = document.createElement('button')

        btnEl.textContent = multipleChoice[0].choices[x];

        container2El.append(btnEl);

    }

    if (btnEl === multipleChoice.correct) {
        return 'Correct'
    }

    // 2nd Question
    container2El.addEventListener('click', function () {
        questionsEl.textContent = multipleChoice[1].question;
        container2El.textContent = ' '
       
        for (x=0; x < multipleChoice[1].choices.length; x++) {
            btnEl2 = document.createElement('button')

            btnEl2.textContent = multipleChoice[1].choices[x];

            container2El.append(btnEl2);

        }
        // 3rd Question
        container2El.addEventListener('click', function() {
            questionsEl.textContent = multipleChoice[2].question;
            container2El.textContent = ' '
        
            for (x=0; x < multipleChoice[2].choices.length; x++) {
                btnEl3 = document.createElement('button')

                btnEl3.textContent = multipleChoice[2].choices[x];

                container2El.append(btnEl3);
            }
            
        })

    })
 
}
 
// Button to start the quiz 
startEl.addEventListener('click', function () {
    countdown();
})