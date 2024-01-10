
// ========================== Operadores Aritmeticos ==========================

let a = 5;
let b = 2;

// Suma
let suma = a + b;
console.log(suma);

// Resta
let resta = a - b;
console.log(resta);

// Multiplicación
let multiplicacion = a * b;
console.log(multiplicacion);

// División
let division = a / b;
console.log(division);

// Módulo
let modulo = a % b;
console.log(modulo);

// Potencia
let potencia = a ** b;
console.log(potencia);

// Raiz
let raiz = a ** (1 / b);
console.log(raiz);

// Incremento
a++;
console.log(a);

// Decremento
b--;
console.log(b);

// ========================== Operadores de Asignación ==========================

let c = 5;
let d = 2;

// Asignación
c = d;
console.log(c);

// Suma
c += d;
console.log(c);

// Resta
c -= d;
console.log(c);

// Multiplicación
c *= d;
console.log(c);

// División
c /= d;
console.log(c);

// Módulo
c %= d;
console.log(c);

// Potencia
c **= d;
console.log(c);

// ========================== Operadores de Comparación ==========================

let e = 5;
let f = 2;
let g = "5";

// Igualdad
console.log(e == g);

// Desigualdad
console.log(e != g);

// Igualdad estricta
console.log(e === g);

// Desigualdad estricta
console.log(e !== g);

// Mayor que
console.log(e > f);

// Menor que
console.log(e < f);

// Mayor o igual que
console.log(e >= f);

// Menor o igual que

console.log(e <= f);

// ========================== Operadores Lógicos ==========================

let h = 5;
let i = 2;
let j = "5";

// AND
console.log(h == j && h === j);

// OR
console.log(h == j || h === j);

// NOT
console.log(!(h == j || h === j));

// ========================== Ejercicios ==========================

// Ejercicio 1

let k = 5;
let l = 2;
let m = 5;

let respuesta = (k == m && k === m) || !(k == m || k === m);
console.log(respuesta);

// Ejercicio 2

console.log(5 + 2 * 3 == 13 && 7 - 2 == 3 + 4 && !false);

// Ejercicio 3

console.log("hola" + " " + "mundo" == "hola mundo")

// Ejercicio 4

console.log(4 > 5 && "a" == "b" || 1 + 1 == 2);

// Ejercicio 5

console.log(4 > 5 && "a" == "b" || 1 + 1 == 2 && !("c" == "d"));

// Ejercicio 6

let num = 10; num *= 2; 
console.log(num > 15);

// Ejercicio 7

console.log(typeof 42 === "number" && typeof "hello" === "sting")

// Ejercicio 8

console.log(!(true && false) && (5 >= 3 && typeof "gato" !== "sting"))