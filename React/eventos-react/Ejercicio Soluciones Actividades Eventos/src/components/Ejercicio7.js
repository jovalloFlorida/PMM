import React from 'react';


class Contenido extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: "Imágenes",
      imagen: "#"
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleMouseOver(event) {
    event.preventDefault();
    event.target.style.height = '250px';
    event.target.style.width = '500px';

  }

  handleMouseOut(event) {
    event.preventDefault();
    event.target.style.height = '100px';
    event.target.style.width = '150px';
    event.target.style.visibility = 'visible';
  }

  render() {
    return (
      <div className="pagina">
        <h1>{this.state.titulo}</h1>
        <div id="caja" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
        </div>
      </div>
    )
  }
}


export default Contenido;
