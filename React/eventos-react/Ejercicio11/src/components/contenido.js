import React from 'react';


class Contenido extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: "La imagen a los 2 segundos pasa al 20% de Opacidad",
      imagen: "https://fotografias.lasexta.com/clipping/cmsimages02/2017/04/12/961D606A-AFAD-4570-A898-195633C0B2A2/58.jpg"
    };
    this.imageLoad = this.imageLoad.bind(this);
  }

  imageLoad(event) {
    event.preventDefault();
    setTimeout(function () {
      event.target.style.transition = "1s";
      event.target.style.opacity = "20%";
    }, 3000)

  }


  render() {
    return (
      <div className="pagina">
        <h1>{this.state.titulo}</h1>
        <img onLoad={this.imageLoad} src={this.state.imagen} height="50%" width="50%" alt="imagen"></img>
      </div>
    )
  }
}


export default Contenido;
