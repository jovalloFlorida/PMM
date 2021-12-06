import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

//Ejercicio 2

class MiComponente extends React.Component {   
    render() {
      const titulo = "Nuevo titulo";
      const parrafo = "Nuevo parrafo"
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
  