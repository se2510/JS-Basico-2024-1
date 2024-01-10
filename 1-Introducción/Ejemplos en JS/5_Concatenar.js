
// =============== Concatenar cadenas de texto ===============

// Ejemplo 1

var nombre = "Jimena";
var apellido = "García";

var nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

// Ejemplo 2

var nombre = "Deivi";
var apellido = "Cuac";

console.log(nombre + " " + apellido);

// ==================== Concatenar con template strings ====================

// Ejemplo 1
var nombre = "Gabriel";
var apellido = "Balam";

console.log(`${nombre} ${apellido}`);

// Ejemplo 2
var nombre = "Jimena";

console.log(`Hola ${nombre}, ¿cómo estás?`);

// ==================== Concatenar variables ====================

// Ejemplo 1
var nombre = "David Elias";
var edad = 21;
var gustos = "decir 'cuac'"

console.log(`Hola, mi nombre es ${nombre}, tengo ${edad} años y me gusta ${gustos}`);

// Ejemplo 2
var nombre = "Jimena";
var edad = 20;
var gustos = "perritos";

var descripcion = "Hola, mi nombre es " + nombre + ", tengo " + edad + " años y me gustan los " + gustos;
console.log(descripcion);
console.log(typeof descripcion);