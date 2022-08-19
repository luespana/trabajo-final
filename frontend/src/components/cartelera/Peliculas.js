import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";

function Peliculas() {
  const [peliculas, setPeliculas]= useState(null)
  const getPeliculas = () => {
    axios.get("http://localhost:3000/peliculas").then((res) => {
      console.log(res.data);
      setPeliculas(res.data)
    });
  };
  useEffect(() =>{
    getPeliculas()
  },[])
  if(peliculas != null){
    return (
      <div className="peliculas_container">
        {
          peliculas.map((pelicula) => (
            <Card key={pelicula.id} pelicula={pelicula} />
          ))
        }
      </div>
    );
  }else{
    return <div>loading...</div>
  }

}

export default Peliculas;
