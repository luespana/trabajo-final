import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function PeliculaStep({ handleChange, info }) {
  return (
    <div>
      <Box sx={{ minWidth: 120, marginTop: 5 }}>
        <FormControl fullWidth>
          <InputLabel>Pelicula</InputLabel>
          <Select
            value={info.pelicula}
            label="Pelicula"
            onChange={(event) => handleChange(event)}
            name="pelicula"
          >
            <MenuItem value={"spiderman"}>Spiderman</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 120, marginTop: 5 }}>
        <FormControl fullWidth>
          <InputLabel>Formato</InputLabel>
          <Select
            value={info.formato}
            label="Formato"
            onChange={(event) => handleChange(event)}
            name="formato"
          >
            <MenuItem value={"spiderman"}>Spiderman</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 120, marginTop: 5 }}>
        <FormControl fullWidth>
          <InputLabel>Dia</InputLabel>
          <Select
            value={info.dia}
            label="Dia"
            onChange={(event) => handleChange(event)}
            name="dia"
          >
            <MenuItem value={"spiderman"}>Spiderman</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 120, marginTop: 5 }}>
        <FormControl fullWidth>
          <InputLabel>Horario</InputLabel>
          <Select
            value={info.horario}
            label="Horario"
            onChange={(event) => handleChange(event)}
            name="horario"
          >
            <MenuItem value={"spiderman"}>Spiderman</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default PeliculaStep;
