/* Exercício 01: Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
valor correspondente em graus Fahrenheit.   */

const prompt = require('prompt-sync')()

function conversorTemperatura(celsius, fahrenheit){
    celsius = prompt("Digite a temperadura em grau Celsius: ")
    fahrenheit = (celsius * 1.8) + 32

    console.log(`${celsius}º graus Celsius, equivale a ${fahrenheit}º graus Fahrenheit.`)
}
let grauCelsius
let grauFahrenheit

conversorTemperatura(grauCelsius, grauFahrenheit)

