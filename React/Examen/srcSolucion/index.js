import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import Cabecera from './componentes/cabecera';
import Contenido from './componentes/contenido';


class Index extends React.Component {
  render() {
    return (
        <div className = "index"> 
                <Cabecera nombre="Examen DAM 2º Semi"/>
                <Contenido/>
                <Cabecera nombre="Javier Caro Silvente"/>
        </div>    
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
)
