// Precisamos verificar em uma caixa de disjuntores quais estão ligados. Supondo que a caixa de disjuntores é representada por um array onde, cada item do array é um disjuntor, sendo o índice do item a identificação do disjuntor (começando em 0) e o valor do item um boolean indicando se o disjuntor está ligado ou não, imprima no console apenas os disjuntores que estão ligados. Se possível, utilizar o conceito de truthiness.

const disjuntores = [false, false, true, false, false, true, false, false];

for (let i = 0; i < disjuntores.length; i++) {
  if (disjuntores[i] == true) {
    console.log(i);
  }
}