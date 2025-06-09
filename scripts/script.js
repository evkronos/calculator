// Funções de operação
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return b === 0 ? 'Erro' : a / b;
}

// Variáveis de controle
let currentInput = '';
let n1 = null;
let n2 = null;
let operator = null;

// Display
const displayContent = document.getElementById('display-content');

// Função para atualizar o display
function updateDisplay(value) {
    displayContent.textContent = value;
}

// Captura de botões de dígito
const digitButtons = document.querySelectorAll('button[id^="um"], button[id^="dois"], button[id^="tres"], button[id^="quatro"], button[id^="cinco"], button[id^="seis"], button[id^="sete"], button[id^="oito"], button[id^="nove"], button[id^="zero"]');

digitButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentInput += button.textContent;
        updateDisplay(currentInput);
    });
});

// Botões de operação
const addBtn = document.getElementById('add-btn')
const subtractBtn = document.getElementById('subtract-btn')
const multiplyBtn = document.getElementById('multiply-btn')
const divideBtn = document.getElementById('divide-btn')

addBtn.addEventListener('click', () => setOperator('+'));
subtractBtn.addEventListener('click', () => setOperator('-'));
multiplyBtn.addEventListener('click', () => setOperator('*'));
divideBtn.addEventListener('click', () => setOperator('/'));


function setOperator(op) {
    if (currentInput === '') return;
    n1 = parseFloat(currentInput);
    operator = op;
    currentInput = '';
}

// Botão de resultado
document.getElementById('result-btn').addEventListener('click', () => {
    if (currentInput === '' || n1 === null || operator === null) return;
    n2 = parseFloat(currentInput);
    let result;

    switch (operator) {
        case '+':
            result = add(n1, n2);
            break;
        case '-':
            result = subtract(n1, n2);
            break;
        case '*':
            result = multiply(n1, n2);
            break;
        case '/':
            result = divide(n1, n2);
            break;
    }

    updateDisplay(result);
    // Reset para próxima operação
    currentInput = result.toString();
    n1 = null;
    n2 = null;
    operator = null;
});

// Botão de limpar
document.getElementById('clear-btn').addEventListener('click', () => {
    currentInput = '';
    n1 = null;
    n2 = null;
    operator = null;
    updateDisplay('');
});
