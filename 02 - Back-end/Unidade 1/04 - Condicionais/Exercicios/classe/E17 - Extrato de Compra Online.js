//valor do produto comprado.
const valorDoProduto = 1000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

// a) Dado o valor de um produto, a quantidade de parcelas escolhida e quanto já foi pago, Faça um programa que ajude a Fernanda a saber o valor restante para pagamento e quantas parcelas faltam pagar.
const valorParcela = valorDoProduto / quantidadeDoParcelamento
const Pagas = valorPago / valorParcela;
const restante = quantidadeDoParcelamento - Pagas;


console.log(`Restam ${restante} parcelas de R$${valorParcela}`);

if (quantidadeDoParcelamento) {

}