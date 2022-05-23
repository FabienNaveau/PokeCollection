require('dotenv').config()

const express = require('express')
const sequelize = require('./app/database')
const models = require('./app/models')
require('express').Router()

const PORT = process.env.PORT || 3000

const app = express()

sequelize
  .sync()
  .then(() => {
    console.log('Les tables se sont bien crées');
  })
  .catch((err) => {
    console.log(err);
  });

app.get('/', (_, res) => res.send('Le serveur fonctionne bien'))

app.listen(PORT, () => console.log(`App listening on ${PORT}`))