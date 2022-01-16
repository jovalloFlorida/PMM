import React, { useState } from "react";
import ReactDOM from 'react-dom';
import "./index.css";

//Ejercicio 3
      
  export default function Componente() {
  
    const [imagen, setImagen] = useState();
    const imagenUno = "https://pymstatic.com/51975/conversions/frases-atardecer-thumb.jpg";
    const imagenDos = "https://miro.medium.com/max/724/0*Zxrh6gn4JMKEDG4-";
    
    
    return (
      <div>
      <div>
        <img src={imagen ? imagenUno : imagenDos} width="400" height="300"/>
        </div>
        <div>
        <button onClick={() => setImagen(true)}>
          Anterior
        </button>
        <button onClick={() => setImagen(false)}>
          Siguiente
        </button>
      </div>
      </div>
    );
  } 

  ReactDOM.render(
    <Componente/>,
    document.getElementById('root')
    );
    