const { Model, Datatypes } = require("sequelize");
const sequelize = require("../config/connection");

class Deals extends Model {}

Deals.init(
  {
    id: {
      type: Datatypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    image: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    courseName: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    description: {
      type: Datatypes.STRING,
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
