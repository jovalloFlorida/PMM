import React from 'react';
import Cabecera from './cabecera';
import Contenido from './contenido';


class Principal extends React.Component {

  render() {
    return (
      <div className="principal">
        <Cabecera/>
        <table cellSpacing="2" cellPadding="2" border="1">
          <tbody>
          <tr>
            <td><Contenido titulo="Titulo 1" parrafoUno="Lorem Ipsum 1" parrafoDos="Lorem Ipsum 1"/></td>
            <td><Contenido titulo="Titulo 2" parrafoUno="Lorem Ipsum 2" parrafoDos="Lorem Ipsum 2"/></td>
            <td><Contenido titulo="Titulo 3" parrafoUno="Lorem Ipsum 3" parrafoDos="Lorem Ipsum 3"/></td>
          </tr>
          </tbody>
        </table>
      </div>
      )
  }
}

export default Principal;