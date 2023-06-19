const primeiroNome = "Mario";
const sobrenome = "Duarte";
const apelido = "Louco";

if (apelido) {
  console.log(apelido);
} else if (sobrenome) {
  console.log(primeiroNome + ' ' + sobrenome);
} else {
  console.log(primeiroNome);
}
