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
            <td><Contenido titulo="Un titulo" parrafoUno="Lorem Ipsum" parrafoDos="Lorem Ipsum"/></td>
          </tr>
          </tbody>
        </table>
      </div>
      )
  }
}

export default Principal;