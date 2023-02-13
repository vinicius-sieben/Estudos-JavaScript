let num1 = 10.25; // Number
let num2 = 2.5; // Number

console.log(num1.toString() +  num2);   // Convertendo number para string.
num1 = Number(num1.toFixed(2));
console.log(num1);   // Arredondando em duas casas decimais.

console.log(Number.isInteger(num1));    // Método para checar se valor é inteiro, retorna TRUE ou FALSE.

let temp = num1 * 'Olá';
console.log(Number.isNaN(temp));    // Checando se o resultado da equação é um NaN.

let num3 = 0.7;
let num4 = 0.1;

num3 += num4; // 0.8
num3 += num4; // 0.9
num3 += num4; // 1.0
num3 += num4; // 1.1
num3 += num4; // 1.2
num3 += num4; // 1.3
num3 += num4; // 1.4
num3 += num4; // 1.5
num3 += num4; // 1.6
num3 += num4; // 1.7
num3 += num4; // 1.8
num3 += num4; // 1.9
num3 += num4; // 2.0


console.log(num3); // Retorna 0.9999999999999999

num3 = num3.toFixed(2);
console.log(num3); // Retorna 1.0
console.log(Number.isInteger(num3));