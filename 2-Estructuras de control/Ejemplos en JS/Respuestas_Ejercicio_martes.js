/* ===============================================================================

                                   Ejercicio 1

       Completa el siguiente código para que no permita edades con decimales.

================================================================================== */

edad = 18.5;

if ( edad >= 18 && edad <= 100 && edad % 1 === 0 ) {
    console.log("Eres mayor de edad");
}
else if ( edad < 18 && edad > 0 && edad % 1 === 0 ) {
    console.log("Eres menor de edad");
}
else {
    console.log("Edad no válida");
}

/* ===============================================================================

                                   Ejercicio 2

       Completa el siguiente código para que puedas hacer las operaciones 
                básicas unicamente cambiando la variable operador.

================================================================================== */

let num1 = 5;
let num2 = 10;

let operador = "+";

if ( operador === "+" ) {
    console.log(num1 + num2);
}
else if ( operador === "-" ) {
    console.log(num1 - num2);
}
else if ( operador === "*" ) {
    console.log(num1 * num2);
}
else if ( operador === "/" ) {
    console.log(num1 / num2);
}
else {
    console.log("Operador no válido");
}

/* ===============================================================================

                                   Ejercicio 3

                            --- Operador Ternario ---

        En una página web queremos comprobar que las contraseñas de los
        usuarios tengan una longitud de minimo 8 caracteres. En caso de
        no cumplir con la longitud mínima, queremos mostrar un mensaje.

================================================================================== */

// Pista: puedes usar el método .length para obtener la longitud de una cadena

var palabra = "Hola";
console.log(`La palabra ${palabra} tiene ${palabra.length} caracteres`)

let contrasena = "contrasena";
let respuesta = contrasena.length >= 8 ? "Contraseña válida" : "Contraseña no válida";

console.log(respuesta);

/* ===============================================================================

                                   Ejercicio 4

                                --- Bucle for ---

        Utiliza un bucle for para encontrar la primera letra igual a la 
                        variable "letra" de una cadena.

================================================================================== */

let cadena = "Hola mundo";
let letra = "o";

for (let i = 0; i < cadena.length; i++) {
    if ( cadena[i] === letra ) {
        console.log(`La primera letra ${letra} está en la posición ${i}`);
        break;
    }
}