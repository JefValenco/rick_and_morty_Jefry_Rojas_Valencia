const axios = require("axios");

const getCharDetail = (res, id) => {
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((result) => result.data)
    // result o response no importa
    .then((data) => {
      let character = {
        id: data.id,
        image: data.image,
        name: data.name,
        gender: data.gender,
        species: data.species,
        status: data.status,
        origin: data.origin?.name,
      };
      res
        .writeHead(200, { "Content-type": "application/json" })
        .end(JSON.stringify(character));
    })
    .catch((err) =>
      res
        .writeHead(500, { "Content-Type": "text/plain" })
        .end(`El personaje con id:${id} no fue encontrado`)
    );
};

module.exports = getCharDetail;
