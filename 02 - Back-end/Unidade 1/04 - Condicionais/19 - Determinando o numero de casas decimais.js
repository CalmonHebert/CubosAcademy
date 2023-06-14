const valorDaCompra = 100;
const numeroDeParcelas = 3;
const desconto = 10 / 100;

if (numeroDeParcelas === 1) {
  console.log(`Pagamento a vista com 10% de desconto, você terá que pagar ${valorDaCompra - (valorDaCompra * desconto)} reais.`);
} else {
  console.log(`Você terá que pagar ${valorDaCompra} em ${numeroDeParcelas} parcelas de ${(valorDaCompra / numeroDeParcelas).toFixed(2)}`);
}