/**
 *PMM. ACTIVIDAD EVALUABLE (AE02): Profundizando en JavaScript.
 */
class Usuario {
  //CONSTRUCTOR
  constructor(nombre, primerApellido, segundoApellido, dni) {
    this._nombre = nombre;
    this._primerApellido = primerApellido;
    this._segundoApellido = segundoApellido;
    this._dni = dni;
    this.userName = this.constructor.crearUsuario(
      this._nombre,
      this._primerApellido,
      this._segundoApellido
    );
    this.passWord = this.constructor.crearPassword();
  }
  // GETTERS y SETTERS
  get nombre() {
    return this._nombre;
  }

  set nombre(newNombre) {
    this._nombre = newNombre;
  }

  get primerApellido() {
    return this._primerApellido;
  }

  set primerApellido(newPrimerApellido) {
    this._primerApellido = newPrimerApellido;
  }

  get segundoApellido() {
    return this._segundoApellido;
  }

  set segundoApellido(newSegundoApellido) {
    this._segundoApellido = newSegundoApellido;
  }

  get dni() {
    return this._dni;
  }

  set dni(nuevoDNI) {
    this._dni = nuevoDNI;
  }
  /**
   * Metodo para crear el usuario, devuelva las 2 primeras cifas en minuscula de nombre, primer y segundo apellido y un numero al azar de 4 cifras
   * @returns
   */
  static crearUsuario(nombre, primerApellido, segundoApellido) {
    let numAzar;
    do {
      numAzar = Math.floor(Math.random() * 9999 + 1);
    } while (String(numAzar).length != 4);
    this.userName =
      String(nombre).slice(0, 2).toLowerCase() +
      String(primerApellido).slice(0, 2).toLowerCase() +
      String(segundoApellido).slice(0, 2).toLowerCase() +
      numAzar;
    return this.userName;
  }
  /**
   * Metodo para crear el password de 9 cifras al azar que incluya numeros y letras mayusculas y minusculas
   * @returns
   */
  //STATIC no es accesible desde fuera (privada)
  static crearPassword() {
    this.passWord = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < 9; i++) {
      this.passWord += characters.charAt(
        Math.floor(Math.random() * charactersLength)
      );
    }
    return this.passWord;
  }
  /**
   * Metodo para la validacion del DNI donde devolvemos true si es correcto o fals si es erroneo
   * @returns
   */
  validarDNI() {
    let dniValidado = false;
    var soloNumeroDni;
    var soloLetraDni;
    var letrasAbecedario;
    var regexDni;

    regexDni = /^\d{8}[a-zA-Z]$/; // Expresion regular DNI

    if (regexDni.test(this._dni) == true) {
      soloNumeroDni = this._dni.substr(0, this._dni.length - 1);
      soloLetraDni = this._dni.substr(this._dni.length - 1, 1);
      soloNumeroDni = soloNumeroDni % 23;
      letrasAbecedario = "TRWAGMYFPDXBNJZSQVHLCKET";
      letrasAbecedario = letrasAbecedario.substring(
        soloNumeroDni,
        soloNumeroDni + 1
      );
      if (letrasAbecedario != soloLetraDni) {
        alert(
          "Dni erroneo, la letra del DNI no se corresponde o esta en minuscula"
        );
        dniValidado = false;
      } else {
        dniValidado = true;
      }
    } else {
      alert("Dni erroneo, formato no válido");
      dniValidado = false;
    }
    return dniValidado;
  }
  /**
   * Metodo para sacar por consola el resultado final.
   */
  mostrarUsuario() {
    alert(
      "\nNombre: " +
        this._nombre +
        "\nApellidos: " +
        this._primerApellido +
        " " +
        this._segundoApellido +
        "\nDNI: " +
        this._dni +
        "\nUsername: " +
        Usuario.crearUsuario(
          this._nombre,
          this._primerApellido,
          this._segundoApellido
        ) +
        "\nPassword: " +
        Usuario.crearPassword()
    );
  }
}

console.clear();

let newNombre = prompt("Introduce el nombre: ");
let newPrimerApellido = prompt("Introduce el primer apellido: ");
let newSegundoApellido = prompt("Introduce el segundo apellido: ");
let newDNI, nuevoUsuario;
do {
  newDNI = prompt("Introduce el DNI (8 numeros + 1 letra): ");
  nuevoUsuario = new Usuario(
    newNombre,
    newPrimerApellido,
    newSegundoApellido,
    newDNI
  );
} while (nuevoUsuario.validarDNI() != true);

nuevoUsuario.mostrarUsuario();
