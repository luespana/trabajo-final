import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import GlobalCustomStepper from "./GlobalCustomStepper";
import axios from "axios";
import { BASEURL } from "../../database/config";

const steps = ["Pelicula", "Datos Personales", "Confirmar Datos"];

function CustomStepper() {
  const [loading, setLoading] = React.useState(false);
  const [info, setInfo] = React.useState({
    pelicula: "",
    formato: "",
    dia: "",
    horario: "",
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
  });
  const [activeStep, setActiveStep] = React.useState(0);
  const navigate = useNavigate();
  const styles = {
    backgroundColor: "black",
    color: "white",
  };

  const handleNext = () => {
    console.log(info);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const response = await axios.post(`${BASEURL}/compra`, info);
    if (response.data.error === false) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleBackCartelera = () => {
    navigate("/");
  };

  return (
    <Box sx={{ width: "70%", margin: "0 auto" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1, textAlign: "center" }}>
            <h2 style={{ fontWeight: "bold" }}>¡Gracias por su compra!</h2>
            <p>Se le ha enviado un mail a su casilla de correo electronico</p>
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleBackCartelera} style={styles}>
              Volver al inicio
            </Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            <GlobalCustomStepper
              activeStep={activeStep}
              info={info}
              setInfo={setInfo}
            />
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              variant="contained"
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
              style={activeStep !== 0 ? styles : {}}
            >
              Volver
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            {activeStep === steps.length - 1 ? (
              <Button onClick={handleSubmit} variant="contained" style={styles}>
                {loading === false ? "Finalizar" : "Enviando..."}
              </Button>
            ) : (
              <Button onClick={handleNext} variant="contained" style={styles}>
                Siguiente
              </Button>
            )}
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default CustomStepper;
