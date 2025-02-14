const prompt = require('prompt-sync')();
const dias = prompt('Digite a quantidade de dias: ');
const Horas = parseFloat(dias) * 24;
const Minutos = parseFloat(Horas) * 60;
const Segundos = parseFloat(Minutos) * 60;
console.log(`O valor em horas é: ${Horas}`);
console.log(`O valor em minutos é: ${Minutos}`);
console.log(`O valor em segundos é: ${Segundos}`);