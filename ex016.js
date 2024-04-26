/* Exercício 16: Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.    */

let contador = 0
let numero = 101
let contadorNumerosPrimos
let dividoresComRestoZero

while (contador <= 50){
    contadorNumerosPrimos = 2
    dividoresComRestoZero = 0
    while (contadorNumerosPrimos < numero){
        if (numero % contadorNumerosPrimos == 0){
            dividoresComRestoZero ++ 
        }
        contadorNumerosPrimos ++
    } 
    if (dividoresComRestoZero == 0){
        console.log(numero)
        contador++
    }  
    numero++ 
}



