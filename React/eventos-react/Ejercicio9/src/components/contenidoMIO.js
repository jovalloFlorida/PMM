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
        event.target.style.transition = "2s";
        event.target.style.marginLeft = "260px";

    }
    mouseOut(event) {
        event.preventDefault();
        event.target.style.transition = "2s";
        event.target.style.marginLeft = "0px";
    }

    render() {
        return (
            <div className="pagina">
                <h1>{this.state.titulo}</h1>
                {/* Asi no sale es como lo he hecho yo */}
                <img onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} src={this.state.imagen} alt="imagen Homer" width="25%" height="25%"></img>
                {/* Asi lo ha hecho Paco y funciona */}
                {/*<div id="caja1" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}></div>*/}
            </div>
        )
    }
}


export default Contenido;
