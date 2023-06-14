let valorDaCompra = 100;
const numeroDeParcelas = 12;
const desconto = 10 / 100;

if (numeroDeParcelas === 1) {
  console.log(`Pagamento a vista com 10% de desconto, você terá que pagar ${valorDaCompra - (valorDaCompra * desconto)} reais.`);
} else if (numeroDeParcelas <= 6) {
  console.log(`Você terá que pagar ${valorDaCompra} em ${numeroDeParcelas} parcelas de ${(valorDaCompra / numeroDeParcelas).toFixed(2)}`);
} else if (numeroDeParcelas <= 12) {
  let valorComJuros = valorDaCompra * (1 + 0.01) ** numeroDeParcelas;
  console.log(`Você terá que pagar o valor de ${(valorComJuros).toFixed(2)} com juros em ${numeroDeParcelas} parcelas de ${(valorComJuros / numeroDeParcelas).toFixed(2)} reais`);

} else {
  console.log("Não é possivel parcelar com essa quantidade de parcelas.");
}