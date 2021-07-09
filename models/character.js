// TO DO

// Create Models:
// Class - Done
// Subclass - Done
// Background - Done
// Race
// Subrace
// Backpack
// Weapon
// Magic Weapon
// Wand
// Staff
// Armor
// Magic Armor
// Magic Item
// Item

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Character extends Model {}

Character.init(
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
    race: {
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
    subclass: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    background: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "backpack",
        key: "id",
      },
    },
    stats: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alignment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: true,
    modelName: "character",
  }
);

module.exports = Character;
