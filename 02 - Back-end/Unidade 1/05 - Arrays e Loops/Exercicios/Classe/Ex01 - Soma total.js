// Faça um programa que cria um array de números.

// Depois calcule e imprima no console a soma de todos os números desse array.

const numeros = [2, 3, 4, 6];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];

}
console.log('soma dos numeros: ' + soma)