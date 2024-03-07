// Selección de todas las cartas del juego
let todas_las_carta = document.querySelectorAll(".carta_trasera");

// Agregar evento de clic a cada carta
todas_las_carta.forEach((cada_elemento) => {
    cada_elemento.addEventListener("click", () => {
        
        // Seleccionar todas las cartas descubiertas
        let cartas_descubiertas = document.querySelectorAll(".activar");
        // Contar el número total de cartas descubiertas
        let total_descubiertas = cartas_descubiertas.length;

        // Comprobar si hay menos de dos cartas descubiertas
        if (total_descubiertas < 2) {
            // Agregar la clase "activar" a la carta clicada
            cada_elemento.classList.add("activar");
            // Volver a seleccionar todas las cartas descubiertas (incluida la nueva)
            cartas_descubiertas = document.querySelectorAll(".activar");
            
            // Si ya hay una carta descubierta
            if (total_descubiertas == 1) {
                // Esperar un segundo y luego ocultar las cartas descubiertas
                setTimeout(() => {
                    cartas_descubiertas.forEach((cada_carta_descubierta) => {
                        cada_carta_descubierta.classList.remove("activar");
                    });
                }, 1000);
            }
        } else {
            // Si ya hay dos cartas descubiertas, no hacer nada por ahora
            console.log("asdasd");
        }
    });
});
