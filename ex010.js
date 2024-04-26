// Exercícios 10: Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require('prompt-sync')()

let num = parseInt(prompt("Digite um número: "))

if (isNaN(num)){
    console.log('[ERRO] Número inválido')
    return
}

for(let i = 0; i < 10; i++) {
    console.log(num)
}