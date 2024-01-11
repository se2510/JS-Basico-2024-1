
// ============================= RETURN ========================

function funcionsita(a,b){
    return a+b; // El valor que retorna la funcion.
    // Si no agregasemos un return, JS lo agrega de forma automatica y regresa UNDEFINED por defecto.
}

console.log(funcionsita(1,2));


// ============= Multiples returns :D =====================

let lechuga = true;

function sanduich(){
    if(lechuga == true){
        return "Efectivamente, el sanduich tiene lechuga";
        // Usar el return hace que la funcion termine la ejecucion.
    }else{
        return "El sanduich solo tiene jamon y queso :C";
    }
    console.log("Este codigo no se ejecuta :(")
}
console.log(sanduich())


