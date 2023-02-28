const verdadeira = true;

// Let tem escopo de bloco { ... bloco }
// Var só tem escopo de função

// let nome = 'Luiz';  // Criando
// var nome2 = 'Luiz';

// if (verdadeira) {
//     let nome = 'Otávio';    // Criando outra variável no escopo (mesmo nome mas não é a mesma variável)
//     console.log(nome, nome2);

//     if (verdadeira) {
//         let nome = 'Outra coisa';
//         console.log('OK')
//     }

// }

function falaOi() {
    var nome = 'Luiz';
}

console.log(nome)
falaOi();