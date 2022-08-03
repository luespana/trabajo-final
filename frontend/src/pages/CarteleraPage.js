import React from 'react'
import Peliculas from '../components/cartelera/Peliculas'
import '../styles/cartelera.css'

function CarteleraPage() {
  return (
    <main className="holder">
        <div>
            <h3 className='cartelera_title'>EN CARTELERA</h3>
            <h1 className='peliculas_title'>Peliculas</h1>
        </div>
        <Peliculas/>
    </main>
  )
}

export default CarteleraPage