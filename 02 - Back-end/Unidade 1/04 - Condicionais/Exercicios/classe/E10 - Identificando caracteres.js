const caractere = "z";

let vogal = ['a', 'e', 'i', 'o', 'u'];

if (typeof caractere == "string") {
  if (caractere == vogal) {
    console.log("Minuscula");
  } else {
    console.log("Maiuscula");
  }
} else {
  console.log("Numero");
}