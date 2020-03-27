import React from "react";
import logo from "../assets/images/logo.svg";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="center">
          {/*<!-- LOGO -->*/}
          <div id="logo">
            <img src={logo} className="app-logo" alt="Logotipo" />
            <span id="brand">
              <strong>ReactJS</strong> Course
            </span>
          </div>

          {/*<!-- MENU -->}*/}
          <nav id="menu">
            <ul>
              <li>
                <NavLink to="/home" activeClassName="active" >Home</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/form">Form</NavLink>
              </li>
              <li>
                <NavLink to="/movies">Movies</NavLink>
              </li>
              <li>
                <NavLink to="/tests">Test component</NavLink>
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
