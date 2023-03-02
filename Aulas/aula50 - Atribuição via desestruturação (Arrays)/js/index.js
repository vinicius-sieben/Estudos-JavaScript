// ... rest, spread operator
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros;    // Atribuindo o primeiro e o segundo elemento do array às variáveis primeiroNumero e segundoNumero.
//  ...(nome da variavel) - Atribui o resto do array numa variável.
console.log(primeiroNumero, segundoNumero, terceiroNumero);
console.log(resto);

const numeros2 = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um, , tres, , cinco, , sete] = numeros2;     // Podemos pular indexes omitindo o nome da variavel entre as vírgulas.
console.log(um, tres, cinco, sete);

// Outro exemplo:
//                    0          1          2         
//                 0  1  2    0  1  2    0  1  2
const numeros3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [lista1, lista2, lista3] = numeros3;
console.log(lista2[2]);