/* 

v Operadores lógicos

&& -> AND -> E
|| -> OR -> OU
! -> NOT -> NÃO

*/

const expressaoAnd = true && true && true && true;
const expressaoOr = true || false;
console.log(expressaoAnd || expressaoOr);
console.log(true && false && false);
console.log(true || false || true);
console.log(true || true || false);
console.log(false || false || true || true);

const usuario = 'Teste';
const senha = '123456';

//                            True                 False        
const vaiLogar = usuario === 'Teste' && senha === '12345';
console.log(vaiLogar);

console.log(!true);