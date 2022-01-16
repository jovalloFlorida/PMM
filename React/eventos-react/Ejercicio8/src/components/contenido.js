import React from 'react';


class Contenido extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: "Pasa por encima el raton por la imagen",
      imagen: "https://fotografias.lasexta.com/clipping/cmsimages02/2017/04/12/961D606A-AFAD-4570-A898-195633C0B2A2/58.jpg"
    };
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }

  mouseOver(event) {
    event.preventDefault();
    event.target.style.opacity = "0";
    event.target.style.transition = "3s";

  }

  mouseOut(event) {
    event.preventDefault();
    event.target.style.opacity = "20%";
    event.target.style.transition = "3s";
  }

  render() {
    return (
      <div className="pagina">
        <h1>{this.state.titulo}</h1>
        <img onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} src={this.state.imagen} alt="imagen" width="75%" height="75%"></img>
      </div>
    )
  }
}


export default Contenido;
