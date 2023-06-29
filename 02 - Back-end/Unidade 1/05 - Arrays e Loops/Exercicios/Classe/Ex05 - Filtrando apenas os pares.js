// Declare um array com alguns números inteiros quaisquer.

// Depois, crie um novo array que contenha apenas os números pares do array original.

// Ao final, imprima a variável do array no console.

const original = [1, 4, 12, 21, 53, 88, 112];
let nova = [];
for (let i of original) {
  if (i % 2 == 0) {
    nova.push(i);
  }
}
console.log(nova);