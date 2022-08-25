var express = require("express");
var router = express.Router();
var peliculasModel = require("../models/peliculasModel");
var nodemailer = require("nodemailer");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.redirect("/admin/login");
});

router.get("/peliculas", async function (req, res, next) {
  var peliculas = await peliculasModel.getPeliculas();
  res.json(peliculas);
});

router.post("/pelicula", async function (req, res, next) {
  var pelicula = await peliculasModel.getPeliculaById(req.body.id);
  res.json(pelicula);
});

router.get("/peliculasname", async function (req, res, next) {
  var peliculas = await peliculasModel.getPeliculas();
  var titulos = peliculas.map((pelicula) => {
    return pelicula.titulo;
  });
  res.json(titulos);
});

router.post("/compra", async (req, res) => {
  const mail = {
    to: req.body.email,
    subject: `¡Gracias ${req.body.nombre} por su compra!`,
    html: `<h1>Detalle de la compra</h1> <br> <p>Pelicula: ${req.body.pelicula}</p><br> <p>Dia y Horario: ${req.body.dia} - ${req.body.horario}</p>`,
  };
  var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  await transport.sendMail(mail);

  res.status(201).json({
    error: false,
    message: "Mensaje enviado",
  });
});

module.exports = router;
