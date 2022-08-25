import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/detalle.css";
import { BASEURL } from "../database/config";

function PeliculaDetalle() {
  const params = useParams();
  const [detalle, setDetalle] = useState(null);
  const getDetalle = () => {
    axios.post(`${BASEURL}/pelicula`, { id: params.id }).then((res) => {
      console.log("detalle", res.data);
      setDetalle(res.data);
    });
  };
  useEffect(() => {
    getDetalle();
  }, []);
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
