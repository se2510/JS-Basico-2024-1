// Inicializamos una variable para almacenar el número ingresado por el usuario
let numeroIngresado;

// Utilizamos un bucle do-while para asegurarnos de ejecutar el código al menos una vez
do {
    // Solicitamos al usuario que ingrese un número
    numeroIngresado = parseInt(prompt("Ingresa un número mayor que 10:"));

    // Verificamos si el número ingresado es realmente mayor que 10
    if (numeroIngresado <= 10 || isNaN(numeroIngresado)) {
        // Si no es mayor que 10, mostramos un mensaje de error
        console.log("Por favor, ingresa un número válido mayor que 10.");
    }
} while (numeroIngresado <= 10 || isNaN(numeroIngresado));

// Una vez que el usuario ingresa un número válido, mostramos un mensaje de éxito
console.log(`¡Bien hecho! Ingresaste el número ${numeroIngresado} que es mayor que 10.`);
