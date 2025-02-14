const prompt = require('prompt-sync')();

const raio = prompt('Digite o raio do círculo: ');
const area = Math.PI * Math.pow(parseFloat(raio), 2);
console.log(`A área do círculo é: ${area.toFixed(2)}`);