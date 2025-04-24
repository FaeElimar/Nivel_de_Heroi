let heroi = "FLOYD";
let forcaHeroi = 8915;
let nivel = "";

if (forcaHeroi < 1000){
    nivel = "Ferro";
}
else if (forcaHeroi >= 1001 && forcaHeroi <= 2000){
    nivel = "Bronze";
}
else if (forcaHeroi >= 2001 && forcaHeroi <= 5000){
    nivel = "Prata";
}
else if (forcaHeroi >= 5001 && forcaHeroi <= 7000){
    nivel = "Ouro";
}
else if (forcaHeroi >= 7001 && forcaHeroi <= 8000){
    nivel = "Platina";
}
else if (forcaHeroi >= 8001 && forcaHeroi <= 9000){
    nivel = "Ascendente";
}
else if (forcaHeroi >= 9001 && forcaHeroi <= 10000){
    nivel = "Imortal";
}
else if (forcaHeroi >= 10001){
    nivel = "Radiante";
}

console.log ("O Herói de nome " + heroi + " está no nível de " + nivel)
