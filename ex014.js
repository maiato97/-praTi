/* Exercício 14: Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.  */

const prompt = require('prompt-sync')()

let soma = 0
let contador = 0
let numero = 1

while (numero != 0) {
    numero = parseFloat(prompt("Digite um número: "))
    soma += numero
    contador++
}

media = soma / contador

console.log("A média dos números digitados é: ", media)