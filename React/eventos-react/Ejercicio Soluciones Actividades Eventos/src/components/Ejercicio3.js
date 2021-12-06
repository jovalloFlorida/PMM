import React from 'react';


class Contenido extends React.Component {
    constructor(props){
      super(props);
      this.state={
        titulo: "Titulo",
        parrafoUno:"In rutrum volutpat enim, a aliquet nibh porta eu. Vestibulum vitae lectus scelerisque nisi bibendum sollicitudin sit amet interdum turpis. In fermentum facilisis mauris vitae lobortis. Ut rutrum vitae mi ac fermentum. Nam gravida efficitur semper. Nulla posuere lectus est, quis egestas est imperdiet vel. Nam accumsan sollicitudin condimentum. Vestibulum facilisis posuere est eu varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec maximus tellus sem, lacinia interdum magna consequat eu. Phasellus congue, libero eu molestie dapibus, arcu nulla pretium libero, a ornare mauris justo vel mi. Duis sollicitudin leo ornare massa condimentum eleifend. Praesent venenatis lorem sed vehicula vehicula. Cras posuere dolor hendrerit mi tristique, vitae consectetur velit consequat. Nulla facilisi. Nam a quam tempor, convallis arcu sit amet, viverra arcu.",
        parrafoDos: "Curabitur lacinia molestie semper. Phasellus congue ante at mauris interdum egestas. Sed vehicula volutpat justo sit amet rutrum. Cras faucibus nulla sit amet elit scelerisque accumsan. Mauris a dapibus lacus. Morbi sagittis lacus quis orci porta, id dictum ex volutpat. Sed nulla magna, luctus quis neque eget, bibendum convallis lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla et ultricies massa. Proin rutrum, risus ut sollicitudin rutrum, velit diam dictum tortor, et sagittis arcu dolor et mauris. Praesent viverra porta imperdiet.",
        parrafoTres: "Fusce at dolor ut odio accumsan posuere id sit amet risus. Vivamus id feugiat sapien. Quisque facilisis eros a massa fermentum, a aliquam dui sagittis. Nullam sed euismod libero. Vivamus nisl augue, volutpat vitae est vitae, tincidunt faucibus ex. Nulla luctus accumsan leo, vitae elementum dolor volutpat in. Pellentesque a vehicula odio, sed vestibulum tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin non lectus vel risus aliquet congue ac ut felis. Mauris non euismod est, ut luctus ipsum. Aenean id justo ut dui auctor dictum ac at tellus. Vestibulum rutrum risus eget dignissim ultricies.",
        parrafoCuatro: "Nullam tincidunt lectus sit amet enim suscipit vulputate. Nunc ullamcorper dolor vel tellus elementum, nec auctor ipsum placerat. Vivamus nisi nisl, bibendum gravida interdum a, lobortis sed urna. Suspendisse in elit eu urna euismod posuere elementum id lectus. Sed vel arcu turpis. Donec aliquam tempus ullamcorper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean ut dui imperdiet, ullamcorper nisl sit amet, bibendum leo. Fusce blandit velit ac nisi pellentesque laoreet. Aliquam placerat eleifend massa, ut commodo nibh auctor non. Suspendisse non ullamcorper dui. Duis tempor dolor at orci semper laoreet. Nulla maximus vestibulum nunc, eget volutpat purus efficitur quis.",
        parrafoCinco: "In rutrum volutpat enim, a aliquet nibh porta eu. Vestibulum vitae lectus scelerisque nisi bibendum sollicitudin sit amet interdum turpis. In fermentum facilisis mauris vitae lobortis. Ut rutrum vitae mi ac fermentum. Nam gravida efficitur semper. Nulla posuere lectus est, quis egestas est imperdiet vel. Nam accumsan sollicitudin condimentum. Vestibulum facilisis posuere est eu varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec maximus tellus sem, lacinia interdum magna consequat eu. Phasellus congue, libero eu molestie dapibus, arcu nulla pretium libero, a ornare mauris justo vel mi. Duis sollicitudin leo ornare massa condimentum eleifend. Praesent venenatis lorem sed vehicula vehicula. Cras posuere dolor hendrerit mi tristique, vitae consectetur velit consequat. Nulla facilisi. Nam a quam tempor, convallis arcu sit amet, viverra arcu."
      };
      this.cambiarContenido = this.cambiarContenido.bind(this);
    }
  
    cambiarContenido(event){
      console.log(event.target.id);
      if(event.target.id=="uno"){
        this.setState({
          parrafoUno:""
          });
      } else if(event.target.id=="dos"){
        this.setState({
          parrafoDos:""
          });
      } else if(event.target.id=="tres"){
        this.setState({
          parrafoTres:""
          });
      } else if(event.target.id=="cuatro"){
        this.setState({
          parrafoCuatro:""
          });
      } else if(event.target.id=="cinco"){
        this.setState({
          parrafoCinco:""
          });
      }
      
    }
  
    render() {
      return (
        <div className="pagina">
              <h1>{this.state.titulo}</h1>
              <p id="uno" onClick={this.cambiarContenido}>{this.state.parrafoUno}</p>
              <p id="dos" onClick={this.cambiarContenido}>{this.state.parrafoDos}</p>
              <p id="tres" onClick={this.cambiarContenido}>{this.state.parrafoTres}</p>
              <p id="cuatro" onClick={this.cambiarContenido}>{this.state.parrafoCuatro}</p>
              <p id="cinco" onClick={this.cambiarContenido}>{this.state.parrafoCinco}</p>
          </div>
        )
    }
  }
  
  
  export default Contenido;
  
  