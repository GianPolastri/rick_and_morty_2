const {Router} = require('express');
const getCharById = require('../controllers/getCharById')
const getCharDetail = require('../controllers/getCharDetail')

const favsRouter = require('./favsRoutes')


const mainRouter = Router();

mainRouter.get("/onsearch/:id", getCharById);
mainRouter.get("/detail/:id", getCharDetail);

//******************Rutas de favs************************ */

mainRouter.use("/fav", favsRouter)



module.exports = mainRouter;