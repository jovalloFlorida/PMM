/*Ejercicio 6 – Realizar un script que calcule y muestre por consola una combinación al
azar de la lotería Euromillones: 5 primeros números al azar elegidos del 1 al 50 y dos
últimos del 1 al 12. Nota: utilizar Math.random.*/

const rl = require('readline-sync');
console.clear();

let numero;

console.log("La combinacion de la loteria Euromillones son: \n")
for (let i = 1; i <= 5; i++) {
  numero=  Math.floor(Math.random() * 51)+1;
  console.log(numero);
}

console.log("\nComplementarios: \n")

for (let i = 1; i <= 2; i++) {
  numero=  Math.floor(Math.random() * 13)+1;
  console.log(numero);
}

 

