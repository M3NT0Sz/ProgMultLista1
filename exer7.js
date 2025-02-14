const prompt = require('prompt-sync')();

const raio = prompt('Digite o raio do círculo: ');
const perimetro = 2 * Math.PI * parseFloat(raio);
console.log(`O perímetro do círculo é: ${perimetro.toFixed(2)}`);