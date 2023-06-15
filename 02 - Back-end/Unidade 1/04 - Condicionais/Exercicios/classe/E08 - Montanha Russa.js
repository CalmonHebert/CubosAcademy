const idade = 15;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = true;

if (idade < 12 || idade > 65 || possuiPatologia || altura < 150) {
  console.log("Acesso Negado");
} else if (idade < 18 && ehEstudante) {
  console.log("10 reais");
} else {
  console.log("20 Reais");
}