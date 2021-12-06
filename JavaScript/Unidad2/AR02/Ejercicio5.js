/*Ejercicio 5 – Realizar un script que muestre por consola la tabla de multiplicar del
número introducido por el usuario. Mostrar la información de la siguiente manera:*/

const rl = require('readline-sync');
console.clear();

let numero;

do {
    numero = rl.questionInt("Introduce un numero para calcular su taba de multipllicar: ");    
} while (numero<=0);

  for (let i = 1; i <= 10; i++) {
    console.log(numero + " x " + i +" = "+(numero*i));
  }

 

