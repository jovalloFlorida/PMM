import React from 'react';
import Menu from './menu';

//CABECERA.

class Contenido extends React.Component {

    constructor(props){
        super(props);
        this.state={
            titulo:"La Ciudad de las Artes y las Ciencias",
            parrafo:"Ubicada al final del viejo cauce del río Turia, la Ciudad de las Artes y las Ciencias es un complejo arquitectónico, cultural y de entretenimiento diseñado por Santiago Calatrava y Félix Candela, junto con los ingenieros autores del diseño estructural de las cubiertas del L'Oceanografic Alberto Domingo y Carlos Lázaro.",
            contenidoMenu:"Edificios" 
        }
    }

  render() {
    return (
        <main>
            <article className="contenido">
                <h1>{this.state.titulo}</h1>
                <p>{this.state.parrafo}</p> 
            </article>
            <aside>
                <h2>{this.state.contenidoMenu}</h2>
                <Menu />
            </aside>
        </main>
      )
  }
}

export default Contenido;