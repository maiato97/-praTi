/* Exercício 08: Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.   */

const prompt = require('prompt-sync')()

let n1 = parseInt(prompt("Digite o primeiro valor: "))
let n2 = parseInt(prompt("Digite o segundo valor: "))

let menorValor
let maiorValor

if (n1 > n2 && n1 != undefined && n2 != undefined) {
    maiorValor = n1
    menorValor = n2
    console.log(`O valores em ordem crescente ficam: ${menorValor}, ${maiorValor}`)
} else if (n2 > n1 && n1 != undefined && n2 != undefined) {
    maiorValor = n2
    menorValor = n1
    console.log(`O valores em ordem crescente ficam: ${menorValor}, ${maiorValor}`)
} else if (n1 === n2) {
    console.log("Os valores NÃO podem ser iguais.")
} else {
    console.log("[ERRO] Valores inválidos.")
}