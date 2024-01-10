
let verdadero = true;
let falso = false;
let ninguno;

// ================================== If, else ==================================

if ( verdadero ) {
    console.log("Verdadero");
}
else {
    console.log("Falso");
}

// ============================== If, else if, else ===============================

if ( ninguno ) {
    console.log("Verdadero");
}
else if ( falso ) {
    console.log("Falso");
}
else {
    console.log("Ninguno");
}

// ============================== Operadores de comparación ===============================

// Ejemplo

let edad = -1;

if ( edad >= 18 ) {
    console.log("Eres mayor de edad");
}
else if ( edad < 18 ) {
    console.log("Eres menor de edad");
}
else {
    console.log("Edad no válida");
}


// Ejercicio: completa el código para que funcione el else

edad = 1;

if ( edad >= 18 && edad <= 100 ) {
    console.log("Eres mayor de edad");
}
else if ( edad < 18 && edad > 0 ) {
    console.log("Eres menor de edad");
}
else {
    console.log("Edad no válida");
}

