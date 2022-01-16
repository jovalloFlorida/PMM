import React, { useState } from "react";
import ReactDOM from 'react-dom';
import "./index.css";

//Ejercicio 2
    
  export default function Componente() {
  
    const [parrafo, setParrafo] = useState();
    const parrafoTrue = "Esto es un parrafo que dice que esto es un parrafo";
    const parrafoFalse = "Esto es otro parrafo que no dice lo mismo que el otro parrafo";
    
    return (
      <div>
        <p onMouseOver={() => setParrafo(false)} onMouseOut={() => setParrafo(true)}>{parrafo ? parrafoTrue : parrafoFalse}</p>
      </div>
    );
  }
  

  ReactDOM.render(
    <Componente/>,
    document.getElementById('root')
    );
    
    