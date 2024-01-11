
// =========================== Paso por valor =========================
// El paso por valor es cuando utilizamos tipos que no son objetos, como datos primitivos.

let x = 10;

function cambiarValor(a){
    a=20;
    return;
}
cambiarValor(x);
console.log(x);

// =========================== Paso por referencia ===========================

const persona = {
    nombre: "Jimena",
    color: "Azul"
}
const arreglo = [1 , 2 , 3];

console.log(persona);

function cambiarValorObjeto(p1,a1) {
    p1.nombre = 'Gabriel';
    p1.color = 'Rojo';
    a1[1]="hola";
}

cambiarValorObjeto(persona, arreglo);
console.log(persona);
console.log(arreglo);
