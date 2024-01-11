/* =============== Ejercicio 1 ===============

    Crea una función que calcule el promedio de una cantidad n de numeros.

    Imprime en consola el resultado.

*/// =============== --------- ===============

function promedio(){
    let suma = 0;
    for(let i = 0; i < arguments.length ; i++){
        suma += arguments[i];
    }
    let promedio = (suma/arguments.length);
    return promedio;
}
console.log(promedio(10,5));


/* =============== Ejercicio 2 ===============

    Crea una calculadora que calcule la suma, resta, multiplicacion y división de dos números. 
    Usa estructuras de control, y funciones para cada operación.

    Imprime en consola el resultado de cualquier operación.

*/// =============== --------- ===============

function suma(a=0,b=0){
    return "La suma es: "+(a+b);
}
function resta(a=0,b=0){
    return a-b;
}
function multi(a=0,b=0){
    return a*b;
}
function division(a=0,b=0){
    if( a / b === 0){
        console.log("BEEEEP, error!, no se puede dividir entre cero");
        return 0;
    }else{
        return a/b;
    }
}

let operacion = "suma"
switch(operacion){
    case "suma":
        console.log(suma(1,2));
        break;
    case "resta":
        console.log(resta(5,2));
        break;
    case "multi":
        multi(4,4);
        break;
    case "divi":
        division(8,2);
        break;
}


/* =============== Ejercicio 3 ===============

    Crea una función que concatene una cantidad n de cadenas.
    Imprime en consola el resultado.

*/// =============== --------- ===============

function concCadenas(){
    let resultado = "";
    for(let i = 0; i < arguments.length ; i++){
        resultado += arguments[i]+" ";
    }
    return resultado;
}
console.log(concCadenas("hola","Mundo","como","estas","?",":D"));
