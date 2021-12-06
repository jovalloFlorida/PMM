/*Realizar una función calcularLetraDni, que reciba como parámetro de entrada el
número de ocho dígitos del DNI de un usuario y a partir de éste calcule su letra y
devuelva el número del DNI compuesto por un número de 8 cifras y una letra en
mayúsculas. Para calcular la letra del DNI se dividirá el número de ocho dígitos entre
23 y se asignará la letra correspondiente aplicando la siguiente tabla:*/

const rl = require('readline-sync');

console.clear();
let numeroDNI;

do {
    numeroDNI = rl.question("Introduce el numero de DNI sin la letra: ");
} while (numeroDNI.length != 8);

console.log("La letra de tu DNI es: " + calcularLetraDni(numeroDNI));

function calcularLetraDni(numeroDNI) { //Funcion para calculo de la letra del DNI
    let arrayletras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    let resto = numeroDNI % 23;
    let letraDNI = arrayletras[resto];
    return letraDNI;
}
