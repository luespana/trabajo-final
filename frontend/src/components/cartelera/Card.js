import React from "react";

function Card({ pelicula }) { 
  // imagen, id, titulo, genero

  return (
    <div className="card">
      <img
        style={{ height: "400px", objectFit: "cover" }}
        src={pelicula.imagen}
        alt={pelicula.id}
      />
      <div className="div-negro">
        <p className="titulo-card">{pelicula.titulo.toUpperCase()}</p>
        <div className="fila2">
          <i className="bi bi-play-circle-fill play"></i>
          <p className="genero-card">{pelicula.genero.toUpperCase()}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
