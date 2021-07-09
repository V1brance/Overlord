const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Class extends Model {}

Class.init(
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
      unique: true,
      validate: {
        isAlpha: true,
      },
    },
    //RegEx are not in any order, just strings not specific words
    armorProficiencies: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        // custom RegEx matches pattern heavy-shield-light-medium
        is: /^([a-z]+)(-*)([a-z]*)(-*)([a-z]*)(-*)([a-z]*)/,
      },
    },
    weaponProficiencies: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        // custom RegEx matches pattern martial-simple-custom-custom
        is: /^([a-z]+)(-*)([a-z]*)(-*)([a-z]*)(-*)([a-z]*)/,
      },
    },
    skillProficiencies: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // custom RegEx matches pattern perception-arcana-custom
        is: /^([a-z]+)(-*)([a-z]*)(-*)([a-z]*)/,
      },
    },
    toolProficiencies: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        // custom RegEx matches pattern herbalist-thieves
        is: /^([a-z ]+)(-*)([a-z ]+)/,
      },
    },
    hitDice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    savingThrows: {
      type: DataTypes.STRING,
      allowNull: False,
      validate: {
        is: /^([A-Z]{3})(-*)([A-Z]{3})/,
      },
    },
  },
  {
    sequelize,
    underscored: true,
    modelName: "class",
  }
);

module.exports = Class;
