const express = require("express");
const router = express.Router();
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

// CREATE new deal
router.post("/", async (req, res) => {
  try {
    const dealsData = await Deals.create({
      image: req.body.image,
      courseName: req.body.courseName,
      numberOfDeals: req.body.numberOfDeals,
    });
    res.status(200).json(dealsData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE deal by id
router.put("/:id", (req, res) => {
  Deals.findOne({
    where: {
      id: req.params.id,
    },
  }).then((deals) => {
    if (!deals.id) {
      return res.status(403).json({ message: "Invalid id " });
    }
    Deals.update(
      {
        image: req.body.image,
        courseName: req.body.courseName,
        numberOfDeals: req.body.numberOfDeals,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then((editDeals) => {
        res.json(editDeals);
      })
      .catch((err) => {
        res.status(500).json({ message: "error", err });
      });
  });
});

// DELETE deals by id
router.delete("/:id", (req, res) => {
  Deals.findOne({
    where: {
      id: req.params.id,
    },
  }).then((deals) => {
    Deals.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((deleteDeal) => {
        res.json(deleteDeal);
      })
      .catch((err) => {
        res.status(500).json({ message: "error", err });
      });
  });
});

module.exports = router;
