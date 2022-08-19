var express = require("express");
var router = express.Router();
var peliculasModel = require("../../models/peliculasModel");
var fs = require('fs');

/* GET login page. */
router.get("/", async function (req, res, next) {
  var peliculas = await peliculasModel.getPeliculas();

  res.render("admin/peliculas", {
    layout: "admin/layout",
    persona: req.session.nombre,
    peliculas: peliculas,
  });
});

router.get("/agregar", (req, res, next) => {
  res.render("admin/agregar", {
    layout: "admin/layout",
  });
});

router.post("/agregar", async (req, res, next) => {
  const data = req.body;
  try {
    var tempFilePath = req.files.imagen.tempFilePath;
    var mimetype = req.files.imagen.mimetype
    var imageAsBase64 = fs.readFileSync(tempFilePath, 'base64');
    const imagen = `data:${mimetype};base64,${imageAsBase64}`
    if (data.titulo != "" && data.subtitulo != "" && data.cuerpo != "") {
      await peliculasModel.postPeliculas({
        ...data,
        imagen
      });
      res.redirect("/admin/peliculas");
    } else {
      res.render("admin/agregar", {
        layout: "admin/layout",
        error: true,
        message: "Todos los campos son requeridos",
      });
    }
  } catch (error) {
    console.error(error);
    res.render("admin/agregar", {
      layout: "admin/layout",
      error: true,
      message: "No se cargo la pelicula",
    });
  }
});

router.get("/eliminar/:id", async (req, res, next) => {
  var id = req.params.id;
  await peliculasModel.deletePeliculasById(id);
  res.redirect("/admin/peliculas");
});

router.get("/editar/:id", async (req, res, next) => {
  var id = req.params.id;
  var pelicula = await peliculasModel.getPeliculaById(id);

  res.render("admin/editar", {
    layout: "admin/layout",
    pelicula: pelicula,
  });
});

router.post("/editar", async (req, res, next) => {
  try {
    const data = req.body;
    var tempFilePath = req.files.imagen.tempFilePath;
    var mimetype = req.files.imagen.mimetype
    var imageAsBase64 = fs.readFileSync(tempFilePath, 'base64');
    const imagen = `data:${mimetype};base64,${imageAsBase64}`
    await peliculasModel.editarPeliculaById({
      ...data,
      imagen
    }, req.body.id);
    res.redirect("/admin/peliculas");
  } catch (error) {
    console.error(error);
    res.render("admin/editar", {
      layout: "admin/layout",
      error: true,
      message: "No se edito la pelicula",
    });
  }
});

module.exports = router;
