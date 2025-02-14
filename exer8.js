const prompt = require('prompt-sync')();
const base = prompt('Digite a base: ');
const expoente = prompt('Digite o expoente: ');
const baseElevada = Math.pow(parseFloat(base), parseFloat(expoente));
console.log(`O resultado de ${base} elevado a ${expoente} é: ${baseElevada}`);