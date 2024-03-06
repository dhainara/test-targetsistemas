const prompt = require("prompt-sync")()

function verificarFibonacci(numero) {
    let a = 0;
    let b = 1;

    while (b <= numero) {
        if (b === numero) {
            console.log(`${numero} pertence à sequência de Fibonacci.`);
            return;
        }

        let temp = a + b;
        a = b;
        b = temp;
    }

    console.log(`${numero} não pertence à sequência de Fibonacci.`);
}
const numeroInformado = prompt("Informe um número:");

const numero = parseInt(numeroInformado);

if (isNaN(numero)) {
    console.log("Por favor, informe um número válido.");
} else {
    verificarFibonacci(numero);
}