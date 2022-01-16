import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import Principal from './components/principal';

//Ejercicio 4
class Index extends React.Component {
  render() {
    return (
      <Principal />
      )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);


