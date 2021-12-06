import React from "react";

//CONTENIDO PAGINA

class Contenido extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: "Titulo: Ejercicio 5 - Eventos en React",
      parrafoUno: "Este es el parrafo 1",
      parrafoDos: "Este es el parrafo 2",
      parrafoTres: "Este es el parrafo 3",
      parrafoCuatro: "Este es el parrafo 4",
      parrafoCinco: "Este es el parrafo 5",
    };
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  mouseOver(event) {
    event.preventDefault();
    switch (event.target.id) {
      case "uno":
        event.target.style.background = "red";
        break;
      case "dos":
        event.target.style.background = "yellow";
        break;
      case "tres":
        event.target.style.background = "blue";
        break;
      case "cuatro":
        event.target.style.background = "pink";
        break;
      case "cinco":
        event.target.style.background = "green";
        break;
      default:
      //event.target.style.background = "white";
    }
  }

  mouseLeave(event) {
    event.preventDefault();
    event.target.style.background = "white";
  }

  render() {
    return (
      <div className="pagina">
        <p id="uno" onMouseOver={this.mouseOver} onMouseLeave={this.mouseLeave}>{this.state.parrafoUno}</p>
        <p id="dos" onMouseOver={this.mouseOver} onMouseLeave={this.mouseLeave}>{this.state.parrafoDos}</p>
        <p id="tres" onMouseOver={this.mouseOver} onMouseLeave={this.mouseLeave}>{this.state.parrafoTres}</p>
        <p id="cuatro" onMouseOver={this.mouseOver} onMouseLeave={this.mouseLeave}>{this.state.parrafoCuatro}</p>
        <p id="cinco" onMouseOver={this.mouseOver} onMouseLeave={this.mouseLeave}>{this.state.parrafoCinco}</p>
      </div>
    );
  }
}

// El componente se exporta aquí:
export default Contenido;
