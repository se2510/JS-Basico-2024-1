
// ==================== Argumentos y parametros en las funciones =================


let cuadrado = function ( a ){ // Parametro
    return a*a;
}
console.log(cuadrado(4)); // Argumento

function funcionArguments(){
    console.log(arguments);
}
funcionArguments(2, "Hola que tal", true);



// ========================= Las funciones pueden tener parametros default =======================

let sumar = function (a=1,b=2){
    console.log(arguments[5]);
    return a+b;
}
let resultado = sumar(2,4,5,5,5,6,8,9,4,5,10);
console.log(resultado);


// ========================== OPERADOR REST ========================================
// El operador rest son: ...
// Nos permite aceptar un numero variable de argumentos, y estos se almacenan en un array.

function restar(...numeros){
    for(let i =0 ; i < numeros.length ; i++){
        console.log(numeros[i]);
    }
    return numeros;
}
console.log(restar(5,true,9,"hola",5,7,10.1));