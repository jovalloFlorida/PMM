import React from 'react';


//CABECERA.

class Cabecera extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "Ejercicio Evaluable React: AE03",
            imagen: "https://www.entorno-digital.com/images/cabeceras/web.png"
        };
        this.handleImageOnMouseOver = this.handleImageOnMouseOver.bind(this);
        this.handleImageOnMouseOut = this.handleImageOnMouseOut.bind(this);
        this.handleOnDoubleClick = this.handleOnDoubleClick.bind(this);
    }

    //Evento onMouseOver opacidad imagan al 20%
    handleImageOnMouseOver(event) {
        event.preventDefault();
        event.target.style.opacity = "20%";
    }

    //Evento onMosueOut opacidad imagen al 100%
    handleImageOnMouseOut(event) {
        event.preventDefault();
        event.target.style.opacity = "100%";
        this.setState({ nombre: "Ejercicio Evaluable React: AE03" });
    }

    //Evento onDoubleClick cambio del titulo de la etiqueta h1
    handleOnDoubleClick(event) {
        event.preventDefault();
        this.setState({ nombre: "CAMBIO DE TITULO AL DOBLE CLICK" });
        event.target.style.opacity = "100%";
    }

    render() {
        return (
            <div className='cabecera'>
                <div className='imagenFondo' onMouseOver={this.handleImageOnMouseOver} onMouseOut={this.handleImageOnMouseOut} onDoubleClick={this.handleOnDoubleClick}>
                    <h1>{this.state.nombre}</h1>
                </div>
            </div>

        )
    }
}

export default Cabecera;