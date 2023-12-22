import React, { useState, useEffect } from "react";
import Card from "./Card";
import { NavLink } from "react-router-dom";
import { getAll } from "../../db/firebase";

function Peliculas() {
  const [peliculas, setPeliculas] = useState(null);
  const getPeliculas = async () => {
    try {
      const peliculas = await getAll("peliculas")
      setPeliculas(peliculas)
    } catch (error) {
      console.error(error)
    }
  };
  useEffect(() => {
    getPeliculas();
  }, []);
  if (peliculas != null) {
    return (
      <div className="peliculas_container">
        {peliculas.map((pelicula) => (
          <NavLink key={pelicula.id}  to={`detalle/${pelicula.id}`}>
            <Card pelicula={pelicula} />
          </NavLink>
        ))}
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default Peliculas;
