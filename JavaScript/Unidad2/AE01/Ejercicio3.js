/*Implementar una función array con el nombre, primer apellido por 8 números y una letra por las dos primeras letras del nombre y cada uno de los que será la suma de los ocho dígitos del DNI
Ejemplo:
Nombre: Pepe -> pe
Apellido1: Perez -> pe
Apellido2: Fernandez
DNI: 12345678Z. ->1+2+3+4+5+6+7+8 = 36
Usuario: pepefe36.
Nota: para esta función no se requiere comprobar que el nombre, primer apellido, segundo apellido y DNI introducidos son correctos. La función escribirá en
del navegador y en líneas consecutivas DNI y número de usuario*/

const rl = require('readline-sync');

console.clear();

let arrayDatos = [];

arrayDatos[0] = rl.question("Introduce el nombre: ");
arrayDatos[1] = rl.question("Introduce el primer apellido: ");
arrayDatos[2] = rl.question("Introduce el segundo apellido: ");
arrayDatos[3] = rl.question("Introduce el DNI: ");

mostrarUsuario(arrayDatos);

function mostrarUsuario(arrayDatos) { //Realizamos los calculos para generar la contraseña
    let suma = 0;
    for (let x = 0; x < (arrayDatos[3].length - 1); x++) {
        suma = suma + parseInt((arrayDatos[3].slice(x, x + 1)));
    }
    console.log("Usuario: " + arrayDatos[0].slice(0, 2).toLowerCase() + arrayDatos[1].slice(0, 2).toLowerCase() + arrayDatos[2].slice(0, 2).toLowerCase() + suma);
}