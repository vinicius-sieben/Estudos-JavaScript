function getWeekDayText (weekDay) {
    let weekDayText;

    switch (weekDay) {
        case 0:
            weekDayText = 'Domingo';
            return weekDayText;    
        case 1:
            weekDayText = 'Segunda-feira';
            return weekDayText;
        case 2:
            weekDayText = 'Terça-feira';
            return weekDayText;
        case 3:
            weekDayText = 'Quarta-feira';
            return weekDayText;
        case 4:
            weekDayText = 'Quinta-feira';
            return weekDayText;
        case 5:
            weekDayText = 'Sexta-feira';
            return weekDayText;
        case 6:
            weekDayText = 'Sábado';
            return weekDayText;
        default:
            weekDayText = '';
            return weekDayText;
    }
}

function getMonthName (month) {
    let monthNameText;

    switch (month) {
        case 0:
            monthNameText = 'janeiro';
            return monthNameText;    
        case 1:
            monthNameText = 'fevereiro';
            return monthNameText;
        case 2:
            monthNameText = 'março';
            return monthNameText;
        case 3:
            monthNameText = 'abril';
            return monthNameText;
        case 4:
            monthNameText = 'maio';
            return monthNameText;
        case 5:
            monthNameText = 'junho';
            return monthNameText;
        case 6:
            monthNameText = 'julho';
            return monthNameText;
        case 7:
            monthNameText = 'agosto';
            return monthNameText;
        case 8:
            monthNameText = 'setembro';
            return monthNameText;
        case 9:
            monthNameText = 'outubro';
            return monthNameText;
        case 10:
            monthNameText = 'novembro';
            return monthNameText;
        case 11:
            monthNameText = 'dezembro';
            return monthNameText;
        default:
            monthNameText = '';
            return monthNameText;
    }
}

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

const h1 = document.querySelector('.container h1')
const date = new Date();
const weekDay = date.getDay(date);      // Dia da semana
const month = date.getMonth(date);      // Mês do ano

let weekDayText = getWeekDayText(weekDay);
let monthNameText = getMonthName(month);

h1.innerHTML = `${weekDayText}, ${date.getDate()} de ${monthNameText} de ${date.getFullYear()} ${zeroAEsquerda(date.getHours())}:${zeroAEsquerda(date.getMinutes())}`;