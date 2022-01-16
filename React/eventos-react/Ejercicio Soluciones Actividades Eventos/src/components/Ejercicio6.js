import React from 'react';

let imagenActual=0;
let miArray = ["https://www.biografiasyvidas.com/monografia/newton/fotos/newton_joven.jpg","https://historia.nationalgeographic.com.es/medio/2021/01/02/termometro-galileo_55125cfe_550x583.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Thomas_Edison2.jpg/1200px-Thomas_Edison2.jpg"];

class Contenido extends React.Component {
  constructor(props){
    super(props);
    this.state={
      titulo: "Carrusel imágenes",
      textoUno:"Anterior",
      textoDos:"Siguiente",
      imagen: miArray[imagenActual]
    };
    this.handleClickUno = this.handleClickUno.bind(this);
    this.handleClickDos = this.handleClickDos.bind(this);
    }
  
  handleClickUno(event){
    event.preventDefault();
    if(imagenActual===0){
      imagenActual=2;
    }else{
      imagenActual--;
    }
    this.setState({
      imagen:miArray[imagenActual]
      });
  }

  handleClickDos(event){
    event.preventDefault();
    if(imagenActual===2){
      imagenActual=0;
    }else{
      imagenActual++;
    }
    this.setState({
      imagen:miArray[imagenActual]
      });
  }

  render(){
    return (
      <div className="pagina">
            <h1>{this.state.titulo}</h1>
            <p><img src={this.state.imagen} height="300px" width="300px" alt="imagen"></img></p>
            <button onClick={this.handleClickUno}>{this.state.textoUno}</button>
            <button onClick={this.handleClickDos}>{this.state.textoDos}</button>
        </div>
      )
  }
}


export default Contenido;

