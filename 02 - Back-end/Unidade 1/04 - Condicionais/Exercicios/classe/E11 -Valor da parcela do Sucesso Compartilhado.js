const rendaMensal = 1700;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 10;

// Soma das parcelas já pagas pelo aluno nos meses anteriores. Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 10000;

if (mesesDecorridos == 60 || totalJaPagoPeloAluno == 18000) {
  console.log("Não deve nada. Dívida paga.");
}
else if (rendaMensal > 2000) {
  const porcent = 18 / 100;
  const calculo = rendaMensal * porcent;
  console.log(`O valor da parcela desse mês é R$ ${calculo} reais`);
} else {
  console.log(`O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.`);
}