import React from 'react';


//CABECERA.

class Cabecera extends React.Component {
  render() {
    const imgCabecera = require('./img/cabecera.png').default;
    return (
      <div class="encabezado">
        <h1>Cabecera</h1>
        <img src={imgCabecera} width="96%" height="96%"/>
      </div>
      )
  }
}

// El componente se exporta aquí:
export default Cabecera;
