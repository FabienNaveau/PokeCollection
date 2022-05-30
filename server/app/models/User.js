const { DataTypes, Model } = require('sequelize');
const sequelize = require("../database")

class User extends Model {}

User.init({
  // Model attributes are defined here
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    unique: true, 
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  password: {
      type: DataTypes.STRING
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  tableName: 'user' // We need to choose the model name
});

// the defined model is the class itself
module.exports = User;