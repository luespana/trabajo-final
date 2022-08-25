import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const style = {
  width: "100%",
  display: "flex",
  bgcolor: "background.paper",
  flexDirection: "column",
};

function ConfirmarStep({ info }) {
  return (
    <List sx={style} aria-label="mailbox folders">
      <ListItem divider>
        <ListItemText primary={`Pelicula: ${info.pelicula}`} />
      </ListItem>
      <Divider />
      <ListItem divider>
        <ListItemText primary={`Formato: ${info.formato}`} />
      </ListItem>
      <Divider />
      <ListItem divider>
        <ListItemText
          primary={`Dia y Horario: ${info.dia} - ${info.horario}`}
        />
      </ListItem>
      <Divider />
      <ListItem divider>
        <ListItemText
          primary={`Nombre y Apellido: ${info.nombre} ${info.apellido}`}
        />
      </ListItem>
      <Divider />
      <ListItem divider>
        <ListItemText primary={`Email: ${info.email}`} />
      </ListItem>
      <Divider />
      <ListItem divider>
        <ListItemText primary={`Telefono: ${info.telefono}`} />
      </ListItem>
      <Divider />
    </List>
  );
}

export default ConfirmarStep;
