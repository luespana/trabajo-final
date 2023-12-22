import React, { useState, useEffect } from "react";
import PeliculaStep from "./PeliculaStep";
import DatosStep from "./DatosStep";
import ConfirmarStep from "./ConfirmarStep";
import { getAll } from "../../db/firebase";

function GlobalCustomStepper({ activeStep, info, setInfo }) {
  const [titulos, setTitulos] = useState(["Loading..."]);
  const getPeliculasName = async () => {
    try {
      const peliculas = await getAll("peliculas")
      console.log("peliculas", peliculas)
      const titulos = peliculas.map((pelicula) => pelicula.titulo)
      setTitulos(titulos)
    } catch (error) {
      console.error(error)
    }
  };
  useEffect(() => {
    getPeliculasName();
  }, []);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInfo({ ...info, [name]: value });
  };
  if (activeStep === 0) {
    return (
      <PeliculaStep handleChange={handleChange} info={info} titulos={titulos} />
    );
  }
  if (activeStep === 1) {
    return <DatosStep handleChange={handleChange} info={info} />;
  }
  if (activeStep === 2) {
    return <ConfirmarStep info={info} />;
  }
}

export default GlobalCustomStepper;
