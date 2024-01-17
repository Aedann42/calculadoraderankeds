let vitorias = 900000
let derrotas = 40
let saldoVitorias = menos (vitorias,derrotas)

function menos(numA, numB) {
    let resultadoVitorias = vitorias - derrotas
    return resultadoVitorias
}

if (vitorias < 10) {
    nivel = "Ferro";
} else if (vitorias >= 10 && vitorias <= 20) {
    nivel = "Bronze";
} else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
} else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
} else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
} else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
} else {
    nivel = "Imortal";
}


console.log ("O Herói tem de saldo de vitórias " + saldoVitorias + " e está no nivel " + nivel)