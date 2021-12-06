import React from 'react';
import Cabecera from './cabecera';
import Contenido from './contenido';

//EJEMPLO STATE.

class Principal extends React.Component {

  render() {
    return (
      <div className="principal">
        <Cabecera nombre="Ejercicio de Eventos React II: Ejercicio 6" />
        <Contenido />
      </div>
    )
  }
}

export default Principal;