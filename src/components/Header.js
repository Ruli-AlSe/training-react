import React from "react";
import logo from '../assets/images/logo.svg'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="center">
          {/*<!-- LOGO -->*/}
          <div id="logo">
            <img
              src={logo}
              className="app-logo"
              alt="Logotipo"
            />
            <span id="brand">
              <strong>ReactJS</strong> Course
            </span>
          </div>

          {/*<!-- MENU -->}*/}
          <nav id="menu">
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li>
                <a href="formulario.html">Form</a>
              </li>
              <li>
                <a href="#">Page 1</a>
              </li>
              <li>
                <a href="#">Page 2</a>
              </li>
            </ul>
          </nav>

          {/*<!--LIMPIAR FLOTADOS-->*/}
          <div className="clearfix"></div>
        </div>
      </header>
    );
  }
}

export default Header;
