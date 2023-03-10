const http = require("http");
const getCharById = require("../src/controllers/getCharById");
const getCharDetail = require("../src/controllers/getCharDetail");

http
  .createServer((req, res) => {
    //Pilas esto es para evitar problemas el error de course creo que es
    res.setHeader("Access-Control-Allow-Origin", "*");
    let id = req.url.split("/").at(-1);

    if (req.url.includes("onsearch")) {
      //este es el mismo res de la linea 6
      getCharById(res, id);
    }
    if (req.url.includes("detail")) {
      //este es el mismo res de la linea 6
      getCharDetail(res, id);
    }
  })
  .listen(3001, "localhost");
