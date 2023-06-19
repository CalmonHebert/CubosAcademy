//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "debito";

//valor da mercadoria (centavos)
const valorDoProduto = 130;

//a) Faça um programa que verifica o tipo de desconto, calcule o valor do produto com o desconto e imprima o resultado.

//Lembre-se de cuidar para que o valor monetário tenha sempre duas casas decimais, apenas.

if (tipoDePagamento == "credito") {
  const desconto = valorDoProduto * (5 / 100);
  const total = valorDoProduto - desconto;
  console.log(`Valor a ser pago: R$${total.toFixed(2)}`);
} else if (tipoDePagamento == "cheque") {
  const desconto = valorDoProduto * (3 / 100);
  const total = valorDoProduto - desconto;
  console.log(`Valor a ser pago: R$${total.toFixed(2)}`);
} else {
  const desconto = valorDoProduto * (10 / 100);
  const total = valorDoProduto - desconto;
  console.log(`Valor a ser pago: R$${total.toFixed(2)}`);
}