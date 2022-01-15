import React, { useState } from "react";
import ReactDOM from 'react-dom';
import "./index.css";

  //Ejercicio 7
    
  export default function Componente() {
  
    const [parrafo, setParrafo] = useState("Primer parrafo");
    
    const handleMouseOver = (event) => {
      event.preventDefault();
      setParrafo("Esto es un parrafo que dice que esto es un parrafo");
    }

    const handleMouseOut = (event) => {
      event.preventDefault();
      setParrafo("Esto es otro parrafo que no dice lo mismo que el otro parrafo")
    }

    return (
      <div>
        <p onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>{parrafo}</p>
      </div>
    );
  }
  

  ReactDOM.render(
    <Componente/>,
    document.getElementById('root')
    );
