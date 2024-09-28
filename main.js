/*
## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída
*/
let saldoVitorias = calculaRank(100,100)

console.log (saldoVitorias)


function calculaRank(vitorias, derrotas){
    const saldoVitorias = vitorias - derrotas

    if ( saldoVitorias <= 10) {
        nivel = "Ferro"
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20){
        nivel = "Bronze"       
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50){
        nivel = "Prata"       
    }else if (saldoVitorias >= 51 && saldoVitorias <= 80){
        nivel = "Ouro"       
    }else if (saldoVitorias >= 81 && saldoVitorias <= 90){
        nivel = "Diamante"       
    }else if (saldoVitorias >= 91 && saldoVitorias <= 100){
        nivel = "Lendário"
    }else{
        nivel = "Imortal"
    }
    return ("O Herói tem saldo de " + saldoVitorias + " está no nivel de " + nivel)
}