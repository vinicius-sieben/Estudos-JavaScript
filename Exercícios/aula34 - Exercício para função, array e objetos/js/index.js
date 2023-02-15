function meuEscopo () {

    const form = document.querySelector('.form');      // Seleciona o primeiro elemento que "bata" com um seletor CSS. (tag, id, class, atributo) | Nesse caso selecionamos a classe form.
    const resultado = document.querySelector('.resultado'); // Selecionando o primeiro elemento com a classe resultado.

    const pessoas = [];

    // Capturando o evento SUBMIT do form usando uma função.
    function recebeEventoForm (evento) {
        evento.preventDefault();           // Previne o que é pra acontecer por padrão. Nesse caso, a página atualizar após o envio do formulário.

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({                     // Alimentando o array pessoas com os dados dos inputs do form.
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })

        console.log(pessoas);
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;     // Inserindo no HTML da página os dados coletados.
    };

    form.addEventListener('submit', recebeEventoForm);

};

meuEscopo();