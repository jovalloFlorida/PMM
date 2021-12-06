/*Ejercicio 3– Realizar un script que pregunte al usuario los dos lados de un cuadrado y
responda por consola con su área y perímetro. Además debe informar de qué tipo de
cuadrado es: cuadrado -los cuatro lados iguales- o rectangular –lados iguales dos a
dos-. Nota: se entiende que el usuario introduce siempre números.*/

const rl = require('readline-sync');

console.clear();

let base = rl.questionInt("Introduce la base de un cuadrado?: ");
let altura = rl.questionInt("Introduce la altura del cuadrado?: ");

console.log("El area del cuadrado es: " + (base * altura));
console.log("El perimetro del cuadrado es: " + ((base * 2) + (altura * 2)));

if (base == altura) {
    console.log("El Cuadrado es: cuadrado - los cuatro lados iguales")
} else {
    console.log("El Cuadrado es: rectangular – lados iguales dos a dos")
}

