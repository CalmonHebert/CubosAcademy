const rendaMensal = 3000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores. Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 10000;


//Na Cubos Academy alguns estudantes podem fazer o Curso de Programação do Zero e só começar a pagar após finalizado o curso quando (e se) tiverem obtido renda acima de R$ 2.000,00. Nesse caso o valor da parcela a ser paga é de 18% do valor da renda mensal da pessoal.

//Após 60 meses, independente de ter quitado ou não o valor total do curso (de R$ 18.000,00) a pessoa não deve nada, ou seja, o valor da parcela é zero.

//a) Faça um programa que calcula o valor da parcela a ser paga pelo aluno. Imprima uma mensagem bonita na tela, com o valor em reais.
if (rendaMensal > 2000) {
  const porcent = 18 / 100;
  const calculo = rendaMensal * porcent;
  console.log(`O valor da parcela desse mês é R$ ${calculo} reais`);
} else {
  console.log(`O valor da parcela desse mês é R$ 0 reais`);
}



//b) Altere o seu programa anterior para que, quando o valor da parcela a ser pago for 0, a mensagem explique porque o aluno não precisa pagar nada naquele mês.