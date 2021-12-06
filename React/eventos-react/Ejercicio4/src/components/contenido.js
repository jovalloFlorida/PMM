import React from "react";

//CONTENIDO PAGINA

class Contenido extends React.Component {
  constructor(props) {
    this.handleOut = this.handleOut.bind(this);
    this.handleOver = this.handleOver.bind(this);
  }

  handleOver(event) {
    event.preventDefault();
    event.target.style.backgroundColor = "red";
  }

  handleOut(event) {
    event.preventDefault();
    event.target.style.backgroundColor = "white";
  }

  render() {
    return (
      <div className="pagina">
        <h1>{this.state.titulo}</h1>
        <p id="uno" onMouseOver={this.handleOver} onMouseOut={this.handleOut}>
          {this.state.parrafoUno}
        </p>
        <p id="dos" onMouseOver={this.handleOver} onMouseOut={this.handleOut}>
          {this.state.parrafoDos}
        </p>
        <p id="tres" onMouseOver={this.handleOver} onMouseOut={this.handleOut}>
          {this.state.parrafoTres}
        </p>
        <p
          id="cuatro"
          onMouseOver={this.handleOver}
          onMouseOut={this.handleOut}
        >
          {this.state.parrafoCuatro}
        </p>
        <p id="cinco" onMouseOver={this.handleOver} onMouseOut={this.handleOut}>
          {this.state.parrafoCinco}
        </p>
      </div>
    );
  }
}

// El componente se exporta aquí:
export default Contenido;
