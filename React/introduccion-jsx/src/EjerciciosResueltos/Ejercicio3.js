import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
//Ejercicio 3

class MiComponente extends React.Component {   
    render() {
      const titulo = prompt("Dime un titulo");
      const parrafo = prompt("Dime un parrafo");
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
  
  ReactDOM.render(
    <MiComponente />,
    document.getElementById('root')
  );
