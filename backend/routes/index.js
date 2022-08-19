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

module.exports = router;
