const prompt = require('prompt-sync')();

const nota1 = prompt('Digite a primeira nota: ');
const nota2 = prompt('Digite a segunda nota: ');
const nota3 = prompt('Digite a terceira nota: ');

const media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;
console.log(`A média das notas é: ${media.toFixed(2)}`);