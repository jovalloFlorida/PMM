/*Ejercicio 2 – Realizar un sript que pregunte al usuario que nota numérica ha obtenido a
final de curso y le devuelva el resultado “en letra”: insuficiente (menos de 5 puntos),
suficiente (entre 5 y 6 puntos), bien (entre 6 y 7 puntos), notable (entre 7 y 8 puntos),
notable alto (entre 8 y 9 puntos) y sobresaliente (más de 9 puntos). Nota: utilizar Switch
y parseInt(). Otra opción: utilizar if..*/

const rl = require('readline-sync');

console.clear();

let nota = rl.questionInt("Que nota numerica ha obtenido a final de curso? ");

if (nota < 5 && nota >= 0) {
    console.log("Has suspendido la asignatura");
} else if (nota >= 5 && nota < 6) {
    console.log("Has sacado un APROBADO");
} else if (nota >= 6 && nota < 7) {
    console.log("Has sacado un BIEN");
} else if (nota >= 7 && nota < 9) {
    console.log("Has sacado un BIEN");
} else if (nota > 9 && nota <= 10) {
    console.log("Has sacado un BIEN");
} else {
    console.log("Esa nota no EXISTE")
}