/* Exercício 15: Fazer um algoritmo para receber um número decimal e o peso de cada número até
que o usuário digite o número 0. Fazer a média ponderada desses números e pesos respectivos.  */

const prompt = require("prompt-sync")();

let somaNumero = 0;
let somaPeso = 0;
let numero = 1;
let peso = 1;

while (numero != 0) {
  numero = parseFloat(prompt("Digite um número: "));
  if (numero == 0) {
    media = somaNumero / somaPeso;
    console.log("A média dos números digitados é: ", media.toFixed(2));
    return
  }
  peso = parseInt(prompt("Digite o peso deste número: "));
  somaNumero += numero * peso;
  somaPeso += peso;
}