let minutes = 00;
let seconds = 00;
let tens = 00;
let addTens = document.getElementById("tens");
let addSeconds = document.getElementById("seconds");
let addMinutes = document.getElementById("minutes");
let buttonStart = document.getElementById("btn-start");
let buttonStop = document.getElementById("btn-stop");
let buttonReset = document.getElementById("btn-reset");
let interval;

buttonStart.onclick = function() {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
}

buttonStop.onclick = function() {
    clearInterval(interval);
}

buttonReset.onclick = function() {
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    minutes = "00";
    addTens.innerHTML = tens;
    addSeconds.innerHTML = seconds;
    addMinutes.innerHTML = minutes;
}

function startTimer() {
    tens++;

    if (tens <= 9) {
        addTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
        addTens.innerHTML = tens;

    }

    if (tens > 99) {
        console.log("seconds");
        seconds++;
        addSeconds.innerHTML = "0" + seconds;
        tens = 0;
        addTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
        addSeconds.innerHTML = seconds;
    }

    if (seconds > 60) {
        console.log("minutes");
        minutes++;
        addMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        tens = 0;
        addSeconds.innerHTML = "0" + 0;
        addTens.innerHTML = "0" + 0;
    }

    if (minutes > 9) {
        addMinutes.innerHTML = minutes;
    }

}