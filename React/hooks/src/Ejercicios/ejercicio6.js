import React, { useState } from "react";
import ReactDOM from 'react-dom';
import "./index.css";


  //Ejercicio 6
  
  export default function Componente() {
  
    const [color, setColor] = useState("yellow");
    
    const divStyle = {backgroundColor: color};
    
    const handleClick = (event) => {
      event.preventDefault();
      if(event.target.id==="botonUno"){
        setColor("blue");
      } else if(event.target.id==="botonDos"){
        setColor("green");
      } else if(event.target.id==="botonTres"){
        setColor("red");
      } else if(event.target.id==="botonCuatro"){
        setColor("violet");
      } 
    }
  
      return (
        <div style={divStyle}>
          <p>El color es {color}</p>
          <button id="botonUno" onClick={handleClick}>
            Azul
          </button>
          <button id="botonDos" onClick={handleClick}>
            Verde
          </button>
          <button id="botonTres" onClick={handleClick}>
            Rojo
          </button>
          <button id="botonCuatro" onClick={handleClick}>
            Violeta
          </button>
        </div>
      );
    }
    
  
    ReactDOM.render(
      <Componente/>,
      document.getElementById('root')
      );
  
  