import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import Cabecera from './components/cabecera';
import Footer from './components/footer'
import Menu from './components/menu';
import Contenido from './components/contenido';

class Index extends React.Component {
    render() {
        return (
            <div className='root'>
                <div className='aplicacion'>
                    <Cabecera />
                    <div className='contenedor'>
                        <Menu />
                        <Contenido />
                    </div>
                    <div className='piePagina'>
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}

// El componente se renderiza aqui:
ReactDOM.render(
    <Index />,
    document.getElementById('root')
);
