import React from 'react';


//CABECERA.

class Cabecera extends React.Component {
  constructor(props){
    super(props);
    this.state={
      titulo: "Cabecera"
    };
  }

  render() {
    return (
      <div className="encabezado">
        <h1>{this.props.nombre}</h1>
      </div>
      )
  }
}

export default Cabecera;
