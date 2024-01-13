// Ejemplo de switch case para tipos de frutas

const fruta = "manzana"; // Puedes cambiar este valor para probar diferentes casos

let tipo;

switch (fruta) {
    case "manzana":
        tipo = "fruta de hueso";
        break;
    case "plátano":
        tipo = "baya";
        break;
    case "uva":
    case "fresa":
    case "arándano":
        tipo = "fruta de baya";
        break;
    default:
        tipo = "desconocido";
}

console.log(`La ${fruta} es una ${tipo}.`);
