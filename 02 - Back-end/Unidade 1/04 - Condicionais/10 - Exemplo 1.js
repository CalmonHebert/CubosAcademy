const ingresso = false;
const censura = 16;
const idade = 18;

if (ingresso) {
  if (idade >= censura) {
    console.log("Pode assistir!");
  } else {
    console.log("Barrado pela idade!");
  }
} else {
  console.log("Barrado não tem ingresso!");
}