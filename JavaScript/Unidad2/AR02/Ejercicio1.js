/*Ejercicio 1 - Realizar un script que pregunte al usuario cuántos años tiene y le devuelva
por pantalla el año en que nació. Opcional: mejorar script introduciendo alertas para
cuando el usuario introduzca por error letras en lugar de números.*/

const rl = require('readline-sync');

console.clear();

let edad = rl.questionInt("Que edad tienes? ");

if (!isNaN(edad)) {
    let nacimiento = 2021 - edad;
    console.log("El año de nacimiento es: " + nacimiento);  
} else {
    console.clear;
    console.log("El dato introducido no es un numero")
}
