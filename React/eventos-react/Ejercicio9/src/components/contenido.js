import React from 'react';

class Contenido extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: "Imágenes",
      imagen: "https://static.educalingo.com/img/en/800/sunset.jpg"
    };
    this.handleCharge = this.handleCharge.bind(this);
  }

  handleCharge(event) {
    event.preventDefault();
    setTimeout(function () {
      event.target.style.transition = "1s";
      event.target.style.opacity = "0.2";
    }, 3000)

  }


  render() {
    return (
      <div className="pagina">
        <h1>{this.state.titulo}</h1>
        <img onLoad={this.handleCharge} src={this.state.imagen} alt="imagen"></img>
      </div>
    )
  }
}


export default Contenido;
