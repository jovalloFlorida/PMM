import React from 'react';
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
                        <a href={this.state.enlace1} target="_blank" rel="noreferrer">{this.state.busquedaGoogle}</a>
                    </li>
                    <li>
                        <a href={this.state.enlace2} target="_blank" rel="noreferrer">{this.state.floridaOberta}</a>
                    </li>
                    <li>
                        <a href={this.state.enlace3} target="_blank" rel="noreferrer">{this.state.bibliotecaReact}</a>
                    </li>
                    <li>
                        <a href={this.state.enlace4} target="_blank" rel="noreferrer">{this.state.w3schools}</a>
                    </li>
                    <li>
                        <a href={this.state.enlace5} target="_blank" rel="noreferrer">{this.state.javaScripts}</a>
                    </li>

                </ul>}
            </nav>
        )
    }
}

export default Menu;