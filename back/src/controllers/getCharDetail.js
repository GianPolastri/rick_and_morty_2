const axios = require("axios");
const KEY = "9d97e1f1346d.2db9fae612b2d7eede69";
const URL = "https://be-a-rym.up.railway.app/api";

const getCharDetail = (req, res) => {
  const { id } = req.params;

  axios
    .get(`${URL}/character/${id}?key=${KEY}`)
    .then((response) => {
      const { id, name, species, image, gender, origin } = response.data;
      res.status(200).json({ id, name, species, image, gender, origin });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

module.exports = getCharDetail;
