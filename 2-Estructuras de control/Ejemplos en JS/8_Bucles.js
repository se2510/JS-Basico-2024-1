
// =========================== for ===========================

// Ejemplo 1 =========================================
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// Ejemplo 2 =========================================
for (let i = 2; i < 20; i++) {
    
    if ( i % 2 == 0 ) {
        console.log(i);
    }
}

// Ejemplo 3 =========================================
cadena = "Hola mundo";
for (let i = cadena.length - 1; i >= 0; i--) {
    console.log(cadena[i]);
}

// Ejemplo 4 =========================================
let limite=90000, contador=1;

for(let i=1; i<=limite && contador*i<=90000; i++)
    contador *= i;

// console.log("El factorial de " + i + " es: " + contador); error
console.log("El factorial es: " + contador);


// Ejercicio 1: =========================================
// A partir del ejemplo 2, suma los primeros 20 números impares.

let caja = 0;
for (let i = 2; i < 20; i++) {
    
    if ( i % 2 != 0 ) {
        caja += i;
    }
}

console.log(caja);