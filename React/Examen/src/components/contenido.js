import React from "react";
import Menu from "./menu";

class Contenido extends React.Component {
  render() {
    return (
      <div className="menu">
        <h1>La Ciudad de las Artes y las Ciencias</h1>
        <p>
          “Ubicada al final del viejo cauce del río Turia, la Ciudad de las
          Artes y las Ciencias es un complejo arquitectónico, cultural y de
          entretenimiento diseñado por Santiago Calatrava y Félix Candela, junto
          con los ingenieros autores del diseño estructural de las cubiertas del
          L'Oceanografic Alberto Domingo y Carlos Lázaro.”
        </p>
        <h2>Edificios</h2>
        <Menu />
      </div>
    );
  }
}

export default Contenido;
