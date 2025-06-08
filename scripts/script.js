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
    return a / b;
}

let currentDisplay = ''
let n1 = null
let n2 = null
let operator = null

//selecionar os botões
const btnUm = document.getElementById('um')
const btnDois = document.getElementById('dois')
const btnTres = document.getElementById('tres')
const btnQuatro = document.getElementById('quatro')
const btnCinco = document.getElementById('cinco')
const btnSeis = document.getElementById('seis')
const btnSete = document.getElementById('sete')
const btnOito = document.getElementById('oito')
const btnNove = document.getElementById('nove')
const btnZero = document.getElementById('zero')
const addBtn = document.getElementById('add-btn')
const subtractBtn = document.getElementById('subtract-btn')
const multiplyBtn = document.getElementById('multiply-btn')
const divideBtn = document.getElementById('divide-btn')
const resultBtn = document.getElementById('result-btn')
const clearBtn = document.getElementById('result-btn')

//selecionar display
const displayContent = document.getElementById('display-content')
//selecionar todos os botões pela classe
const btn = document.querySelectorAll('.digit')

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