/*Ejercicio 4 – Realizar un script que muestre el resultado del factorial de un número
introducido por el usuario. Nota: factorial del número 5 = 5*4*3*2*1. Nota: Utilizar For.*/

const rl = require('readline-sync');
console.clear();

let numero;
let resultado=1;

do {
    numero = rl.questionInt("Introduce un numero para calcular el factorial: ");    
} while (numero<=0);

for (var i = 1; i <= numero; i++) {
    resultado = resultado*i;
 }

 console.log("El factorial del numero " + numero + " es: " + resultado);

