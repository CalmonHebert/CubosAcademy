const jogada1 = "papel";
const jogada2 = "tesoura";

if ((jogada1 === "pedra" && jogada2 === "tesoura") || (jogada2 === "pedra" && jogada1 === "tesoura")) {
  console.log("Vencedor: Pedra");
} else if ((jogada1 === "papel" && jogada2 === "pedra") || (jogada2 === "papel" && jogada1 === "pedra")) {
  console.log("Vencedor: Papel");
} else if ((jogada1 === "tesoura" && jogada2 === "papel") || (jogada2 === "tesoura" && jogada1 === "papel")) {
  console.log("Vencedor: Tesoura");
} else if ((jogada1 === "pedra" && jogada2 === "pedra") || jogada2 === "pedra" && jogada1 === "pedra") {
  console.log("Empate!");
} else if ((jogada1 === "papel" && jogada2 === "papel") || (jogada2 === "papel" && jogada1 === "papel")) {
  console.log("Empate!");
} else {
  console.log("Empate!");
}