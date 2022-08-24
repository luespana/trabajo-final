import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { BASEURL } from "../../database/config";

function Peliculas() {
  const [peliculas, setPeliculas] = useState(null);
  const getPeliculas = () => {
    axios.get(`${BASEURL}/peliculas`).then((res) => {
      console.log(res.data);
      setPeliculas(res.data);
    });
  };
  useEffect(() => {
    getPeliculas();
  }, []);
  if (peliculas != null) {
    return (
      <div className="peliculas_container">
        {peliculas.map((pelicula) => (
          <NavLink to={`detalle/${pelicula.id}`}>
            <Card key={pelicula.id} pelicula={pelicula} />
          </NavLink>
        ))}
      </div>
    );
  } else {
    return <div>loading...</div>;
  }
}

export default Peliculas;
