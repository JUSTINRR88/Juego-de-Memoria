let card1 = [
    "😈","👾", "👽","🤖", "💀", "🙈","🤬","😘","😠","🤡", "😡", "🥵"
]
let card2 = [
    "😈","👾", "👽","🤖", "💀", "🙈","🤬","😘","😠","🤡", "😡", "🥵"
]

let todasLasTarjetas = card1.concat(card2);
//Vinculo con el DOOM

function repartirCartar(){
    let tablero = document.querySelector("#root");
    //cada
    todasLasTarjetas.forEach((ccadCarta)=> {
        //crea un div por cada elemento
        let carta = document.createElement("div");
        carta.classList.add("carta_trasera")
        //le inserta html a mi div 
        // con el "$ Signo de perso puedo agragar variables"
        carta.innerHTML = `<div class="carta_frontal">${ccadCarta}</div> `;
        //le agrega como hijo al elemento cart 
        tablero.appendChild(carta);
    })
}

repartirCartar();
