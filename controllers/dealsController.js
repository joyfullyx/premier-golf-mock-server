const router = require("express").Router();
const Deals = require("../models/Deals");

// GET all deals
router.get("/", async (req, res) => {
  try {
    const dealsData = await Deals.findAll();
    res.status(200).json(dealsData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET ONE deal by ID
router.get("/:id", async (req, res) => {
  try {
    const dealsData = await Deals.findByPk(req.params.id);
    if (!dealsData) {
      res.status(400).json({ message: "No deals found with this id" });
      return;
    }
    res.status(200).json(dealsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
