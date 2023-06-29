// Declare um array com alguns números inteiros quaisquer.
const numeros = [3, 4, 7, 8, 1, 6, 5, 10];
let soma = 0;

// Depois, percorra este array e calulcule a soma dos números pares presentes nesse array.
for (let i of numeros) {
  if (i % 2 == 0) {
    soma = soma + i;
  }
}

console.log(soma);
