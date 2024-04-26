/* Exercício 13: Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles,
calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma: 
1 x N = N
2 x N = 2N
3 x N = 3N  */

const prompt = require('prompt-sync')()
let n 
let totalMultiplicando

for (let i = 1; i < 6; i++){
    n = parseInt(prompt(`Digite o ${i}º número: `))
    for(let j = 1; j < n+1; j++){
        totalMultiplicando = j * n
        console.log(`${j} X ${n} = ${totalMultiplicando}`)
    }
}