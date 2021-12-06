import React from "react";

//CABECERA.
class Cabecera extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: "Aqui va mi titulo de Cabecera",
    };
  }

  render() {
    return (
      <div className="encabezado">
        <h1>{this.props.titulo}</h1>
      </div>
    );
  }
}

export default Cabecera;
