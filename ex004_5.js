/* Exercício 04: Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi aprovado’, somente 
se o aluno foi aprovado (considere 6.0 a nota mínima para aprovação).

   Exercício 05: Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
média calculada seja menor que 6,0. */

const prompt = require('prompt-sync')()

let nota1 = parseFloat(prompt("Digite a primeira nota: "))
let nota2 = parseFloat(prompt("Digite a segunda nota: "))
let media = ((nota1 + nota2) / 2)

if (media >= 6.0 && media <= 10.0) {
    console.log("A sua média do semestre é: ", media)
    console.log("Parabéns, você foi APROVADO!")
} else if (media > 0.0 && media < 6) {
    console.log("A sua média do semestre é: ", media)
    console.log("REPROVADO!")
} else {
    console.log("[ERRO] Nota inválida")
}

