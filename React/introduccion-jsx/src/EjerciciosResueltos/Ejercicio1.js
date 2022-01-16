import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

//Ejercicio 1

class MiComponente extends React.Component {   
  render() {

    return (
      <div>
      <h1>
        Titulo
      </h1>
      <p> 
        Parrafo
      </p>
    </div>
    )
}
}

ReactDOM.render(
  <MiComponente />,
  document.getElementById('root')
);