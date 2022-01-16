import React from 'react';


//Ejercicio 3
class Contenido extends React.Component {
  constructor(props){
    super(props);
    this.state={
      titulo: "Nuevo titulo",
      parrafoUno:"Lorem Ipsum",
      parrafoDos:"Lorem Ipsum"
    };
  }
  render() {
    return (
      <div className="pagina">
            <h1>{this.state.titulo}</h1>
            <p>{this.state.parrafoUno}</p> 
            <p>{this.state.parrafoDos}</p>
      </div>
      )
  }
}


export default Contenido;
