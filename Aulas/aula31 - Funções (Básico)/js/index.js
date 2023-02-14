function saudacao(nome) {
    return `Bom dia  ${nome}!`;     // usa-se o RETURN para a função retornar alguma coisa.
}

const variavel = saudacao('Luiz');  // Armazenando numa variável o que a função retornou.
console.log(variavel);

function soma(x, y){    // Função de soma.
    return x + y;
}

const resultado = soma(10, 1);  // Armazenando numa variável o que a função retornou.
console.log(resultado)

function soma2(x = 1, y = 1){   // Função de soma com uma variável interna (escopo da função). | Definindo valores padrões para os parâmetros da função.
    const resultado = x + y;
    return resultado;
}

console.log(soma2(2, 2));

console.log(resultado);     // Resultado está no escopo da função soma2, portanto, não é acessível "do lado de fora".
                            // Uma alternativa:

const resultado2 = soma2(2, 2);
console.log(resultado2);

console.log(soma2());   // Não definindo os parâmetros da função, logo os valores padrões são assumidos.

// FUNÇÃO ANÔNIMA: Criar função dentro de uma variável.

const raiz = function (n){  // Criando a função dentro da variável raiz.
    return n ** 0.5; 
};

console.log(raiz(9));   // O modo de chamar a função não muda.

// ARROW FUNCTION:
const raiz2 = (n) => {
    return n ** 0.5;
}
console.log(raiz2(64));

// OU

const raiz3 = n => n ** 0.5;    // Usa-se quando só temos um parâmetro.
console.log(raiz3(16));

// OU

const raiz4 = (n) => n ** 0.5;  // Usa-se quando temos mais que um parâmetro.