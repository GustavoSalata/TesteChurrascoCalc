// Carne: 400 gramas por pessoa + de 6 horas - 650 gramas
// Cerveja: 1200ml por pessoa + 6 horas 2000ml
// Refrigerante/Água: 1000ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5


let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular (){

    console.log("calculando...")

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;


    let quantTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas);

    let quantTotalCerveja = cervejaPP(duracao) * adultos;

    let quantTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao)/2 * criancas);


    resultado.innerHTML = `<p>${quantTotalCarne/1000} kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(quantTotalCerveja/355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(quantTotalBebidas/1000)} L de Bebidas</p>`
   
    


}

function carnePP(duracao){

    if(duracao >=6) {
    return 650;
    }else{
        return 400;
    }
}

function cervejaPP(duracao){

    if(duracao >=6) {
    return 2000;
    }else{
        return 1200;
    }
}

function bebidasPP(duracao){

    if(duracao >=6) {
    return 1500;
    }else{
        return 1000;
    }
}