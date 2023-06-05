//Cupom de desconto
const valorTenis = 129.99;
const meuDinheiro = 80;
const desconto = valorTenis - meuDinheiro;


let cupom = (100 * desconto) / valorTenis;


console.log(`O valor do cupom deve ser de ${cupom}%`);
