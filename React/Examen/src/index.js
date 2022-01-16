import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Cabecera from "./components/cabecera";
import Contenido from "./components/contenido";

//Ejercicio 4
class Index extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Cabecera titulo="Examen DAM 2º Semi" />
        </header>
        <body>
          <Contenido />
        </body>
        <footer>
          <Cabecera titulo="Jose Valverde Llobregat" />
        </footer>
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));
