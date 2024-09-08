let firstOperand = '';
let secondOperand = '';
let result = null;
let currentOperator = null;
let isSecondOperand = false;

const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('button');

function updateScreen(value) {
    screen.textContent = value;
}

function clearScreen() {
    screen.textContent = '';
}

function handleButtonClick(button) {
    button.addEventListener('click', () => {
        if (button.classList.contains('clear-screen')) {
            firstOperand = '';
            secondOperand = '';
            currentOperator = null;
            clearScreen();
            isSecondOperand = false;
        }
        if (button.classList.contains('digit')) {
            if (isSecondOperand) {
                secondOperand = secondOperand.concat(button.textContent);
                updateScreen(secondOperand);
            } else {
                firstOperand = firstOperand.concat(button.textContent);
                updateScreen(firstOperand);
            }
        }  
        if (button.classList.contains('operator')) {
            currentOperator = button.textContent;
            clearScreen();
            if (!isSecondOperand) {
                isSecondOperand = true;
            }
        } 
        if (button.classList.contains('equals')) {
            clearScreen();
            if (currentOperator === '+') {
                result = parseInt(firstOperand) + parseInt(secondOperand);
            } else if (currentOperator === '-') {
                result = parseInt(firstOperand) - parseInt(secondOperand);
            } else if (currentOperator === '×') {
                result = parseInt(firstOperand) * parseInt(secondOperand);
            } else if (currentOperator === '÷') {
                result = parseInt(firstOperand) / parseInt(secondOperand);
            }
            updateScreen(result);
            firstOperand = result.toString();
            secondOperand = '';
            isSecondOperand = false;
        }
        if (button.classList.contains('backspace')) {
            if (isSecondOperand) {
                secondOperand = secondOperand.slice(0, -1);
                updateScreen(secondOperand);
            } else {
                firstOperand = firstOperand.slice(0, -1);
                updateScreen(firstOperand);
            }
        }
    });
}

buttons.forEach(button => {
    handleButtonClick(button);
});
