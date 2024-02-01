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
        let cart = document.createElement("div");
        //le inserta html a mi div 
        // con el "$ Signo de perso puedo agragar variables"
        cart.innerHTML = `<div class="carta">${ccadCarta}</div> `;
        //le agrega como hijo al elemento cart 
        tablero.append(cart);
    })
}

repartirCartar();