import React from 'react';

//CONTENIDO PAGINA

class Contenido extends React.Component {
  render() {
    return (
      <div class="pagina">
            <p>AQUI VA MI CONTENIDO</p>
            <form>
            <table border="4px" black>
              <tr>
                <td align="right">Nombre:</td>
                <td><input type="text" id="nombre" /></td>
              </tr>
              <tr>
                <td align="right">Primer Apellido:</td>
                <td><input type="text" id="primerApellido" /></td>
              </tr>
              <tr>
                <td align="right">Segundo Apellido:</td>
                <td><input type="text" id="segundoApellido" /></td>
              </tr>
              <tr>
                <td align="right">Comentarios:</td>
                <td><textarea id="comentario" rows="10" cols="21"></textarea></td>
              </tr>
              <tr>
                <td></td>
                <td><input type="submit" value="Submit" id="btn-enviar" /></td>
              </tr>
            </table>
          </form>
          
        </div>
      )
  }
}

// El componente se exporta aquí:
export default Contenido;
