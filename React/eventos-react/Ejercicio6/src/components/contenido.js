import React from 'react';

let imagenActual = 0;
let miArray = ["https://static4.abc.es/media/play/2018/08/22/homer-simpson-kO2--620x349@abc.JPG", "https://cope-cdnmed.agilecontent.com/resources/jpg/8/3/1596638814038.jpg", "https://static.eldiario.es/clip/5dbe09e7-b7db-4b11-8290-b8fec00cebf2_16-9-aspect-ratio_default_0.jpg", "https://fotografias.lasexta.com/clipping/cmsimages02/2017/04/12/961D606A-AFAD-4570-A898-195633C0B2A2/58.jpg"];

class Contenido extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textoUno: "Anterior",
      textoDos: "Siguiente",
      imagen: miArray[imagenActual]
    };
    this.previusBottom = this.previusBottom.bind(this);
    this.netxBottom = this.netxBottom.bind(this);
  }

  previusBottom(event) {
    event.preventDefault();
    if (imagenActual === 0) {
      imagenActual = miArray.length - 1;
    } else {
      imagenActual--;
    }
    this.setState({
      imagen: miArray[imagenActual]
    });
  }

  netxBottom(event) {
    event.preventDefault();
    if (imagenActual === miArray.length - 1) {
      imagenActual = 0;
    } else {
      imagenActual++;
    }
    this.setState({
      imagen: miArray[imagenActual]
    });
  }

  render() {
    return (
      <div className="pagina">
        <p><img src={this.state.imagen} with="600px" height="300px" alt="imagen"></img></p>
        <button onClick={this.previusBottom}>{this.state.textoUno}</button>
        <button onClick={this.netxBottom}>{this.state.textoDos}</button>
      </div>
    )
  }
}


export default Contenido;

