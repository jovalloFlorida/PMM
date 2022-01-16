import React, { useState } from "react";
import ReactDOM from 'react-dom';
import "./index.css";


//Ejercicio 8
export default function Componente() {
  
    const [imagen, setImagen] = useState(0);
    let miArray = ["https://files.keepingcurrentmatters.com/wp-content/uploads/2021/05/12143342/20210513-KCM-Share.jpg","https://pymstatic.com/51975/conversions/frases-atardecer-thumb.jpg","https://miro.medium.com/max/724/0*Zxrh6gn4JMKEDG4-"];
    

    const onClickAnterior = (event) => {
      event.preventDefault();
      if(imagen===0){
        setImagen(2);
      }else{
        setImagen(imagen-1);
      } 
    }
      
      
    const onClickSiguiente = (event) => {
      event.preventDefault();
      if(imagen===2){
        setImagen(0);
      }else{
        setImagen(imagen+1);
      }
    }
    
    return (
      <div>
      <div>
        <img src={miArray[imagen]} alt="imagen" width="400" height="300"/>
        </div>
        <div>
        <button id="anterior" onClick={onClickAnterior}>
          Anterior
        </button>
        <button id="siguiente" onClick={onClickSiguiente}>
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

