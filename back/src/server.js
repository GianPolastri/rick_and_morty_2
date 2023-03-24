const http = require("http");
const characters = require("./utils/data");

http
  .createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");

    const { url } = req;

    if (url.includes("rickandmorty/characters/")) {
      const id = url.split("/").at(-1);
      const character = characters.find((char) => char.id == id);

      if (character) {
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(character));
      } else {
        res.writeHead(404, { "Content-Type": "applicataion/json" });
        return  res.end(
          JSON.stringify({ error: "No se a podido encontrar al personaje" })
        );
      }
    }
  })
  .listen(3001, "localhost");

//* Tendria que reformular todo el codigo, funciona pero no esta del todo bien
