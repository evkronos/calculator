// funções para as operações
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

let currentDisplay = ''
let n1 = null
let n2 = null
let operator = null

//selecionar os botões de digito
const digitButtons = document.querySelectorAll('button[id^="um"], button[id^="dois"], button[id^="tres"], button[id^="quatro"], button[id^="cinco"], button[id^="seis"], button[id^="sete"], button[id^="oito"], button[id^="nove"], button[id^="zero"]');
//selecionar botões de operação
const addBtn = document.getElementById('add-btn')
const subtractBtn = document.getElementById('subtract-btn')
const multiplyBtn = document.getElementById('multiply-btn')
const divideBtn = document.getElementById('divide-btn')
const resultBtn = document.getElementById('result-btn')
const clearBtn = document.getElementById('clear-btn')

//selecionar display
const displayContent = document.getElementById('display-content')

//função para atualizar o display

// fazer array para armazenar os botões clicados pelo usuário e exibir no display


function operate() {
    switch (operator) {
        case '+':
            add(n1, n2)
            break;
        case '-':
            subtract(n1, n2)
            break;
        case '*':
            multiply(n1, n2)
            break;
        case '/':
            divide(n1, n2)
            break;
    }
}