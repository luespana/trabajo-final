import React from 'react'

function Card({pelicula}) {
  return (
    <div className='card' >
        <img src={pelicula.imagen} alt={pelicula.id} />
        <div className='div-negro'>
          <p className='titulo-card'>{pelicula.titulo.toUpperCase()}</p>
          <div className='fila2'>
          <i className="bi bi-play-circle-fill play"></i>
          <p className='genero-card'>{pelicula.genero.toUpperCase()}</p>
          </div>
        </div>
    </div>
  )
}

export default Card