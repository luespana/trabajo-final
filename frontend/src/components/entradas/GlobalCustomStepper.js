import React, { useState, useEffect } from "react";
import PeliculaStep from "./PeliculaStep";
import DatosStep from "./DatosStep";
import ConfirmarStep from "./ConfirmarStep";
import axios from "axios";

function GlobalCustomStepper({ activeStep, info, setInfo }) {
  const [titulos, setTitulos] = useState(["Loading..."]);
  const getPeliculasName = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/peliculasname`).then((res) => {
      setTitulos(res.data);
    });
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
