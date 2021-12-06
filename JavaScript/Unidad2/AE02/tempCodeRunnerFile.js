do {
  newDNI = prompt("Introduce el DNI (8 numeros + 1 letra): ");
  nuevoUsuario = new Usuario(
    newNombre,
    newPrimerApellido,
    newSegundoApellido,
    newDNI
  );
} while (nuevoUsuario.validarDNI() != true);