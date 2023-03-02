const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Avenida Brasil',
        numero: 320
    }
};

// Atribuição via desestruturação
const { nome, sobrenome, idade } = pessoa
console.log(nome, sobrenome, idade);

const { nome: nome2, ...resto } = pessoa;
console.log(nome2);