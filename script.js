let add = document.querySelector('.add');
let subtract = document.querySelector('.subtract');
let multiply = document.querySelector('.multiply');
let divide = document.querySelector('.divide');
let select = document.querySelector('select');
let checkStat = document.querySelector('.check');
let reset = document.querySelector('.reset');
let min = 1;
let max = 10;
let correct = 0;
let mistake = 0;
let accuracy = 0;

const operations = {
    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2,
    multiply: (num1, num2) => num1 * num2,
    divide: (num1, num2) => Math.round(num1 / num2)
};

function handleOperation(operation) {
    let num1 = getRandomInt(min, max);
    let num2 = getRandomInt(min, max);
    let correctAns = operations[operation](num1, num2);
    let operator = operation === 'add' ? '+' : operation === 'subtract' ? '-' : operation === 'multiply' ? 'x' : ':';
    if (operation === 'divide') alert("round your answer");
    let userAns = prompt(${num1} ${operator} ${num2} =, '');
    checkAns(correctAns, userAns);
}

add.addEventListener('click', () => handleOperation('add'));
subtract.addEventListener('click', () => handleOperation('subtract'));
multiply.addEventListener('click', () => handleOperation('multiply'));
divide.addEventListener('click', () => handleOperation('divide'));

checkStat.addEventListener('click', () => {
    accuracy = correct / (mistake + correct);
    alert(mistakes = ${mistake}\ncorrect answers = ${correct}\naccuracy = ${accuracy});
});

reset.addEventListener('click', () => {
    mistake = 0;
    correct = 0;
    accuracy = 0;
});

select.addEventListener('change', () => {
    let value = select.value;
    switch (value) {
        case 'easy':
            min = 1;
            max = 9;
            break;
        case 'medium':
            min = 10;
            max = 99;
            break;
        case 'hard':
            min = 100;
            max = 999;
            break;
    }
});

function checkAns(correctAns, userAns) {
    if (correctAns == userAns) {
        alert('correct');
        correct++;
    } else {
        alert(${userAns} is wrong, the correct answer is ${correctAns});
        mistake++;
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
