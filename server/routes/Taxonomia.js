const express = require("express");
const router = express.Router();
const {Taxonomia} = require("../models")

router.get("/", async (req, res) => {
    const listOfTaxonomia = await Taxonomia.findAll()
    res.json(listOfTaxonomia)

});

router.post("/", async (req, res) => {
    const taxonomia = req.body
    await Taxonomia.create(taxonomia)
    res.json(taxonomia)
})


module.exports = router;
