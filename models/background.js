const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Background extends Model {}

Background.init(
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
    feature: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    proficiencies: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        is: /^([a-z]+)(-*)([a-z]*)(-*)(-*)([a-z]*)(-*)([a-z]*)/,
      },
    },
    skills: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^([a-z]+)(-*)([a-z]*) /,
      },
    },
    gear: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    coin: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    underscored: true,
    modelName: "background",
  }
);
