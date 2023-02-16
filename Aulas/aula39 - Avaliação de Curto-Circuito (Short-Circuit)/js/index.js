/* 
&& -> false && true -> false "o valor mesmo"
|| -> true || false -> vai retornar "o valor verdadeiro".

FALSY
false
0
'' "" ``
null / undefined 
NaN

*/

console.log('João' && 'Maria'); // Retorna o ultimo valor verdadeiro.
console.log('João' && '' && 'Maria') // Avalia a string vazia como falso, então, retorna o primeiro valor falso.

function falaOi () {
    return 'Oi';
}

const vaiExecutar = false;
console.log(vaiExecutar && falaOi());   // Executa a função se a variável for verdadeira.

console.log(0 || false || null || 'Vinícius Sieben' || true);   // Retorna o primeiro valor verdadeiro da expressão.

// Exemplo:
const corUsuario = null;
const corPadrao =  corUsuario || 'preto';
console.log(corPadrao);