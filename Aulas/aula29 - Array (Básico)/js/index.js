//                 0        1        2    
const alunos = ['Pedro', 'Anna', 'Gabriel'];
console.log(alunos[1]);

alunos[0] = 'Eduardo';  // Modificando um valor no array.
console.log(alunos);

alunos[3] = 'Luiza';    // Criando um índice que não existe no array original, e atribuindo um valor ao mesmo.
console.log(alunos);

console.log(alunos.length);     // Descobrindo o tamanho do array.

alunos[alunos.length] = 'Joana';    // Adicionando elementos ao final do array.
alunos[alunos.length] = 'Fábio';    // Adicionando elementos ao final do array.
alunos[alunos.length] = 'Luana';    // Adicionando elementos ao final do array.
console.log(alunos);

alunos.push('Otávio');  // Adicionando elementos ao FINAL do array usando o método PUSH. 
alunos.push('João');    // Adicionando elementos ao FINAL do array usando o método PUSH.
console.log(alunos);

//                  0       1       2
const alunos2 = ['José', 'Caio', 'Vitor'];
alunos2.unshift('Luiza');   // Adicionando elemento no INÍCIO do array.
alunos2.unshift('Pietra');  // Adicionando elemento no INÍCIO do array.
console.log(alunos2);

const removido = alunos.pop();  // Removendo o ÚLTIMO ELEMENTO do array e armazenando dentro de uma variável.
console.log(removido);

const removidoInicio = alunos2.shift();  // Removendo o PRIMEIRO ELEMENTO do array e armazenando dentro de uma variável.
console.log(removidoInicio);

delete alunos2[1];  // Removendo um elemento sem alterar os índices do array. Retorna um <1 empty item> na posição do elemento removido.
console.log(alunos2);

alunos2[1] = 'Vinícius'; 
console.log(alunos2.slice(0, 3));   // Fatia o array até o terceiro índice.
console.log(alunos2.slice(0, -2));  // Fatia o array porém omitindo os últimos dois elementos do array original.

console.log(typeof alunos);     // Retorna object.
console.log(alunos instanceof Array);   // Checando se é um array ou não.