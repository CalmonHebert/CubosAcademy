// Declare um array contendo alguns números quaisquer.

const original = [5, 7, 13, 17, 26, 34, 118, 245];

// Depois crie um novo array que contenha apenas os números do array original que estejam entre 10 e 20 ou que sejam maiores que 100. Ao final, imprima a variável que guarda o novo array.
let novoOriginal = [];

for (let o of original) {
  if ((o >= 10 && o <= 20) || o > 100) {
    novoOriginal.push(o)
  }
}

console.log(novoOriginal);