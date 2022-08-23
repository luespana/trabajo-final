import React from "react";
import PeliculaStep from "./PeliculaStep";
import DatosStep from "./DatosStep";
import ConfirmarStep from "./ConfirmarStep";

function GlobalCustomStepper({ activeStep, info, setInfo }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInfo({ ...info, [name]: value });
  };
  if (activeStep === 0) {
    return <PeliculaStep handleChange={handleChange} info={info} />;
  }
  if (activeStep === 1) {
    return <DatosStep />;
  }
  if (activeStep === 2) {
    return <ConfirmarStep />;
  }
}

export default GlobalCustomStepper;
