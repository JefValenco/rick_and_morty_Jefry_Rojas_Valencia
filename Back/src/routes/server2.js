//1)
const http = require("http");
const characters = require("rick_and_morty/back/utils/data.js");

http
  .createServer((req, res) => {
    //2) Creo el "start": "nodemon ./src/routes/server.js" y luego lo corro en consola npm start

    if (req.url.includes("rickandmorty/character")) {
      console.log(req.url);
      /*    res.setHeader("Access-Control-Allow-Origin", "*"); */
      /*  console.log(req.url.split("/").at(-1)); */
      let id = req.url.split("/").at(-1);

      let characterFilter = characters.filter((char) => char.id === Number(id));
      // El filter me retorna  un array con el obj character

      //otro metodo con el que esto se peude hacer es el find que devuelve el primer elemento que le coincida
      // Mientras que el find me trae directametne el obj
      /* 
      let characterFilter = characters.find((char) => char.id === Number(id));
      console.log(characterFilter); */

      res
        .writeHead(200, { "Content-type": "application/json" })
        .end(JSON.stringify(characterFilter[0]));
    }
  })
  .listen(3001, "localhost");
