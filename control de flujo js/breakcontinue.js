// Ejemplo de break y continue en un bucle for

// Usando break para salir del bucle cuando se alcanza un número específico
for (let i = 1; i <= 10; i++) {
    console.log(i);

    if (i === 5) {
        console.log("Se alcanzó el número 5. Saliendo del bucle con break.");
        break; // Sale del bucle cuando i es igual a 5
    }
}

// Usando continue para saltar la iteración cuando se alcanza un número específico
for (let j = 1; j <= 10; j++) {
    if (j === 3 || j === 7) {
        console.log(`Saltando la iteración cuando j es igual a ${j} con continue.`);
        continue; // Salta a la siguiente iteración cuando j es igual a 3 o 7
    }

    console.log(j);
}
