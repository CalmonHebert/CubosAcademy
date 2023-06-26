const nomes = ['Jose', 'Maria', 'Pedro', 'Joana', 'André'];

// substituição no array
const x = 3;
nomes[0] = 'Andreia';
nomes[1] = 'Andreia';
nomes[2] = 'Andreia';
nomes[x] = 'Andreia';

console.log(nomes); // -> imprime todos os nomes
console.log(nomes[nomes.length - 1]); // -> nomes.lenght - 1 acessa o ultimo nome no array