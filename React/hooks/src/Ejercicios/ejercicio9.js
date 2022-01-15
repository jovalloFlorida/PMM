import React, { useState } from "react";
import ReactDOM from 'react-dom';
import "./index.css";


//Ejercicio 9

export default function Componente() {
  
    const [menu, setMenu] = useState("oculto");
    
    const handleClick = (event) => {
      event.preventDefault();
      setMenu("oculto");
    }

    const handleDoubleClick = (event) => {
      event.preventDefault();
      setMenu("visible");
    }

    return (
      <main>
        <h2 onClick={handleClick} onDoubleClick={handleDoubleClick}>Menú</h2>
        <nav className={menu}>
        <ul>
          <li>Enlace Uno</li>
          <li>Enlace Dos</li>
          <li>Enlace Tres</li>
          <li>Enlace Cuatro</li>
          <li>Enlace Cinco</li>
        </ul>
      </nav>
      </main>
      );
  } 

  ReactDOM.render(
    <Componente/>,
    document.getElementById('root')
    );

