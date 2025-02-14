const prompt = require('prompt-sync')();

const celcius = prompt('Digite a temperatura em graus Celcius: ');
const fahrenheit = (parseFloat(celcius) * 9 / 5) + 32;
console.log(`A temperatura em Fahrenheit é: ${fahrenheit.toFixed(2)}`);