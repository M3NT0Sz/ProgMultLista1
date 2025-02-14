const prompt = require('prompt-sync')();

const largura = prompt('Digite a largura do retângulo: ');
const altura = prompt('Digite a altura do retângulo: ');
const area = parseFloat(largura) * parseFloat(altura);
console.log(`A área do retângulo é: ${area.toFixed(2)}`);