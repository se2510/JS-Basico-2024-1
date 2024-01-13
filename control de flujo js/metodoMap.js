// Creamos un array que contiene cadenas de texto
const palabras = ["Hola", "Mundo", "JavaScript", "Map", "Ejemplo"];

// Utilizamos el método map para crear un nuevo array con la longitud de cada palabra
const longitudes = palabras.map((palabra) => palabra.length);

// Mostramos el nuevo array resultante
console.log(longitudes);

// Resultado esperado:
// [4, 5, 10, 3, 7]
