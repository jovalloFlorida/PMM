import React from 'react';

class Contenido extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      apellido: ''
    };

    this.handleNombre = this.handleNombre.bind(this);
    this.handlePrimerApellido = this.handlePrimerApellido.bind(this);
    this.handleSegundoApellido = this.handleSegundoApellido.bind(this);
    this.handleDni = this.handleDni.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNombre(event) {
    if (!isNaN(event.target.value)) {
      alert("Introduce un nombre correcto");
    } else {
      this.setState({ nombre: event.target.value });
    }

  }

  handlePrimerApellido(event) {
    if (!isNaN(event.target.value)) {
      alert("El primer apellido no es correcto");

    } else {
      this.setState({ primerApellido: event.target.value });
    }

  }

  handleSegundoApellido(event) {
    if (!isNaN(event.target.value)) {
      alert("El segundo apellido no es correcto");
    } else {
      this.setState({ segundoApellido: event.target.value });
    }

  }

  handleDni(event) {
    this.setState({ dni: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert("Los datos introducidos son correctos");
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <table cellSpacing="2" cellPadding="2" border="1">
          <tbody>
            <tr>
              <td>
                <label>Nombre: <input type="text" nombre={this.state.nombre} onChange={this.handleNombre} /></label>
              </td>
            </tr>
            <tr>
              <td>
                <label>Primer apellido: <input type="text" primerapellido={this.state.apellido} onChange={this.handlePrimerApellido} /></label>
              </td>
            </tr>
            <tr>
              <td>
                <label>Segundo apellido: <input type="text" segundoapellido={this.state.apellido} onChange={this.handleSegundoApellido} /></label>
              </td>
            </tr>
            <tr>
              <td>
                <label>DNI: <input type="text" segundoapellido={this.state.apellido} onChange={this.handleDni} /></label>
              </td>
            </tr>
            <tr>
              <td>
                <input type="submit" value="Submit" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    );
  }
}

export default Contenido;
