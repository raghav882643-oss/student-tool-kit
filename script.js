function calculate(operation) {

    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    let answer;

    if (operation === "+") {
        answer = a + b;
    }

    if (operation === "-") {
        answer = a - b;
    }

    if (operation === "*") {
        answer = a * b;
    }

    if (operation === "/") {
        if (b === 0) {
            answer = "Cannot divide by zero";
        } else {
            answer = a / b;
        }
    }

    document.getElementById("result").innerText = "Result: " + answer;
}


let time = 25 * 60;
let timerInterval;

function updateTimer() {

    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    document.getElementById("timer").innerText =
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");
}

function startTimer() {

    if (timerInterval) return;

    timerInterval = setInterval(function () {

        if (time > 0) {
            time--;
            updateTimer();
        } else {
            clearInterval(timerInterval);
            timerInterval = null;
            alert("Study session complete! 🎉");
        }

    }, 1000);
}

function resetTimer() {

    clearInterval(timerInterval);
    timerInterval = null;

    time = 25 * 60;
    updateTimer();
}


function saveNotes() {

    let notes = document.getElementById("notes").value;

    localStorage.setItem("studentNotes", notes);

    document.getElementById("saved").innerText =
        "Notes saved ✅";
}


let oldNotes = localStorage.getItem("studentNotes");

if (oldNotes) {
    document.getElementById("notes").value = oldNotes;
}