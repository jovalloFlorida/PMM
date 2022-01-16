/*Ejercicio 8 – Realizar un script para que el usuario introduzca una palabra y le
responda por pantalla si esa palabra es un palíndromo. Nota: Palíndromo: palabra que
se lee igual de atrás hacia adelante. Ejemplos: Ana, Otto.*/

const rl = require('readline-sync');
console.clear();

function esPalindromo(texto) {
  return texto.split('').reverse().join('') == texto
}

let texto = rl.question("Introduce una palabra y te dire si es palindromo: ");

if (esPalindromo(texto)==true){
  console.log("La palabra es Palindromo");
}else{
  console.log("La palabra NO es Palindromo");
}

