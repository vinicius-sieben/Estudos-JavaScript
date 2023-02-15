/* 
Primitivos (imutáveis) - string, number, boolean, undefined,
null (bigint, symbol) - Valores copiados (copiados para outros espaços na memória)

Referência (mutável) - array, object, function - 

Tipos de dados não primitivos são passados por referência (alocados no mesmo valor da memória).
*/

const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
}

const b = a;

a.nome = 'João';
console.log(b);
console.log(a);