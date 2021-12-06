import React from "react";

//ENLACE.
class Enlace extends React.Component {
  render() {
    return (
      <div className="enlace">
        <a href={this.props.enlace}>e</a>
      </div>
    );
  }
}

export default Enlace;
