import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function PreguntasPage() {
  return (
    <main className="holder">
      <div>
        <h3 className="boleteria_title">RESOLVE TUS DUDAS</h3>
        <h1 className="venta_title">Preguntas Frecuentes</h1>
      </div>
      <Accordion sx={{ width: "70%", margin: "2rem auto" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            ¿Puedo cambiar el día, cine, horario, localidades o película de las
            entradas que compré?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No podemos hacer cambios. En el mail de confirmación de su compra se
            encuentran las condiciones y procedimientos para hacer cambios, que
            requerirán que usted se dirija a la boletería del cine antes del
            inicio de la función para la cual haya comprado entradas. Lo que
            podemos hacer es solicitar una devolución de su compra, y luego
            usted puede volver a comprar las entradas de su preferencia. Para
            eso, deberá reenviarnos el mail de confirmación de la compra,
            teniendo en cuenta que para gestionar una devolución debe hacerlo al
            menos tres horas antes del inicio de la función para la cual haya
            comprado entradas.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ width: "70%", margin: "2rem auto" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            Quiero una devolución parcial de mi compra (devolver una de varias
            entradas, devolver las comidas pero no las entradas, u otros casos
            similares). ¿Es posible?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No podemos hacer devoluciones parciales. Usted puede dirigirse a la
            boletería del cine y realizar el pedido de devolución parcial, antes
            que inicie la función para la cual haya comprado entradas. También
            puede pedir la devolución total y hacer una nueva compra. Para eso,
            deberá reenviarnos el mail de confirmación de la compra, teniendo en
            cuenta que para gestionar una devolución debe hacerlo al menos tres
            horas antes del inicio de la función para la cual haya comprado
            entradas
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ width: "70%", margin: "2rem auto" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            No me llegó el mail de confirmación de la compra. ¿Qué pudo haber
            ocurrido?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Cuando usted se registró en la página, nos proporcionó una dirección
            de e-mail. A esa dirección enviamos todas nuestras comunicaciones,
            incluyendo las de confirmación de compras. Si usted no encuentra el
            mail de confirmación, por favor tenga en cuenta los siguientes
            puntos: -Asegúrese de estar revisando la casilla de mail
            correspondiente. -Revise si el mail de confirmación no se encuentra
            en las carpetas de SPAM o correo no deseado. -Algunas casillas de
            e-mail laborales o profesionales rechazan los mensajes provenientes
            de remitentes no autorizados. Le recomendamos que no se registre en
            la página con este tipo de direcciones de e-mail. -En ocasiones las
            casillas de mail exceden la cuota de mensajes permitidos por el
            proveedor de correo electrónico. A partir de ese momento, ya no
            podrá recibir mensajes en esa casilla. Por favor asegúrese de que no
            sea el caso. Normalmente el proveedor de correo electrónico le
            enviará una alerta si está excedido en su cuota. -Puede encontrar la
            información correspondiente a su compra en la sección “Mi Cuenta” de
            la página www.voyalcine.net, entrando con su mail o DNI y su
            contraseña. -Entre a la sección “Mi Cuenta” de la página
            www.voyalcine.net con su número de DNI y asegúrese de que la
            dirección de mail que figura en sus datos está bien escrita y es una
            que usted utiliza habitualmente. En caso contrario, realice los
            cambios necesarios. -Si a pesar de haber seguido estas indicaciones
            no encuentra la información, envíenos su consulta.
          </Typography>
        </AccordionDetails>
      </Accordion>{" "}
      <Accordion sx={{ width: "70%", margin: "2rem auto" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>¿Puedo cancelar un pedido de devolución?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lamentablemente, no podemos cancelar un pedido de devolución ya
            inciado. Usted puede hacer una nueva compra, pero no podemos
            garantizar que las localidades que usted ha solicitado devolver se
            encuentren nuevamente disponibles
          </Typography>
        </AccordionDetails>
      </Accordion>
    </main>
  );
}

export default PreguntasPage;
