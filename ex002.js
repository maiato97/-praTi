// Exercício 02: Porcentagem sob total de eleitores.

let totalEleitores = 500
let votoBranco = 40
let votoNulo = 50
let votoValido = 410
console.log(`Sobre o total de ${totalEleitores} eleitores, temos:`)

votoBranco = (votoBranco / totalEleitores) * 100
console.log(votoBranco, "% de votos brancos;")

votoNulo = (votoNulo / totalEleitores) * 100
console.log(votoNulo, "% de votos nulos;")

votoValido = (votoValido / totalEleitores) * 100
console.log(votoValido, "% de votos válidos.")


