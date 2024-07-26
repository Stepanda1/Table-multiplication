const getRandomInRange = (min = 1, max = 9) => {
    return Math.floor(min + Math.random() * (max - min + 1));
}

let template = document.querySelector('.template');
let input = document.querySelector('.input');
let check = document.querySelector('.check');
input.focus();
input.select();

let firstNumber = getRandomInRange();
let secondNumber = getRandomInRange();

template.textContent = `${firstNumber} * ${secondNumber}`;

check.addEventListener('click', () => {
    if ((secondNumber * firstNumber) === Number(input.value)) {
        check.style.background = 'green';

        firstNumber = getRandomInRange();
        secondNumber = getRandomInRange();
        template.textContent = `${firstNumber} * ${secondNumber}`;
    } else {
        check.style.background = 'red';
    }

    input.value = '';
    input.focus();
})