//? ======================== Ejercicio ========================
/*
?    Crea una funcion que sume una cantidad n de numeros
?    Imprimir el resultado en consola.
*/
//? ======================== Ejercicio ========================

function sumadeTodo(){
    let suma = 0;
    for(let i = 0; i < arguments.length ; i++){
        suma += arguments[i];
    }
    return suma;
}

console.log(sumadeTodo(4,3,10,50,11,10,12,50,60,150));