import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";

function DatosStep({ handleChange, info }) {
  return (
    <div>
      <Box sx={{ minWidth: 120, marginTop: 5 }} noValidate autoComplete="off">
        <FormControl fullWidth>
          <TextField
            value={info.nombre}
            onChange={(event) => handleChange(event)}
            label="Nombre"
            variant="outlined"
            name="nombre"
          />
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 120, marginTop: 5 }} noValidate autoComplete="off">
        <FormControl fullWidth>
          <TextField
            value={info.apellido}
            onChange={(event) => handleChange(event)}
            label="Apellido"
            variant="outlined"
            name="apellido"
          />
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 120, marginTop: 5 }} noValidate autoComplete="off">
        <FormControl fullWidth>
          <TextField
            value={info.email}
            onChange={(event) => handleChange(event)}
            label="Email"
            variant="outlined"
            name="email"
          />
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 120, marginTop: 5 }} noValidate autoComplete="off">
        <FormControl fullWidth>
          <TextField
            value={info.telefono}
            onChange={(event) => handleChange(event)}
            label="Telefono"
            variant="outlined"
            name="telefono"
          />
        </FormControl>
      </Box>
    </div>
  );
}

export default DatosStep;
