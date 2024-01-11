
// Es util cuando se combina JS y HTML 

// ================= Declaracion de una funcion de tipo expresion ===================
const suma = function (a ,b){
    return a+b;
}

let resultado = suma(3,3);
console.log(resultado);



// ============== Diferencias con las funciones comunes ====================
// ==============               HOISTING                ====================

// ------------- Funcion normal
console.log(funcionNormal());
function funcionNormal(){
    return ("Hola desde la funcion normal :D");
}
console.log(funcionNormal());

// ------------- Funcion de tipo expresion

//console.log(funcionExpresion()); // Esto lanza un error.
const funcionExpresion = function (){
    return "Esta es una funcion de tipo expresion :)";
}
console.log(funcionExpresion());