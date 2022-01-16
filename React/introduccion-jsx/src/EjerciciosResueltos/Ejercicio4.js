import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
//Ejercicio 4
class MiComponente extends React.Component {   
    render() {
      let titulo,parrafo;
      do{
        titulo = prompt("Dime un titulo");
      }while(!isNaN(titulo));

      do{
        parrafo= prompt("Dime un parrafo");
      }while(!isNaN(parrafo));
      
      return (
        <div>
        <h1>
          {titulo}
        </h1>
        <p> 
          {parrafo}
        </p>
      </div>
      )
  }
}
  

  // El componente se renderiza aqui:
  ReactDOM.render(
    <MiComponente />,
    document.getElementById('root')
  );

