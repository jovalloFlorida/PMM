import React, { useState } from "react";
import ReactDOM from 'react-dom';
import "./index.css";

  //Ejercicio 5
  
  export default function Componente() {
  
    const [imagen, setImagen] = useState();
    const [estilos, setEstilos] = useState();
    const imagenUno = "https://pymstatic.com/51975/conversions/frases-atardecer-thumb.jpg";
    const imagenDos = "https://miro.medium.com/max/724/0*Zxrh6gn4JMKEDG4-";
    const displayUno = "displayUno";
    const displayDos = "displayDos";
    
    return (
      <div>
        <img src={imagen ? imagenUno : imagenDos} width="400" height="300" alt="imagen" onClick={() => setImagen(true)} onDoubleClick={() => setImagen(false)} onMouseOver={() => setEstilos(true)} onMouseOut={() => setEstilos(false)} className={estilos ? displayUno : displayDos}/>
      </div>  
    );
  } 

  ReactDOM.render(
    <Componente/>,
    document.getElementById('root')
    );


