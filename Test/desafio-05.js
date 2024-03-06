const prompt = require("prompt-sync")()

function inverterString(str) {
    let resultado = '';
    for (let i = str.length - 1; i >= 0; i--) {
      resultado += str[i];
    }
    return resultado;
}
  
const minhaString = prompt('Digite uma string para inverter:');
  
if (minhaString !== null && minhaString !== '') {
    const stringInvertida = inverterString(minhaString);
    console.log(`String original: ${minhaString}`);
    console.log(`String invertida: ${stringInvertida}`);
  } else {
    console.log('Por favor, insira uma string válida.');
}