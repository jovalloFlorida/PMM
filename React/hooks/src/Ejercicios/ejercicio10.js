
import React, { useState } from "react";
import ReactDOM from 'react-dom';
import "./index.css";


  //Ejercicio 10
  
  export default function Componente() {
  
    const [imagen, setImagen] = useState("https://pymstatic.com/51975/conversions/frases-atardecer-thumb.jpg");
    const [estilos, setEstilos] = useState("displayDos");
    
    const handleClick = (event) => {
      event.preventDefault();
      setImagen("https://pymstatic.com/51975/conversions/frases-atardecer-thumb.jpg");    
    }

    const handleDoubleClick = (event) => {
      event.preventDefault();
      setImagen("https://miro.medium.com/max/724/0*Zxrh6gn4JMKEDG4-");    
    }

    const handleMouseOver = (event) => {
      event.preventDefault();
      setEstilos("displayUno");    
    }

    const handleMouseOut = (event) => {
      event.preventDefault();
      setEstilos("displayDos");
    }

    return (
      <div>
        <img src={imagen} width="400" height="300" onClick={handleClick} onDoubleClick={handleDoubleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={estilos}/>
      </div>  
    );
  } 

  ReactDOM.render(
    <Componente/>,
    document.getElementById('root')
    );

