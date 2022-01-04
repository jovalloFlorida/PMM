import React, { useState } from "react";
import ReactDOM from 'react-dom';
import "./index.css";

//Ejercicio 2
    
  export default function Componente() {
  
    const [parrafo, setParrafo] = useState();
    const parrafoTrue = "Parrafo Uno";
    const parrafoFalse = "Parrafo Dos";
    
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
    
    