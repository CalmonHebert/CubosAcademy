const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos
const rendimentoMinimo = 2855970


if (portadoraDeDoenca || aposentada) {
  console.log("ISENTA");
} else if (totalDeRendimentos < rendimentoMinimo) {
  console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE");
} else {
  console.log("PEGA LEAO");
}
//Caso a pessoa não deva pagar IR por pertencer ao grupo de pessoas isentas, imprima na tela ISENTA
//Caso a passoa não deva pagar IR por nao ter o rendimento mínimo necessário, imprima na tela VAZA LEAO! JA TA DIFICIL SEM VOCE
//Caso a pessoa deva pegar IR imprima na tela PEGA LEAO