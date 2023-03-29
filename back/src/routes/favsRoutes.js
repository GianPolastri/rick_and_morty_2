const { Router } = require("express");
const express = require('express');
const addNewFav = require("../controllers/addNewFav");
let favs = require("../utils/favs");

const favsRouter = Router();
favsRouter.use(express.json());

favsRouter.post("/", (req, res) => {
  const { body } = req;

  const newChar = body;
  favs.push(newChar);
  res.status(200).json(newChar);
});

favsRouter.get("/", (req, res) => {
  res.status(200).json(favs);
});

favsRouter.delete("/:id", (req,res) => {
    const {id} = req.params;

    favs = favs.filter(char=>char.id != id);
    res.status(200).json({status: 'todo ok'})
})


module.exports = favsRouter;