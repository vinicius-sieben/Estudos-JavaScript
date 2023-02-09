let varA = 'A';     // B
let varB = 'B';     // C
let varC = 'C';     // A
let aux;

// [varA, varB, varC] = [varB, varC, varA];  // Outra forma de resolver.

aux = varA;
varA = varB;
varB = varC;
varC = aux;

console.log(varA, varB, varC)