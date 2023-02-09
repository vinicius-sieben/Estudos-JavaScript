/*
Luiz Otávio Miranda tem 30 anos, pesa 84kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1980.
*/
const nome = 'Pedro Henrique';
const sobrenome = 'Ferreira';
const idade = 23;
const peso = 79;
const altura = 1.80;
let indiceMassaCorporal; // peso / (altura^2)
let anoNascimento;

indiceMassaCorporal = peso / Math.pow(altura, 2);
anoNascimento = 2023 - idade;

// Template Strings
// Entre `` e variável dentro de ${}

console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é de: ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);
