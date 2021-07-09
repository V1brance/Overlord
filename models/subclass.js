const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Subclass extends Model {}

Subclass.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    class: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "class",
        key: "id",
      },
    },
  },
  {
    sequelize,
    underscored: true,
    modelName: "subclass",
  }
);

module.exports = Subclass;
