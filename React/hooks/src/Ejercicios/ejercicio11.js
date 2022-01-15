import React, { useEffect } from 'react';
import Menu from './menu';


//Ejercicio 11

export default function Contenido() {
    
  let titulo = "La Ciudad de las Artes y las Ciencias";
  

  useEffect(()=>{
    setTimeout(() => {
      document.getElementById("titulo").innerHTML="Nuevo titulo";
    }, 2000)
  });
  

  
    return (
      <main>
        <article>
          <h1 id="titulo">{titulo}</h1>
          <p id="statecambiado">Ubicada al final del viejo cauce del río Turia, la Ciudad de las Artes y las Ciencias es un complejo arquitectónico, cultural y de entretenimiento diseñado por Santiago Calatrava y Félix Candela, junto con los ingenieros autores del diseño estructural de las cubiertas del L'Oceanografic Alberto Domingo y Carlos Lázaro.</p>
        </article>		
        <aside>
          <h2>Edificios</h2>
          <Menu />
        </aside>
	    </main>
      )
  }

