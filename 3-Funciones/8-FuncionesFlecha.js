
// Similares a las funciones de tipo expresion.

// Forma básica de una funcion flecha sin parametros
const funcionFlecha1 = () => {
    console.log("Este es el codiguito de la funcion :D");
};
funcionFlecha1();

// Funcion flecha con parametros
const funcionFlecha2 = (parametros) => {
    console.log("Estos son mis parametros: ", parametros);
};
funcionFlecha2("Juan")

// Funcion flecha si tiene un parametro
const funcionFlecha3 = parametro => {
    console.log("Estos son mis parametros: ", parametro);
};
funcionFlecha3("un parametro")

// Funcion flecha con una linea de codigo
const funcionFlecha4 = (a,b) => a+b;
console.log(funcionFlecha4(1,2));

// Funcion flecha con una linea de codigo
const funcionFlecha5 = (a,b) => { return a+b };
console.log(funcionFlecha5(1,5));