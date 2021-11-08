const { Deals } = require("../models");

const dealsData = [
  {
    image: "",
    courseName: "Jackson Park Golf Course",
    numberOfDeals: "12 DEALS TODAY",
    dealsId: 1,
  },
  {
    image: "",
    courseName: "Jefferson Park Golf Course",
    numberOfDeals: "10 DEALS TODAY",
    dealsId: 2,
  },
  {
    image: "",
    courseName: "West Seattle Golf Course",
    numberOfDeals: "8 DEALS TODAY",
    dealsId: 3,
  },
  {
    image: "",
    courseName: "Bellevue Golf Course",
    numberOfDeals: "8 DEALS TODAY",
    dealsId: 4,
  },
  {
    image: "",
    courseName: "Legion Memorial Golf Course",
    numberOfDeals: "6 DEALS TODAY",
    dealsId: 5,
  },
  {
    image: "",
    courseName: "Walter E. Hall Golf Course",
    numberOfDeals: "6 DEALS TODAY",
    dealsId: 6,
  },
  {
    image: "",
    courseName: "Lynnwood Golf Course",
    numberOfDeals: "4 DEALS TODAY",
    dealsId: 7,
  },
  {
    image: "",
    courseName: "Cedarcrest Golf Course",
    numberOfDeals: "2 DEALS TODAY",
    dealsId: 8,
  },
];

const seedDeals = () => Deals.bulkCreate(dealsData);

module.exports = seedDeals;
