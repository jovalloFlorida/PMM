import React from 'react';


class Contenido extends React.Component {
    constructor(props){
      super(props);
      this.state={
        titulo: "Imágenes",
        imagen: "https://static.educalingo.com/img/en/800/sunset.jpg"
      };
      this.handleMouseOver = this.handleMouseOver.bind(this);
      this.handleMouseOut = this.handleMouseOut.bind(this);
      }
    
    handleMouseOver(event){
      event.preventDefault();
      event.target.style.opacity="0";
      event.target.style.transition="3s";
    }
  
    handleMouseOut(event){
      event.preventDefault();
      event.target.style.opacity="0.2";
      event.target.style.transition="3s";
    }
  
    render(){
      return (
        <div className="pagina">
          <h1>{this.state.titulo}</h1>
          <img onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} src={this.state.imagen} alt="imagen" width="75%" height="75%"></img>
          
              </div>
        )
    }
  }
  

  export default Contenido;
  