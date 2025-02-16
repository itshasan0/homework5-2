let time = 10;
const timerDisplay = document.getElementById('timer');
const resetButton = document.getElementById('resetButton');

let interval = setInterval(function() {
    time--;
    timerDisplay.textContent = time;
    if (time === 0) {
        clearInterval(interval);
        alert("Time's up!");
    }
}, 1000);

resetButton.addEventListener('click', function() {
    time = 10;
    timerDisplay.textContent = time;
    clearInterval(interval);
    interval = setInterval(function() {
        time--;
        timerDisplay.textContent = time;
        if (time === 0) {
            clearInterval(interval);
            alert("Time's up!");
        }
    }, 1000);
});
