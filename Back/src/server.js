const http = require("http");
/* const { default: characters } = require("./utils/data.js"); */

const characters = require("./utils/data");

http
  .createServer((req, res) => {
    // Esto es para solucionar el problema de course es darle permiso para que consuma info de varios servidores
    res.setHeader("Access-Control-Allow-Origin", "*");

    //Acá estamos definiendo las rutes o los end-points:
    // El cliente está preguntado a que barra... aquí barra character

    if (req.url.includes("rickandmorty/character")) {
      //Console log apra probar
      // Con el .at(-1) Me estoy quedando con el numero del idi de la url. en este caso el 3:
      // http://localhost:3001/rickandmorty/character/3
      //En pocas palabras nos quedamos con la ultima posición del array
      /*       console.log(req.url.split("/")).at(-1); */
      let id = req.url.split("/").at(-1);
      /* 
      *Muy importante

      */
      // Si lo hago con === id , osea tres iguales me va a imprimir un [] vacio
      // En cambio si lo hago con solo dos == id - Me imprime la info. Por que en la url el dato me viaje como string ""
      // Maty dice que prihibido ahcer esto por eso mejor lo parseamos
      let characterFilter = characters.filter((char) => char.id === Number(id));
      console.log(characterFilter);

      // Ahora hacemos que responda la ruta
      res
        .writeHead(200, { "content-type": "application/json" })

        .end(JSON.stringify(characterFilter));

      // De acá nos fuimos a app.js del front para conectar front y back
    }
  })
  .listen(3001, "localhost");
