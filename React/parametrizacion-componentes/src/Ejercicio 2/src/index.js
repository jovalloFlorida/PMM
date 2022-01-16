import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import Principal from './components/principal';


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


