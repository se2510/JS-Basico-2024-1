
// ================================== Hoisting ==================================

// Var ----------------------------------->

nombre = "Jimena";
console.log(nombre);

apellido = "García";
console.log(apellido);

var nombre;

nombre = "Deivi";
console.log(nombre);

apellido = "Cuac";
console.log(apellido);

var nombre = "Gabo";
console.log(nombre);

// Let ----------------------------------->

//ciudad = "CDMX"; // Error: Cannot access 'ciudad' before initialization

let ciudad = "Bogotá";
console.log(ciudad);

ciudad = "Medellín";
console.log(ciudad);

//let ciudad = "Medellín"; // Error: Identifier 'ciudad' has already been declared

// Const ----------------------------------->

//pais = "Colombia"; // Error: Cannot access 'pais' before initialization

const pais = "México";
console.log(pais);

//pais = "México"; // Error: Assignment to constant variable.

//const pais = "México"; // Error: Identifier 'pais' has already been declared


// ================================== Scope ==================================

if (true) {
    var saludo = "Hola";
    let despedida = "Adiós";
    console.log(saludo);
    console.log(despedida);
}

console.log(saludo);
//console.log(despedida); // Error: despedida is not defined
