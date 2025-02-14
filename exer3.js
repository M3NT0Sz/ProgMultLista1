const prompt = require('prompt-sync')();

const fahrenheit = prompt('Digite a temperatura em graus Fahrenheit: ');
const celcius = (parseFloat(fahrenheit) - 32) * 5 / 9;
console.log(`A temperatura em Celcius é: ${celcius.toFixed(2)}`);