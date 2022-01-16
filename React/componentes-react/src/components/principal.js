import React from 'react';
import Cabecera from './cabecera';
import Contenido from './contenido';

//PRINCIPAL.

class Principal extends React.Component {
  render() {
    return (
      <div class="principal">
        <Cabecera />
        <Contenido />
      </div>
      )
  }
}

// El componente se exporta aquí:
export default Principal;