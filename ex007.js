/* Exercício 07: As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.   */

const prompt = require('prompt-sync')()

let qtdMaça = parseInt(prompt("Digite a quantiade de maças compradas: "))
let valorMaça = 0
let totalCompra = 0

if (qtdMaça >= 1 && qtdMaça < 12) {
    valorMaça = 0.30
    console.log("O valor da maça é: ", valorMaça)
} else if (qtdMaça >= 12) {
    valorMaça = 0.25
    console.log("O valor da maça é: ", valorMaça)
} else {
    console.log("Quantidade de maças inválido.")
}

totalCompra = qtdMaça * valorMaça

console.log("O valor total da compra é: R$", totalCompra)