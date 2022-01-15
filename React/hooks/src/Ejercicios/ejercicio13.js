import React, { useEffect } from 'react';
import Menu from './menu';


//Ejercicio 12

export default function Contenido() {
    
    let titulo = "La Ciudad de las Artes y las Ciencias";
    let parrafo = "¡Visitala ya!"
    let miArray = ["https://photo620x400.mnstatic.com/8fd301e2437a291fe82da1dac066aaa6/ciudad-de-las-artes-y-las-ciencias-.jpg","https://estaticos-cdn.prensaiberica.es/clip/4c77ebc7-409e-4501-a036-ab602956c8a0_16-9-aspect-ratio_default_0.jpg", "https://www.lovevalencia.com/wp-content/uploads/2010/10/ciudad.jpg"]
    let variable = 0;
      
    useEffect(()=>{
      
      setTimeout(() => {
        let timer = setInterval(() => {
          if(variable===3){
            variable=0;
          } 
          escribir(variable);
          variable += 1;
        }, 3000)
    
        function escribir(variable){
            document.getElementById("titulo").style.background = 'url("'+ miArray[variable]+'") no-repeat';
            document.getElementById("titulo").style.transition = "3s";
            if(variable === 2){
              clearInterval(timer);
            }
        }    
       
        document.getElementById("titulo").innerHTML="Nuevo titulo";
        setTimeout(() => {
          document.getElementById("parrafo").innerHTML=parrafo;        
        }, 1000)  
      }, 2000)
      
    });
    
  
   
      return (
        <main>
          <article>
            <h1 id="titulo">{titulo}</h1>
            <p id="parrafo">Ubicada al final del viejo cauce del río Turia, la Ciudad de las Artes y las Ciencias es un complejo arquitectónico, cultural y de entretenimiento diseñado por Santiago Calatrava y Félix Candela, junto con los ingenieros autores del diseño estructural de las cubiertas del L'Oceanografic Alberto Domingo y Carlos Lázaro.</p>
          </article>		
          <aside>
            <h2>Edificios</h2>
            <Menu />
          </aside>
          </main>
        )
    }
  
  
  