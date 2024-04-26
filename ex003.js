// Exercício 03: Operações em 4 números inteiros:
/*  ● Some 25 ao primeiro inteiro;
    ● Triplique o valor do segundo inteiro;
    ● Modifique o valor do terceiro inteiro para 12% do valor original;
    ● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
    dos primeiros três inteiros.    */

const prompt = require('prompt-sync')()

let n1 = parseInt(prompt("Digite o primeiro número: "))
let n2 = parseInt(prompt("Digite o segundo número: "))
let n3 = parseInt(prompt("Digite o terceiro número: "))
let n4 = n1+n2+n3

console.log("O primeiro número somado de 25 é: ", n1 + 25)
console.log("O triplo do segundo número é: ", n2 * 3)
console.log("12% do valor do terceiro número é: ", n3 * 0.12)
console.log("A soma dos números digitados originais é: ", n4)