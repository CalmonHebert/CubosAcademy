// Declare uma nova variável que contem um array contendo algumas letras.

// Faça um programa que conta quantas letras "E" ou "e" existem nessa palavra.

// Imprima mensagens bonitinhas para mostrar o resultado, por favor. Inclusive quando nenhuma letra for encontrada.

const letras = ["A", "e", "B", "C", "E", "z"];



let soma = 0;
let confima = false;

for (let i of letras) {
  if (i == "E" || i == "e") {
    soma += 1;
    confima = true;
  }
}

if (confima) {
  // b) Quando forem encontradas as letras "E" ou "e" no array letras
  console.log(`Foram encontradas ${soma} letras "E" ou "e".`);
} else {
  // a) Quando não houver nenhuma letra "E" ou "e" como no array letras
  console.log(`Nenhuma letra "E" ou "e" foi encontrada.`);
}
