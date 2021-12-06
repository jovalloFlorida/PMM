import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
//Ejercicio 5

class MiComponente extends React.Component {
    
    render() {
      
      return (
        <a href="https://www.google.es" target="_blank">
          Click en el enlace para ir a una página web
        </a>
      )
  }
  }
  
  
  ReactDOM.render(
    <MiComponente />,
    document.getElementById('root')
  );
  