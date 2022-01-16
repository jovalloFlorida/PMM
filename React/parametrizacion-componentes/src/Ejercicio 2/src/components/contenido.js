import React from 'react';


//Ejercicio 2
class Contenido extends React.Component {
  
  render() {
    return (
      <div className="pagina">
            <h1>{this.props.titulo}</h1>
            <p>{this.props.parrafoUno}</p> 
            <p>{this.props.parrafoDos}</p>
      </div>
      )
  }
}


export default Contenido;
