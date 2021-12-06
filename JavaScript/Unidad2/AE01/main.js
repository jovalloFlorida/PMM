const rl = require('readline-sync');

startMain();

function startMain() { //Menu inicio para elegir opcion a ejecutar
    console.clear();
    console.log("1. Ejecutar Ejercicio 1");
    console.log("2. Ejecutar Ejercicio 2")
    console.log("3. Ejecutar Ejercicio 3\n")

    let numEjercicio = rl.questionInt("Introduce el numero de Ejercicio a ejecutar: ");
    switch (numEjercicio) {
        case 1:
            ejercicio1();
            break;
        case 2:
            ejercicio2();
            break;
        case 3:
            ejercicio3();
            break;
    }
}

function ejercicio1() { //Ejercicio 1

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
    let inicio = rl.questionInt("\nPulsa 0 + <intro> para volver al inicio, 9 + <intro> para Salir: ")
    if (inicio == 0) startMain()
}

function ejercicio2() { //Ejercicio 2
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
    let inicio = rl.questionInt("\nPulsa 0 + <intro> para volver al inicio, 9 + <intro> para Salir: ")
    if (inicio == 0) startMain()
}

function ejercicio3() { //Ejercicio 3
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
    let inicio = rl.questionInt("\nPulsa 0 + <intro> para volver al inicio, 9 + <intro> para Salir: ")
    if (inicio == 0) startMain()
}

