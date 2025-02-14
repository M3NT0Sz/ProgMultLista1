const prompt = require('prompt-sync')();

const largura = prompt('Digite a largura do retângulo: ');
const altura = prompt('Digite a altura do retângulo: ');
const perimetro = 2 * (parseFloat(largura) + parseFloat(altura));
console.log(`O perímetro do retângulo é: ${perimetro.toFixed(2)}`);