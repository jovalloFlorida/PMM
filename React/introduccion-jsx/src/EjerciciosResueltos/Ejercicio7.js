import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
//Ejercicio 7
class MiComponente extends React.Component {
    render() {
      
      function fotografia(src, alt, width, height, title){
        this.src=src;
        this.alt=alt;
        this.width=width;
        this.height=height;
        this.title=title;
      }
  
      const fotografiaUno = new fotografia("https://static.dw.com/image/45897958_303.jpg", "Una fotografia de Einstein", "400px", "250px", "Einstein"); 
      const fotografiaDos = new fotografia("https://s1.eestatic.com/2017/09/20/ciencia/investigacion/electricidad-inventores-reino_unido_248237794_47401815_1706x960.jpg", "Una fotografia de Edison","400px", "250px", "Edison");
      const fotografiaTres = new fotografia("https://upload.wikimedia.org/wikipedia/commons/6/6d/Niels_Bohr.jpg", "Una fotografia de Bohr","400px", "250px", "Bohr");
  
      let miArray=[fotografiaUno, fotografiaDos, fotografiaTres];
      let numero = Math.floor(Math.random() * (miArray.length ));
      return (
    <img src={miArray[numero].src}
    alt={miArray[numero].alt}
    width={miArray[numero].width}
    height={miArray[numero].height}
    title={miArray[numero].title}/>
      );
  
  
  
    }
  };
  
  ReactDOM.render(
    <MiComponente />,
    document.getElementById('root')
  );
  