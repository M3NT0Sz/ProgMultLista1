const prompt = require('prompt-sync')();
const peso = prompt('Digite o peso em KG: ');
const altura = prompt('Digite a altura: ');
const imc = parseFloat(peso) / (parseFloat(altura) ** 2);
console.log(`O IMC é: ${imc.toFixed(2)}`);