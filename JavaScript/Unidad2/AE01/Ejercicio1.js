/*Ejercicio 1 - Crear una función usuario que pregunte por pantalla al usuario su nombre, primer apellido, segundo apellido y DNI y devuelva un array donde figure:
Posición 0 del array: el nombre del usuario, compuesto únicamente por letras.
Posición 1 del array: el primer apellido del usuario, compuestos únicamente por letras.
Posición 2 del array: el segundo apellido del usuario, compuesto únicamente por letras.
Posición 3 del array: el número del DNI del usuario, compuesto por un número de 8 cifras –sin letra-.

Si el usuario introduce datos erróneos, la función le preguntará hasta que introduzca los datos correctamente. Se consideran datos erróneos para nombre, primer apellido 
y segundo apellido la introducción de un número. El resto de casos no es necesario implementarlos. 
    Ejemplos:
    Nombre: 123 -> error. Nombre: Paco -> correcto.
    Nombre: paco -> correcto.
    Nombre: p75o -> no es necesario implementarlo.
    Para el DNI se comprobará que el usuario introduce un número y que éste tenga 8 cifras. El resto de casos no es necesario implementarlos. Ejemplos:
    DNI: 12345678 -> correcto. DNI: 12345678910 -> error DNI: 123456 -> error.
    DNI: 12345678M -> no es necesario implementarlo.*/

const rl = require('readline-sync');

console.clear();

let arrayDatos = [];
let arrayMensajes = ["Introduce el nombre: ", "Introduce el primer apellido: ", "Introduce el segundo apellido: "];
let arrayMensajesSalida = ["Nombre: ", "Primer apellido: ", "Segundo apellido: ", "DNI: "];

usuario();

function usuario() { //funcion para la introduccion de datos
    for (x = 0; x < 3; x++) {
        introduceDatos(x, arrayMensajes[x])
    }

    do {
        arrayDatos[3] = rl.question("Introduce el DNI sin la letra: ");
    } while (arrayDatos[3].length != 8 || !comprobarDato(arrayDatos[3]));
    console.log("");

    for (i = 0; i < 4; i++) {
        mensajePantalla(arrayMensajesSalida[i], arrayDatos[i])
    }
    console.log("");
}

function introduceDatos(posicion, mensaje) { //Sacamos por pantalla y almacenamos en arrayDatos
    do {
        arrayDatos[posicion] = rl.question(mensaje);
    } while (comprobarDato(arrayDatos[posicion]));
}

function comprobarDato(dato) { //Comprobacion que el dato introducido es numerico o string
    let valoresAceptados = /^[0-9]+$/;
    if (dato.match(valoresAceptados)) {
        return true;
    } else {
        return false;
    }
}

function mensajePantalla(mensaje, datos) { //funcion para sacar por pantalla los resultados del array
    console.log(mensaje + datos);
}