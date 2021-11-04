const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// api routes
router.use("/api", apiRoutes);

// if no api routes hit, send the React app
router.use(function (req, res) {
  res.sendFile(pathjoin(__dirname, "../client/public/index.html"));
});

module.exports = router;
