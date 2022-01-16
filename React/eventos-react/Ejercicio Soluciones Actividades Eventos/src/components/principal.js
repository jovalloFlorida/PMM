import React from 'react';
import Cabecera from './cabecera';
import Contenido from './contenido';

//EJEMPLO STATE.

class Principal extends React.Component {

  render() {
    return (
      <div className="principal">
        <Cabecera nombre="Mi cabecera desde props"/>
            <Contenido />
      </div>
      )
  }
}

export default Principal;