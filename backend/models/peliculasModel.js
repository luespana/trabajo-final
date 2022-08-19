var pool = require("./bd");

async function getPeliculas() {
  var query = "select * from peliculas";
  var rows = await pool.query(query);
  return rows;
}

async function postPeliculas(obj) {
  console.log("obj", obj)
  try {
    var query = "insert into peliculas set ?";
    var rows = await pool.query(query, [obj]);
    return rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function deletePeliculasById(id) {
  var query = "delete from peliculas where id = ?";
  var rows = await pool.query(query, [id]);
  return rows;
}

async function getPeliculaById(id) {
  var query = "select * from peliculas where id = ?";
  var rows = await pool.query(query, [id]);
  return rows[0];
}

async function editarPeliculaById(obj, id) {
  try {
    var query = "update peliculas set ? where id=?";
    var rows = await pool.query(query, [obj, id]);
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getPeliculas,
  postPeliculas,
  deletePeliculasById,
  getPeliculaById,
  editarPeliculaById
};
