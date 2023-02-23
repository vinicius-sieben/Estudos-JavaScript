// Capturar o evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    const inputPeso = evento.target.querySelector('#peso');
    const inputAltura = evento.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    
    const mensagem = `Seu IMC é ${imc} (${nivelImc}).`;
    setResultado(mensagem, true);
});

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepreso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
};

function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
};

function criaParagrafo (className) {
    const p = document.createElement('p');      // Método para criar um elemento no HTML.
    return p;
};

function setResultado (mensagem, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaParagrafo();

    if (isValid) {
        p.classList.add('paragrafo-resultado');  // Definindo uma classe para o elemento criado.
    } else {
        p.classList.add('bad');  // Definindo uma classe para o elemento criado.
    }

    p.innerHTML = mensagem
    resultado.appendChild(p);   // Insere um elemento filho dentro do elemento indicado.
};

