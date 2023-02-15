// Criando um objeto literal:
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {    // Criando métodos dentro de objetos.
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

console.log(pessoa1.nome);  // Acessando os valores armazenados no objeto.
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

// Criando uma função que cria pessoas.
function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
};

const pessoa3 = criaPessoa('Pedro', 'Henrique', 19);
const pessoa4 = criaPessoa('João', 'Bruno', 25);
const pessoa5 = criaPessoa('Ana', 'Antoônia', 32);

console.log(pessoa3.nome, pessoa4.nome, pessoa5.nome);