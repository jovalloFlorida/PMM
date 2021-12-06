import React from "react";

//Menu.
class Menu extends React.Component {
  render() {
    return (
      <div className="contenido">
        <nav>
          <ul>
            <li>
              <a href="https://www.cac.es/es/hemisferic/descubre-el-hemisferic/descubre-el-hemisferic.html">
                Hemisferic
              </a>
            </li>
            <li>
              <a href="https://www.cac.es/es/museu-de-les-ciencies/museu-de-les-ciencies/descubre-el-museu.html">
                Museo de las Ciencias
              </a>
            </li>
            <li>
              <a href="https://www.oceanografic.org/">Oceanografic</a>
            </li>
            <li>
              <a href="https://www.lesarts.com/es/">Palau de les Arts</a>
            </li>
            <li>
              <a href="http://umbracleterraza.com/umbracle/inicio/">Umbracle</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Menu;
