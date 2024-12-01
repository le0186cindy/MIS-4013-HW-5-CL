function calculate(sign) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;
    switch (sign) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;
        default:
            result = 'error occured';
    }
    document.getElementById('result').innerText = "Result: " + result;
}

function renameList() {
    const newName = prompt("Rename your list");
    
    if (newName != null) {
        document.getElementById('listName').innerText = newName;
    }
}

function addTask() {
    const task = document.getElementById('taskInput').value;
    if (task) {
        const list = document.getElementById('taskList');
        const listItem = document.createElement('li');
        listItem.innerText = task;
        list.appendChild(listItem);
        document.getElementById('taskInput').value = "";
    }
}

function startTimer() {
    let time = parseInt(document.getElementById('timerInput').value);
    const display = document.getElementById('timerDisplay');
    const interval = setInterval(() => {
        if (time > 0) {
        display.innerText = `Time left: ${time--} seconds`;
        } else {
        clearInterval(interval);
        display.innerText = "Time's up!";
        }
    }, 1000);
}

function showMessage() {
    const messages = [
        "You're doing so well!",
        "Keep going, you are so close!",
        "Every step forward is progress.",
        "Believe it! Believe in yourself! Dattebayo!",
        "Hard work pays off!"
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById('messageDisplay').innerText = messages[randomIndex];
}