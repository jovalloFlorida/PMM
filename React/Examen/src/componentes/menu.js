import React from 'react';
import Enlace from './enlace';

//Menu

class Menu extends React.Component {

    constructor(props){
        super(props);
        this.state={
            titulo:"La Ciudad de las Artes y las Ciencias",
            enlace1:"https://www.cac.es/es/hemisferic/descubre-el-hemisferic/descubre-el-hemisferic.html",
            enlace2:"https://www.cac.es/es/museu-de-les-ciencies/museu-de-les-ciencies/descubre-el-museu.html",
            enlace3:"https://www.oceanografic.org/",
            enlace4:"https://www.lesarts.com/es/",
            enlace5:"http://umbracleterraza.com/umbracle/inicio/",
            hemisferic:"Hemisferic",
            museoDeLasCiencias:  "Museo de las Ciencias",
            oceanografic:"Oceanografic",
            palauDeLesArts:"Palau de les Arts",
            umbracle:"Umbracle"
        }
    }

  render() {
    return (
    <nav>
        <ul className="contenido">
        <li>
            <Enlace enlace={this.state.enlace1} nombre={this.state.museoDeLasCiencias}/>
        </li>
        <li>
             <Enlace enlace={this.state.enlace2} nombre={this.state.hemisferic}/>
        </li>
        <li>
             <Enlace enlace={this.state.enlace3} nombre={this.state.oceanografic}/>
        </li>
        <li>
             <Enlace enlace={this.state.enlace4} nombre={this.state.palauDeLesArts}/>
        </li>
        <li>
            <Enlace enlace={this.state.enlace5} nombre={this.state.umbracle}/>
        </li>

        </ul>
    </nav>
      )
  }
}

export default Menu;