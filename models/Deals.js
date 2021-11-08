const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Deals extends Model {}

Deals.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    courseName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numberOfDeals: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscore: true,
    modelName: "deals",
  }
);

module.exports = Deals;
