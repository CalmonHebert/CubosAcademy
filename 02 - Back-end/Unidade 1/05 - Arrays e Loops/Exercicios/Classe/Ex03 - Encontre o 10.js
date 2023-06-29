// Crie um array de números inteiros.

const numeros = [54, 22, 14, 10, 284];

// Faça um programa que verifica se existe o número 10 nesse array. Caso exista, informa a posição (índice) em que o número 10 se encontra. Caso não exista, deverá ser impresso -1.


if (numeros.indexOf(10)) {
  console.log(numeros.indexOf(10));
} else {
  console.log('-1');
}

// Ou
// let existe = false;
// let index = 0;
// for (let i = 0; i < numeros.length; i++) {
//   if (numeros[i] == 10) {
//     index = i;
//     existe = true;
//   }
// }

// if (existe) {
//   console.log(index);
// } else {
//   console.log('-1');
// }