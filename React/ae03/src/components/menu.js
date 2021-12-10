import React from 'react';
import Enlace from './enlace';

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            titulo: "La Ciudad de las Artes y las Ciencias",
            enlace1: "https://www.google.es/",
            enlace2: "https://www.floridaoberta.com/login/index.php",
            enlace3: "https://es.reactjs.org/",
            enlace4: "https://www.w3schools.com/",
            enlace5: "https://developer.mozilla.org/es/docs/Web/JavaScript",
            busquedaGoogle: "Busqueda en Google",
            floridaOberta: "Florida Oberta",
            bibliotecaReact: "Biblioteca de React",
            w3schools: "Pagina referencia w3schools",
            javaScripts: "Biblioteca JavaScript",
            estado: false //Variable para el cambio de estado de los enlaces
        };
        this.handleMenuOnClick = this.handleMenuOnClick.bind(this);
    }

    //Evento para que aparezcan los enlaces y desaparacezcan mediante la variable estado (false/true)
    handleMenuOnClick(event) {
        event.preventDefault();
        //document.getElementById("Prueba").style.visibility = "visible";
        this.setState({ estado: !this.state.estado });
    }

    render() {
        return (
            <nav>
                <h2 onClick={this.handleMenuOnClick}>Menu</h2>
                {this.state.estado && <ul id="Prueba" className="menu">
                    <li>
                        <Enlace enlace={this.state.enlace1} nombre={this.state.busquedaGoogle} />
                    </li>
                    <li>
                        <Enlace enlace={this.state.enlace2} nombre={this.state.floridaOberta} />
                    </li>
                    <li>
                        <Enlace enlace={this.state.enlace3} nombre={this.state.bibliotecaReact} />
                    </li>
                    <li>
                        <Enlace enlace={this.state.enlace4} nombre={this.state.w3schools} />
                    </li>
                    <li>
                        <Enlace enlace={this.state.enlace5} nombre={this.state.javaScripts} />
                    </li>

                </ul>}
            </nav>
        )
    }
}

export default Menu;