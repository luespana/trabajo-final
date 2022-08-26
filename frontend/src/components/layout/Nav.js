import React from "react";
//import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function NavList() {
  let activeStyle = {
    color: "rgb(194, 193, 193)",
  };

  return (
    <nav>
      <div className="brand">
        <NavLink to="/">FILMFINITY</NavLink>
      </div>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            CARTELERA
          </NavLink>
        </li>
        <li>
          <NavLink
            to="entradas"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            ENTRADAS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="contacto"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            CONTACTO
          </NavLink>
        </li>
        <li>
          <NavLink
            to="preguntas"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            PREGUNTAS FRECUENTES
          </NavLink>
        </li>
        <li>
          <a href={process.env.REACT_APP_API_URL} target="_blank">
            <i className="bi bi-person-circle iconoSize"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavList;
