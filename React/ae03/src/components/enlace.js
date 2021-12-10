import React from 'react';

//Enlace.

class Enlace extends React.Component {

  render() {
    return (
      <a href={this.props.enlace} target="_blank" rel="noreferrer">{this.props.nombre}</a>
    )
  }
}

export default Enlace;