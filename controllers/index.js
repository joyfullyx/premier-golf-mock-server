const express = require("express");
const router = express.Router();
const userRoutes = require("./dealsController");
const dealRoutes = require("./dealsController");

router.get("/", (req, res) => {
  res.send("heyoo!");
});

router.use(dealRoutes);
router.use("/api/deals", dealRoutes);

module.exports = router;
