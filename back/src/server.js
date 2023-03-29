const { json } = require("express");
const express = require("express");
const PORT = 3001;
const mainRouter = require('../src/routes/index');
const morgan = require('morgan');
const cors = require('cors')

const server = express();

server.use(express.json());
server.use(morgan('dev')) 
server.use(cors())

server.use("/rickandmorty", mainRouter);


server.listen(PORT, () => {
  console.log("Server is listening in port " + PORT);
});

