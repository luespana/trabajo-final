import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function PeliculaStep({ handleChange, info, titulos }) {
  const getDias = (days) => {
    var today = new Date();
    today.setDate(today.getDate() + days);
    return today.toLocaleDateString();
  };
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
            {titulos.map((titulo) => (
              <MenuItem value={titulo}>{titulo} </MenuItem>
            ))}
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
            <MenuItem value={"2D"}>2D</MenuItem>
            <MenuItem value={"3D"}>3D</MenuItem>
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
            <MenuItem value={getDias(0)}>{getDias(0)}</MenuItem>
            <MenuItem value={getDias(1)}>{getDias(1)}</MenuItem>
            <MenuItem value={getDias(2)}>{getDias(2)}</MenuItem>
            <MenuItem value={getDias(3)}>{getDias(3)}</MenuItem>
            <MenuItem value={getDias(4)}>{getDias(4)}</MenuItem>
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
            <MenuItem value={"15:00"}>15:00</MenuItem>
            <MenuItem value={"16:00"}>16:00</MenuItem>
            <MenuItem value={"18:00"}>18:00</MenuItem>
            <MenuItem value={"21:00"}>21:00</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default PeliculaStep;
