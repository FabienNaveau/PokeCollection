const { DataTypes, Model } = require('sequelize');
const sequelize = require("../database")

class Card extends Model {}

Card.init({
  // Model attributes are defined here
  id: {
    primaryKey: true,
    type: DataTypes.STRING,
    autoIncrement: false,
    unique: true, 
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  number: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  image: {
      type: DataTypes.STRING,
      allowNull: false
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  tableName: 'card' // We need to choose the model name
});

// the defined model is the class itself
module.exports = Card;