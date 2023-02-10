let umaString = "Um \"texto\""; // Usa-se a "\"" invertida como caractere de escape.

console.log(umaString);

//           01234567
umaString = 'Um texto';
console.log(umaString.charAt(6)); // Retorna o elemento na posição informada.

console.log(umaString.concat(' ', 'em', ' ', 'um', ' ', 'lindo dia')); // Função usada para concatenar strings (recomenda-se o uso de template strings).

console.log(`${umaString} em um lindo dia.`); // Usando template strings para concatenar strings.

console.log(umaString.indexOf('texto')); // Retorna o índice onde se inicia o elemento informado. (CASE SENSITIVE) 
console.log(umaString.indexOf('Um', 3)); // Retorna o índice do elemento a partir do índice informado. 

console.log(umaString.lastIndexOf('m', 3)); // Retorna o índice do elemento informado a partir do índice informado, começando pelo final.

//           0123456789
umaString = 'O rato roeu a roupa do rei de roma.';
console.log(umaString.replace(/r/g, '#')); // Substituindo o caractere "r" pelo caractere "#".

console.log(umaString.length); // Retorna o tamanho da string.
console.log(umaString.slice(2, 6)); // Fatiamento de string (informar índice de início e fim, retorna o que está entre os índices).
console.log(umaString.slice(-5)); // Usando negativos no START: Considera-se o tamanho total da string MENOS a quantidade de caracteres informados.
console.log(umaString.slice(30));

console.log(umaString.split(' ', 3)); // Divide a string usando como parâmetro o argumento passado no .split(). O segundo argumento passado é quantas vezes será separado.

console.log(umaString.toUpperCase); // Retorna a string toda em UPPERCASE.
console.log(umaString.toLowerCase) // Retorna a string toda em LOWERCASE.