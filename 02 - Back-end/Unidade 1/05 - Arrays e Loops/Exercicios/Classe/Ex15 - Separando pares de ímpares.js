// Neste exercício deveremos ler um array de números para separar os pares dos ímpares. Para isso, verificaremos item por item do array original e se for par, adicionaremos o número em um array de pares, e se for ímpar, adicionaremos em um array de ímpares.

// Ao final, deveremos imprimir primeiro o array de pares, e em seguida, imprimir o array de ímpares (Obs.: não é necessário imprimir item a item dos arrays, pode ser os arrays inteiros).

const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

// for (const i of original) {
//   if (original[i] % 2 === 0) {
//     pares.push(original[i]);
//   } else {
//     impares.push(original[i]);
//   }
// }

// for (let i = 0; i < original.length; i++) {
//   if (original[i] % 2 == 0) {
//     pares.push(original[i]);
//   } else {
//     impares.push(original[i]);
//   }
// }

let i = 0;
while (i < original.length) {
  if (original[i] % 2 === 0) {
    pares.push(original[i]);
  } else {
    impares.push(original[i]);
  }
  i++
}

console.log(pares);
console.log(impares);