import React from "react";

//CONTENIDO PAGINA

class Contenido extends React.Component {
  constructor(props) {
    super(props);
    this.state = { titulo: "Click en el titulo" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    event.target.style.color = "red";
    event.target.style.background = "Black";
  }

  render() {
    return (
      <div className="pagina">
        <h1 onClick={this.handleClick}>{this.state.titulo}</h1>
      </div>
    );
  }
}

// El componente se exporta aquí:
export default Contenido;
