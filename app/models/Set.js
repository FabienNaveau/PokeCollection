const { DataTypes, Model } = require('sequelize');
const sequelize = require("../database")

class Set extends Model {}

Set.init({
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
  series: {
    type: DataTypes.STRING,
    allowNull: false
    // allowNull defaults to true
  },
  printedTotal: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  total: {
    type: DataTypes.INTEGER, 
    allowNull: false
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  tableName: 'set' // We need to choose the model name
});

// the defined model is the class itself
module.exports = Set;