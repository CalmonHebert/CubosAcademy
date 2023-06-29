// Declare um array com alguns números quaisquer.
const numeros = [3, 4, 1, 8, 11, 7, 5];
let maior = 0;

// Depois, faça um programa que encontre o maior número desse array e o imprima no console.
for (let n of numeros) {
  if (maior < n) {
    maior = n
  }
}

console.log(maior);