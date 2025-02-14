const prompt = require('prompt-sync')();
const quilometros = prompt('Digite o valor em quilômetros: ');
const milhas = parseFloat(quilometros) / 1.60934;
console.log(`O valor em milhas é: ${milhas.toFixed(2)}`);