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

// let n1 = prompt('Digite o primeiro número')
// let operator = prompt('Escolha a operação')
// let n2 = prompt('Digite o segundo número')

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