const { Deals } = require("../models/Deals");

const dealsData = [
  {
    image: "",
    courseName: "Jackson Park Golf Course",
    numberOfDeals: 12,
    dealsId: 1,
  },
  {
    image: "",
    courseName: "Jefferson Park Golf Course",
    numberOfDeals: 10,
    dealsId: 2,
  },
  {
    image: "",
    courseName: "West Seattle Golf Course",
    numberOfDeals: 8,
    dealsId: 3,
  },
  {
    image: "",
    courseName: "Bellevue Golf Course",
    numberOfDeals: 8,
    dealsId: 4,
  },
  {
    image: "",
    courseName: "Legion Memorial Golf Course",
    numberOfDeals: 6,
    dealsId: 5,
  },
  {
    image: "",
    courseName: "Walter E. Hall Golf Course",
    numberOfDeals: 6,
    dealsId: 6,
  },
  {
    image: "",
    courseName: "Lynnwood Golf Course",
    numberOfDeals: 4,
    dealsId: 7,
  },
  {
    image: "",
    courseName: "Cedarcrest Golf Course",
    numberOfDeals: 2,
    dealsId: 8,
  },
];

const seedDeals = () => Deals.bulkCreate(dealsData);

module.exports = seedDeals;
