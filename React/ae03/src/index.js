import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import Principal from './components/principal';


//INDEX.

class Index extends React.Component {
    render() {
        return (
            <Principal />
        )
    }
}

// El componente se renderiza aqui:
ReactDOM.render(
    <Index />,
    document.getElementById('root')
);
