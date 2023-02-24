const data = new Date();
console.log(data.toString());

const data2 = new Date(2019, 3, 20, 15, 14, 27);
console.log(data2.toString());

console.log('Dia', data2.getDate()); // Saber qual dia do mês
console.log('Mês', data2.getMonth() + 1);  // Mês começa do zero
console.log('Ano', data2.getFullYear());
console.log('Hora', data2.getHours());
console.log('Minutos', data2.getMinutes());
console.log('Segundos', data2.getSeconds());
console.log('Ms', data2.getMilliseconds());
console.log('Dia da semana', data.getDay()); // 0 - Domingo, 6 - Sábado
console.log(data2.toString());

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
};

function formataData(data) {
    const dia = zeroAEsquerda(data3.getDate());
    const mes = zeroAEsquerda(data3.getMonth() + 1);
    const ano = zeroAEsquerda(data3.getFullYear());
    const hora = zeroAEsquerda(data3.getHours());
    const min = zeroAEsquerda(data3.getMinutes());
    const seg = zeroAEsquerda(data3.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
};

const data3 = new Date();
const dataBrasil = formataData(data3);
console.log(dataBrasil);