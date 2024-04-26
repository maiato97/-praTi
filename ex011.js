/* Exercício 11: Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
NEGATIVO.   */

const prompt = require('prompt-sync')()
let num = 1

while (num > 0 && !isNaN(num)) {
    num = parseInt(prompt("Digite um número: "))
    if (num <= 0 || isNaN(num)) {
        return
    }
    if (num % 2 == 0) {
        console.log("Número PAR!")
    } else {
        console.log("Número ÍMPAR!")
    }
}