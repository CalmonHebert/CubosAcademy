// Declare um array com alguns nomes quaisquer.
const nomes = ["Ana", "Joana", "Carlos", "amanda"];

// Depois, crie um novo array a partir do primeiro que contenha apenas os nomes que começam com a letra "A" ou "a"(maiúscula ou minúscula). Ao final, imprima a variável que guarda o array.
let novoNome = [];

for (const item of nomes) {
  if (item[0] == 'A' || item[0] == 'a') {
    novoNome.push(item)
  }
}

console.log(novoNome);