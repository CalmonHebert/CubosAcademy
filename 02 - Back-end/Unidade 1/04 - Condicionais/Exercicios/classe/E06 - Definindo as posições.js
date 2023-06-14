const alturaEmCm = 201;

if (alturaEmCm < 180) {
  console.log("Reprovado");
} else if (alturaEmCm <= 185) {
  console.log("Líbero");
} else if (alturaEmCm <= 196) {
  console.log("Ponteiro");
} else if (alturaEmCm <= 205) {
  console.log("Oposto");
} else {
  console.log("Central");
}