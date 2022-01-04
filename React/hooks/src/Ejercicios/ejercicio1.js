import React, { useState } from "react";
import ReactDOM from 'react-dom';
import "./index.css";

//Ejercicio 1

  export default function Componente() {
  
    const [color, setColor] = useState();
    
    const divStyle = {backgroundColor: color};
    
      return (
        <div style={divStyle}>
          <p>El color es {color}</p>
          <button onClick={()=>setColor("blue")}>
            Azul
          </button>
          <button onClick={()=>setColor("green")}>
            Verde
          </button>
          <button onClick={()=>setColor("red")}>
            Rojo
          </button>
          <button onClick={()=>setColor("violet")}>
            Violeta
          </button>
        </div>
      );
    }
    
  
    ReactDOM.render(
      <Componente/>,
      document.getElementById('root')
      );
  
    