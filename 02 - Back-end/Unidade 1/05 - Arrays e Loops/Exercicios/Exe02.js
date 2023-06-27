//faça um programa que conte quantas letras "a" tem numa determinada palavra

const palavra = "gol";
let cont = 0;

let naoContem = false;

for (let i of palavra) {
  if (i == "a" || i == "A") {
    naoContem = true;
    cont++;
  }
}

if (!naoContem) {
  console.log(`A palavra ${palavra} não tem letra "a"`);
} else {
  console.log(`A palavra ${palavra} tem ${cont} letras "a"`);
}
