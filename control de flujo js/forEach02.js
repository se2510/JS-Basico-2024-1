// Creamos un array que contiene números y cadenas de texto
const elementos = [1, "dos", 3, "cuatro", 5];

// Utilizamos el método forEach para iterar sobre cada elemento del array
// y realizar una acción específica para cada tipo de elemento
elementos.forEach((elemento) => {
    // Verificamos si el elemento es un número
    if (typeof elemento === "number") {
        console.log(`El doble de ${elemento} es ${elemento * 2}`);
    }
    // Verificamos si el elemento es una cadena de texto
    else if (typeof elemento === "string") {
        console.log(`La longitud de "${elemento}" es ${elemento.length}`);
    }
});

// Resultado esperado:
// El doble de 1 es 2
// La longitud de "dos" es 3
// El doble de 3 es 6
// La longitud de "cuatro" es 6
// El doble de 5 es 10
