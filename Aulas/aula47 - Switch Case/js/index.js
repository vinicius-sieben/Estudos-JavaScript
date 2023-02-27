function getDiaSemanaTexto (diaSemana) {
    let diaSemanaTexto;
    
    switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        return diaSemanaTexto;
    case 1:
        diaSemanaTexto = 'Segunda';
        return diaSemanaTexto;
    case 2:
        diaSemanaTexto = 'Terça';
        return diaSemanaTexto;
    case 3:
        diaSemanaTexto = 'Quarta';
        return diaSemanaTexto;
    case 4:
        diaSemanaTexto = 'Quinta';
        return diaSemanaTexto;
    case 5:
        diaSemanaTexto = 'Sexta';
        return diaSemanaTexto;
    case 6:
        diaSemanaTexto = 'Sábado';
        return diaSemanaTexto;
    default:    // Usa-se o DEFAULT no SWITCH CASE como se fosse o ELSE no IF.
        diaSemanaTexto = '';
        return diaSemanaTexto;
}

}

const data = new Date('1987-06-20 00:00');      
const diaSemana = data.getDay();    // 0 - Domingo, 1 - Segunda, 2 - Terça, ..., 6 - Sábado.

let diaSemanaTexto = getDiaSemanaTexto(diaSemana);

// USANDO SWITCH CASE
// switch (diaSemana) {    // Variavél a ser checada entre os parenteses.
// case 0:
//     diaSemanaTexto = 'Domingo';
//     break;      // O switch executa a checagem até encontrar a palavra BREAK. (NÃO ESQUECER)
// case 1:
//     diaSemanaTexto = 'Segunda';
//     break;
// case 2:
//     diaSemanaTexto = 'Terça';
//     break;
// case 3:
//     diaSemanaTexto = 'Quarta';
//     break;
// case 4:
//     diaSemanaTexto = 'Quinta';
//     break;
// case 5:
//     diaSemanaTexto = 'Sexta';
//     break;
// case 6:
//     diaSemanaTexto = 'Sábado';
//     break;
// default:    // Usa-se o DEFAULT no SWITCH CASE como se fosse o ELSE no IF.
//     diaSemanaTexto = '';
//     break;
// }

console.log(diaSemana, diaSemanaTexto);