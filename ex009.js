// Exercício 09: Escreva um algoritmo que leia o código de origem de um produto e imprima a região do mesmo.

const prompt = require('prompt-sync')()

console.log("Código de origem: \n\n1 - Sul \n2 - Norte \n3 - Leste \n4 - Oeste \n5 ou 6 - Nordeste \n7, 8 ou 9 - Sudeste \n10 até 20 - Centro-Oeste \n25 até 50 - Noroeste \nFora dos Intervalos acima - Importado.\n")

let regiao
let codRegiao = parseInt(prompt("Digite o código da região conforme as informações acima: "))

switch(codRegiao){
    case 1:
        regiao = 'Sul'
        break
    case 2:
        regiao = 'Norde'
        break
    case 3:
        regiao = 'Leste'
        break
    case 4:
        regiao = 'Oeste'
        break
    default:
        if (codRegiao >= 5 && codRegiao <= 6){
            regiao = 'Nordeste'
        } else if (codRegiao >= 7 && codRegiao <= 9){
            regiao = 'Sudeste'
        } else if (codRegiao >= 10 && codRegiao <= 20){
            regiao = 'Centro-Oeste'
        } else if (codRegiao >= 25 && codRegiao <= 50){
            regiao = 'Noroeste'
        } else (
            regiao = 'Importado'
        )
}

if (isNaN(codRegiao)){
    console.log("Erro, número inválido")
    return
} 
    console.log(regiao)
