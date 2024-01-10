
let verdadero = true;
let falso = false;
let ninguno;


// ================================== Operador Ternario ==================================

console.log( verdadero ? "Verdadero" : "Falso" );

console.log( falso ? "Verdadero" : "Falso" );

// ============================== Operador Ternario anidado ===============================

console.log( ninguno ? "Verdadero" : falso ? "Falso" : "Ninguno" );

// ============================== Ejercicio 1 ===============================

// Qué hace el siguiente opereador ternario?

var num = 4;
var opcion1 = "Es par";
var opcion2 = "Es impar";

let respuesta = num % 2 == 0 ? opcion1 : opcion2;

console.log( respuesta );


