import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/detalle.css";
import { getById } from "../db/firebase";

function PeliculaDetalle() {
  const params = useParams();
  const [detalle, setDetalle] = useState(null);
  const getDetalle = async () => {
    try {
      const detalle = await getById("peliculas", params.id)
      setDetalle(detalle)
    } catch (error) {
      console.error(error)
    }
  };
  useEffect(() => {
    getDetalle();
  });
  if (detalle != null) {
    return (
      <div className="holder">
        <div className="contenedor">
          <div className="columna">
            <h2 className="titulo">{detalle.titulo}</h2>
            <div className="info">
              <span>{detalle.minutos}</span>
              <span>{detalle.origen}</span>
              <span>{detalle.genero}</span>
            </div>
            <p className="descripcion">{detalle.descripcion}</p>
            <div className="boton">ENTRADAS</div>
          </div>
          <div className="columnaimagen">
            <img className="imagen" src={detalle.imagen} alt={detalle.id} />
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="holder">Loading...</div>;
  }
}

export default PeliculaDetalle;
