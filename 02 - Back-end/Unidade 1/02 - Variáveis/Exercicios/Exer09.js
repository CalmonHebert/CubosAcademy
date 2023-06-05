//Calcular Juros composto

const capitalInicial = 1000;
const taxa = 0.125;
const tempo = 5;

const montante = capitalInicial * Math.pow((1 + taxa), tempo);
// ou
// const montante = capitalInicial * (1 + taxa) ** tempo;

console.log(montante);
