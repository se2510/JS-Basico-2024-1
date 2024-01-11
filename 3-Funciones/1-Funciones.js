/*
    Una funcion es un codigo reutilizable que se puede mandar a llamar varias veces.
*/


// Palabra reservada function
function saludar(){
    console.log("Hola desde mi primera funcion! :D");
}


let nombre = "Gabriel";

saludar();
console.log(saludar());


// ======================= Declarando una funcion con parámetros ===============================

function miFuncion( a , b ){ // Parámetros
    console.log("La suma es: " + a+b);
    console.log("Hola desde la funcion ejecutada");
}

miFuncion(2); // Argumentos.
console.log(5+5+"La suma es: ", 5+5);

// =============== Ejercicio 1 ================
// Calcular el area de un circulo
// Formula = PI * radio * radio

function calcularAreaCirculo(radio){
    return "El valor del area es: "+ (3.1416 * radio * radio);
}
let radio = 2;
console.log(calcularAreaCirculo(radio));
let resultado = calcularAreaCirculo(radio);
console.log(resultado);
calcularAreaCirculo(radio);
let radio2 = 3;
calcularAreaCirculo(radio2);

// ================ Ejemplo 2 =====================

function esNumeroPar(numero){
    if ( numero % 2 == 0 ){
        return true;
    }else{
        return false;
    }
}

let numeroP = 9;

if(esNumeroPar(numeroP)){
    console.log("Es numero par")
}else{
    console.log("No es numero par");
}

