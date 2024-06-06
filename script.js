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

add.addEventListener('click', function (e) {
    let num1 = getRandomInt(min, max);
    let num2 = getRandomInt(min, max);
    let correctAns = num1 + num2;
    let userAns = prompt(num1 + '+' + num2 + '=', '');
    checkAns(correctAns, userAns);
});

subtract.addEventListener('click', function (e) {
    let num1 = getRandomInt(min, max);
    let num2 = getRandomInt(min, max);
    let correctAns = num1 - num2;
    let userAns = prompt(num1 + '-' + num2 + '=', '');
    checkAns(correctAns, userAns);
});

multiply.addEventListener('click', function (e) {
    let num1 = getRandomInt(min, max);
    let num2 = getRandomInt(min, max);
    let correctAns = num1 * num2;
    let userAns = prompt(num1 + 'x' + num2 + '=', '');
    checkAns(correctAns, userAns);
});

divide.addEventListener('click', function (e) {
    let num1 = getRandomInt(min, max);
    let num2 = getRandomInt(min, max);
    let correctAns = num1 / num2;
    correctAns = Math.round(correctAns);
    alert("round your answer")
    let userAns = prompt(num1 + ':' + num2 + '=', '');
    checkAns(correctAns, userAns);
});

checkStat.addEventListener('click', function (e) {
    accuracy = correct / (mistake + correct)

    alert('mistekes = ' + mistake + '\n correct answers = ' + correct + '\n accuracy ' + accuracy);

});

reset.addEventListener('click', function (e) {
    mistake = 0;
    correct = 0;
    accuracy = 0;
});

select.addEventListener('change', function (e) {
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
        correct = correct + 1;
    } else {
        alert(userAns + ' is wrong the correct answer is ' + correctAns);
        mistake = mistake + 1;
    }

}
function getRandomInt(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
}