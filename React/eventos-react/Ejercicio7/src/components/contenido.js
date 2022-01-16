import React from 'react';


class Contenido extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: "Pasa por encima el raton por la imagen",
      imagen: "#"
    };
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }

  mouseOver(event) {
    event.preventDefault();
    event.target.style.height = '250px';
    event.target.style.width = '500px';

  }

  mouseOut(event) {
    event.preventDefault();
    event.target.style.height = '100px';
    event.target.style.width = '150px';
    event.target.style.visibility = 'visible';
  }

  render() {
    return (
      <div className="pagina">
        <h1>{this.state.titulo}</h1>
        <img src="https://fotografias.lasexta.com/clipping/cmsimages02/2017/04/12/961D606A-AFAD-4570-A898-195633C0B2A2/58.jpg" with="150" height="100" alt="Imagen Homer" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} />
      </div>
    )
  }
}


export default Contenido;
