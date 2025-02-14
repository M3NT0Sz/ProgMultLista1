const prompt = require('prompt-sync')();
const preco = prompt('Digite o preço do produto: ');
const desconto = prompt('Digite o desconto em %: ');
const precoComDesconto = parseFloat(preco) - (parseFloat(preco) * parseFloat(desconto) / 100);
console.log(`O preço com desconto é: R$${precoComDesconto.toFixed(2)}`);