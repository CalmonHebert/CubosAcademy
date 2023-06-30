// Uma empresa de delivery de comida está com dificuldades para organizar a ordem dos pedidos e precisa criar uma rotina que organize seus pedidos em uma fila por odem de prioridade.

const filaDePedidos = ["pedido 12", "pedido 13", "pedido 14"];

// a) Adicione um novo pedido "pedido 15" ao final da fila.
filaDePedidos.push('pedido 15');
console.log(filaDePedidos);
// b) Retire o primeiro pedido "pedido 12" da fila.
filaDePedidos.shift();

// c) Imprima no console a filaDePedidos
console.log(filaDePedidos);