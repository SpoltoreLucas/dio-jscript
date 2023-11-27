const nomeHeroi = "Lucas"
let xp = 99001
let ranking

if (xp <= 1000) {
    ranking = "Ferro"
} else if ((xp >= 1001) && (xp <= 2000)){ 
    ranking = "Bronze"
} else if ((xp >= 2001) && (xp <= 6000)){ 
    ranking = "Prata"
} else if ((xp >= 6001) && (xp <= 7000)){ 
    ranking = "Ouro"
} else if ((xp >= 7001) && (xp <= 8000)){ 
    ranking = "Platina"
} else if ((xp >= 8001) && (xp <= 9000)){ 
    ranking = "Ascendente"
} else if ((xp >= 9001) && (xp <= 10000)){ 
    ranking = "Imortal"
} else {ranking = "Radiante"}

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + ranking)