import React from 'react';

let imagenActual = 0;
let miArray = ["https://static4.abc.es/media/play/2018/08/22/homer-simpson-kO2--620x349@abc.JPG",
    "https://cope-cdnmed.agilecontent.com/resources/jpg/8/3/1596638814038.jpg",
    "https://static.eldiario.es/clip/5dbe09e7-b7db-4b11-8290-b8fec00cebf2_16-9-aspect-ratio_default_0.jpg",
    "https://fotografias.lasexta.com/clipping/cmsimages02/2017/04/12/961D606A-AFAD-4570-A898-195633C0B2A2/58.jpg",
    "https://uh.gsstatic.es/sfAttachPlugin/getCachedContent/id/1195159/width/730/height/456"];

class Contenido extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            texto: "Carrusel de imagenes con intervalo cada 0.5 segundos",
            imagen: miArray[imagenActual]
        };
        this.handleImageOnLoad = this.handleImageOnLoad.bind(this);
    }

    //Evento carrusel imagens del array con intervalo de 0.5 segundos
    handleImageOnLoad(event) {
        event.preventDefault();
        if (imagenActual === miArray.length - 1) {
            imagenActual = 0;
        } else {
            imagenActual++;
        }
        setTimeout(
            () => this.setState({ imagen: miArray[imagenActual] }),
            1000);
    }

    render() {
        return (
            <div className='contenido'>
                <p>{this.state.texto}</p>
                <img onLoad={this.handleImageOnLoad} src={this.state.imagen} with="600px" height="300px" alt="imagen"></img>
            </div>
        )
    }
}

export default Contenido;