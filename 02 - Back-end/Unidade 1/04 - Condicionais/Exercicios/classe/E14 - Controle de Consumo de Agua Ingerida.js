//quantidade de água ingerida em litro.
const quantidadeDeAguaIngerida = 2;

//a) Faça um programa que verifica a quantidade de água ingerida e imprima a mensagem com o diagnóstico conforme na tabela acima.

if (quantidadeDeAguaIngerida < 1.5) {
  console.log('Risco Alto - Você está ingerindo pouquissima água, beba mais água!');
} else if (quantidadeDeAguaIngerida <= 3) {
  console.log('Risco Moderado - Você está ingerindo pouca água, beba mais!');
} else {
  console.log('Risco Baixo - Você está ingerindo uma boa quantidade de água, parabéns!');
}
