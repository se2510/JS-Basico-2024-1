// Inicializamos una variable para almacenar el número actual
let numeroActual = 1;

// Definimos el límite máximo de números a evaluar (en este caso, 10)
const limiteMaximo = 10;

// Comenzamos el bucle while
while (numeroActual <= limiteMaximo) {
    // Verificamos si el número actual es par o impar
    if (numeroActual % 2 === 0) {
        // Si es par, mostramos un mensaje indicando que es par
        console.log(`El número ${numeroActual} es par.`);
    } else {
        // Si es impar, mostramos un mensaje indicando que es impar
        console.log(`El número ${numeroActual} es impar.`);
    }

    // Incrementamos el número actual para pasar al siguiente
    numeroActual++;
}

// Fin del programa
