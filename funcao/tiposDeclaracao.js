console.log(soma(3, 4))  // aqui vc executar/ chamar ela antes da funcão, já as outras duas não.

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3,4)) // precisa executar/chamar depois da declaração da funcao, após a linha em q o valor foi atribuido

// named function expression 
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4)) // como já dito, só da para executar depois da declaração e é menos utilizada.