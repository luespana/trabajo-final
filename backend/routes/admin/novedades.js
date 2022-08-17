var express = require("express");
var router = express.Router();
var novedadesModel = require("../../models/novedadesModel");
const util = require("util");
const cloudinary = require("cloudinary").v2;
const uploader = util.promisify(cloudinary.uploader.upload);

/* GET login page. */
router.get("/", async function (req, res, next) {
  var novedades = await novedadesModel.getNovedades();

  res.render("admin/novedades", {
    layout: "admin/layout",
    persona: req.session.nombre,
    novedades,
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
    console.log(req.files.imagen)
    var img_id = "";
    if (req.files && Object.keys(req.files).lenght > 0) {
      imagen = req.files.imagen;
      // img_id = (await uploader(imagen.tempFilePath)).public_id;
      const x = await uploader(req.files.imagen.tempFilePath)
      console.log("x", x)
    }
    // if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
    //   console.log("imgid", img_id)
    //   await novedadesModel.postNovedades({
    //     ...req.body,
    //     img_id
    //   });
    //   res.redirect("/admin/novedades");
    // } else {
    //   res.render("admin/agregar", {
    //     layout: "admin/layout",
    //     error: true,
    //     message: "Todos los campos son requeridos",
    //   });
    // }
  } catch (error) {
    console.error(error);
    res.render("admin/agregar", {
      layout: "admin/layout",
      error: true,
      message: "No se cargo la novedad",
    });
  }
});

router.get("/eliminar/:id", async (req, res, next) => {
  var id = req.params.id;
  await novedadesModel.deleteNovedadesById(id);
  res.redirect("/admin/novedades");
});

router.get("/editar/:id", async (req, res, next) => {
  var id = req.params.id;
  var novedad = await novedadesModel.getNovedadById(id);

  res.render("admin/editar", {
    layout: "admin/layout",
    novedad,
  });
});

router.post("/editar", async (req, res, next) => {
  try {
    var obj = {
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      cuerpo: req.body.cuerpo,
    };
    console.log(obj);
    await novedadesModel.editarNovedadById(obj, req.body.id);
    res.redirect("/admin/novedades");
  } catch (error) {
    console.error(error);
    res.render("admin/editar", {
      layout: "admin/layout",
      error: true,
      message: "No se edito la novedad",
    });
  }
});

module.exports = router;
