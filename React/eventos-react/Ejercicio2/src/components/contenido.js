import React from "react";

//CONTENIDO PAGINA

class Contenido extends React.Component {
  constructor(props) {
    super(props);
    this.state = { parrafo: "Este es el parrafo " };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    event.target.style.display = "none";
  }

  render() {
    return (
      <div className="pagina">
        <p onClick={this.handleClick}>{this.state.parrafo}1</p>
        <p>{this.state.parrafo}2</p>
        <p>{this.state.parrafo}3</p>
        <p>{this.state.parrafo}4</p>
        <p>{this.state.parrafo}5</p>
      </div>
    );
  }
}

// El componente se exporta aquí:
export default Contenido;
