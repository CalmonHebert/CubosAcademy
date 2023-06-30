// Declare um array com alguns números inteiros quaisquer.
const numeros = [8, 11, 4, 1];

// Depois, faça um programa que calcule a maior diferença entre dois números desse array.
let menor = 2000;
let maior = 0;
let diferença = 0;

for (let num of numeros) {
  if (maior < num) {
    maior = num
  }
  if (menor > num) {
    menor = num
  }
}

diferença = maior - menor;

console.log('Maior:' + maior);
console.log('Menor: ' + menor);
console.log(`A diferença de ${maior} - ${menor} é: ${diferença} `);