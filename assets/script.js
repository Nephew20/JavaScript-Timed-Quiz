var timerEl = document.getElementById('countdown');

// Setting up the timer
function countdown() {
    var timeLeft = 30;

    var timeInterval = setInterval(function () {
        if (timeLeft >= 1) {
            timerEl.textContent = 'Timer: '+ timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = ' ';
            clearInterval(timeInterval);
        }
    }, 1000);
}

countdown();