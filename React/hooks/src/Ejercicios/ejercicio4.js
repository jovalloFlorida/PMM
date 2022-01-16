import React, { useState } from "react";
import ReactDOM from 'react-dom';
import "./index.css";

//Ejercicio 4

export default function Componente() {
  
    const [menu, setMenu] = useState();
    const displayUno = "oculto";
    const displayDos = "visible";
    
    return (
      <main>
        <h2 onClick={() => setMenu(true)} onDoubleClick={() => setMenu(false)}>Menú</h2>
        <nav className={menu ? displayUno : displayDos}>
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

