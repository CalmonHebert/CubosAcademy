const ingresso = true;
const taComOsPais = false;
const censura = 16;
const idade = 18;

if (ingresso && taComOsPais || idade >= censura) {
  console.log("Pode assistir");
} else {
  console.log("Barrado!");
}