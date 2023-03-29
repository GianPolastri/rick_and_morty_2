const axios = require("axios");
const KEY = "9d97e1f1346d.2db9fae612b2d7eede69";
const URL = "https://be-a-rym.up.railway.app/api";
let favs = require("../utils/favs");

const addNewFav = (req, res) => {
  const { body } = req;

  const newChar = body;
  favs.push(newChar);
  res.status(200).json(newChar);
};

module.exports = addNewFav;
