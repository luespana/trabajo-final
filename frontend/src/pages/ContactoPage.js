import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";

function ContactoPage() {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    mensaje: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  
  return (
    <main className="holder">
      <div>
        <h3 className="boleteria_title">ESPERAMOS TU CONSULTA</h3>
        <h1 className="venta_title">Cines Filmfinity</h1>
      </div>
      <div>
        <Box
          sx={{ width: "70%", margin: "2rem auto" }}
          noValidate
          autoComplete="off"
        >
          <FormControl fullWidth>
            <TextField
              value={form.nombre}
              onChange={(event) => handleChange(event)}
              label="Nombre"
              variant="outlined"
              name="nombre"
            />
          </FormControl>
        </Box>
        <Box
          sx={{ width: "70%", margin: "2rem auto" }}
          noValidate
          autoComplete="off"
        >
          <FormControl fullWidth>
            <TextField
              value={form.apellido}
              onChange={(event) => handleChange(event)}
              label="Apellido"
              variant="outlined"
              name="apellido"
            />
          </FormControl>
        </Box>
        <Box
          sx={{ width: "70%", margin: "2rem auto" }}
          noValidate
          autoComplete="off"
        >
          <FormControl fullWidth>
            <TextField
              value={form.email}
              onChange={(event) => handleChange(event)}
              label="Email"
              variant="outlined"
              name="email"
            />
          </FormControl>
        </Box>
        <Box
          sx={{ width: "70%", margin: "2rem auto" }}
          noValidate
          autoComplete="off"
        >
          <FormControl fullWidth>
            <TextField
              value={form.telefono}
              onChange={(event) => handleChange(event)}
              label="Telefono"
              variant="outlined"
              name="telefono"
            />
          </FormControl>
        </Box>
        <Box
          sx={{ width: "70%", margin: "2rem auto" }}
          noValidate
          autoComplete="off"
        >
          <FormControl fullWidth>
            <TextField
              value={form.mensaje}
              onChange={(event) => handleChange(event)}
              label="Dejanos tu mensaje"
              name="mensaje"
              multiline
              rows={4}
            />
          </FormControl>
        </Box>
        <Box
          sx={{ width: "70%", margin: "2rem auto" }}
          noValidate
          autoComplete="off"
        >
          <FormControl fullWidth>
            <Button variant="contained" color="success" endIcon={<SendIcon />}>
              Enviar
            </Button>
          </FormControl>
        </Box>
      </div>
    </main>
  );
}

export default ContactoPage;
