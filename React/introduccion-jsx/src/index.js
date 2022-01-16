import React from "react";
import ReactDOM from "react-dom";
//import "./index.css";
//Ejercicio 6

class MiComponente extends React.Component {
  render() {
    return (
      <div>
        <img
          src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png"
          alt="Logotipo de React"
          width="400px"
          height="400px"
          title="Logo de React"
        />
        <br />
        <img
          src="https://www.misfiestas.es/wp-content/uploads/2019/01/official-jurassic-world-t-rex-tyrannosaurus-rex-dinosaur-lifesize-cardboard-cutout-100cm-product-image.jpg"
          alt="La fotografia de un dinosaurio"
          width="400px"
          height="341px"
          title="Imagen de un T-Rex en posición de ataque."
        />
      </div>
    );
  }
}

ReactDOM.render(<MiComponente />, document.getElementById("root"));
