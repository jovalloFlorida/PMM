import React from "react";

//CABECERA.
class Cabecera extends React.Component {
  render() {
    return <header>{this.props.titulo}</header>;
  }
}

export default Cabecera;
