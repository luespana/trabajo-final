var express = require("express");
var router = express.Router();
var peliculasModel = require("../models/peliculasModel");
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

module.exports = router;
