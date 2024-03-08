// Selección de todas las cartas del juego
let todas_las_carta = document.querySelectorAll(".carta_trasera");

// Agregar evento de clic a cada carta
todas_las_carta.forEach((cada_elemento) => {
    cada_elemento.addEventListener("click", () => {
        
        // Seleccionar todas las cartas descubiertas
        let cartas_descubiertas = document.querySelectorAll(".activar");
        // Contar el número total de cartas descubiertas
        // Comprobar si hay menos de dos cartas descubiertas
        if (cartas_descubiertas.length < 2) {
            // Agregar la clase "activar" a la carta clicada
            cada_elemento.classList.add("activar");
            // Volver a seleccionar todas las cartas descubiertas (incluida la nueva)
            cartas_descubiertas = document.querySelectorAll(".activar");
            
            // Si ya hay una carta descubierta
            if (cartas_descubiertas.length == 2) {
                    let carta1 = cartas_descubiertas[0].innerHTML;
                    let carta2 = cartas_descubiertas[1].innerHTML;
                    if (carta1 == carta2) {
                        console.log("verdadero");
                        cartas_descubiertas.forEach((carta)=>{
                            carta.innerHTML ="";
                            carta.classList.remove("activar");
                            carta.classList.add("ocultar");
                        })
                          // Esperar un segundo y luego ocultar las cartas descubiertas

                    }else{
                        setTimeout(() => {
                            cartas_descubiertas.forEach((cada_carta_descubierta) => {
                                cada_carta_descubierta.classList.remove("activar");
                            });
                        },1000);
                        console.log("falso");
                    }
            }
               } else {
            // Si ya hay dos cartas descubiertas, no hacer nada por ahora
                     console.log("asdasd");
        }
    });
});
