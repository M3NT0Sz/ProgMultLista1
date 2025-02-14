const prompt = require('prompt-sync')();
const metros = prompt('Digite o valor em metros: ');
const centimetros = parseFloat(metros) * 100;
console.log(`O valor em centímetros é: ${centimetros}`);