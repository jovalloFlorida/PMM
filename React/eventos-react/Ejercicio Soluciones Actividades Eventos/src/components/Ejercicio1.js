import React from 'react';

class Contenido extends React.Component {
  constructor(props){
    super(props);
    this.state={
      titulo: "Titulo",
      texto:"Este es el cuerpo del mensaje donde debe ir todo el contenido"
    };
    this.handleClick = this.handleClick.bind(this);
    this.cambiarContenido = this.cambiarContenido.bind(this);
  }

  handleClick(event){
    event.preventDefault();
    event.target.style.color="red";
    event.target.style.backgroundColor="black";
  }

  cambiarContenido(){
    this.setState({
      texto:this.insertaTexto()
      });
  }

  insertaTexto(){
    return (prompt("Dime el texto a insertar"));
  }

  render() {
    return (
      <div className="pagina">
            <h1 onClick={this.handleClick}>Click en el titulo</h1>
            <p onClick={this.cambiarContenido}>{this.state.texto}</p>
        </div>
      )
  }
}


export default Contenido;






