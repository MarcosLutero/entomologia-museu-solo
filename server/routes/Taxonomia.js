const express = require("express");
const router = express.Router();
const { Taxonomia } = require("../models");

router.get("/", async (req, res) => {
  const listOfTaxonomia = await Taxonomia.findAll();
  res.json(listOfTaxonomia);
});

router.get("/options", async (req, res) => {
  await Taxonomia.findAll({
    attributes: [
      ["id", "value"],
      ["nome", "label"],
    ],
  }).then((options) => {
    res.json(options);
  });
});

router.post("/", async (req, res) => {
  const taxonomia = req.body;
  await Taxonomia.create(taxonomia);
  res.json(taxonomia);
});

module.exports = router;
