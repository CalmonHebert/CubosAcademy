// crie um array com 5 nomes de países
const paises = ["Brasil", "Argentina", "Alemanha", "Portugal", "Paraguai"]

// adicione um pais ao fim da lista
paises.push("Suiça");
console.log(paises);

//remova um pais di fim da tela
paises.pop();
console.log(paises);

//adicione um pais no inicio da lista
paises.unshift("Uruguai");
console.log(paises);

//remova um pais do inicio da lista
paises.shift();
console.log(paises);

//imprima o ultimo pais da lista na tela
console.log(paises[paises.length - 1]);

//imprima o segundo pais da lista na tela
console.log(paises[1]);

//imprima o pais de indice 2 na tela
console.log(paises[2]);