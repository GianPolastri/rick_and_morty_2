
let favs = require("../utils/favs");

const getAllFavs = (req, res) => {
    
    res.status(200).json(favs)
}