let num1 = 9.54578;
let num2 = Math.floor(num1);    // Arredonda o valor para BAIXO.
let num3 = Math.ceil(num1);     // Arredonda o valor para CIMA.
let num4 = Math.round(num1);    // Arredonda o valor para o número inteiro mais perto.         

console.log(num2);
console.log(num3);
console.log(num4);

console.log(Math.max(1, 2, 3, 4, 5, 10, 20, 50, 10000, 28323, -230, 03, 2));    // Retorna o maior valor.
console.log(Math.min(1, 2, 3, 4, 5, 10, 20, 50, 10000, 28323, -230, 03, 2));    // Retorna o menor valor.
const aleatorio = Math.round(Math.random() * (10 - 5) + 5);     // Retorna um valor aleatório entre 5 e 10.
console.log(aleatorio);

console.log(Math.PI);   // Retorna o valor de PI.
console.log(Math.pow(2, 10));   // Retorna 2^10 (Mesma coisa que 2 ** 10).

console.log(100/0);     // Retorna Infinity, um valor verdadeiro.