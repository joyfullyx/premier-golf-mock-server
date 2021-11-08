var express = require("express");
var app = express();
var PORT = process.env.PORT || 3001;
var allRoutes = require("./controllers");
const cors = require("cors");

// require models for sync
var sequelize = require("./config/connection.js");
const { Deals } = require("./models/Deals");

// set up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// local
app.use(cors());

// deployed
// app.use(cors())

app.use("/", allRoutes);

sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("🌍App listening on PORT " + PORT + "🌍 ");
  });
});
