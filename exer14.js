const prompt = require('prompt-sync')();
const capital = prompt('Digite o capital: ');
const taxa = prompt('Digite a taxa de juros: ');
const tempo = prompt('Digite o tempo: ');
const montante = parseFloat(capital) * (1 + parseFloat(taxa) / 100) ** parseFloat(tempo);
console.log(`O montante é: R$${montante.toFixed(2)}`);