import React from "react";

//CABECERA.

class Cabecera extends React.Component {
  render() {
    return <header>{this.props.nombre}</header>;
  }
}

export default Cabecera;
