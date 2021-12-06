import React from "react";
import Cabecera from "./cabecera";
import Contenido from "./contenido";

class Principal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Atardecer_M%C3%A1laga_2.jpg"
          alt="imagen"
          height="100px"
          width="100px"
        ></img>
      ),
    };
  }

  render() {
    return (
      <div className="principal">
        <Cabecera titulo="Cabecera" />
        <table cellSpacing="2" cellPadding="2" border="1">
          <tbody>
            <tr>
              <td>
                <Contenido
                  titulo="Titulo 1"
                  parrafoUno="Lorem Ipsum 1"
                  parrafoDos="Lorem Ipsum 1"
                />
              </td>
              <td>
                <Contenido
                  titulo="Titulo 2"
                  parrafoUno={this.state.texto}
                  parrafoDos="Lorem Ipsum 2"
                />
              </td>
              <td>
                <Contenido
                  titulo="Titulo 3"
                  parrafoUno="Lorem Ipsum 3"
                  parrafoDos="Lorem Ipsum 3"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <Cabecera titulo="Pie de pagina" />
      </div>
    );
  }
}

export default Principal;
