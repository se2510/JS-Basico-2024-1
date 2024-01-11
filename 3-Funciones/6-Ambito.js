// =============================== AMBITO ==========================

let variableGlobal = "Soy global" // Este es el ambito global, puede ser accedido en todas partes

function cuac(){
    let variableLocal = 20;
    console.log(variableLocal); // Solo accedido dentro de su bloque
    console.log(variableGlobal);
}
//console.log(variable);
cuac()
console.log(variableGlobal);