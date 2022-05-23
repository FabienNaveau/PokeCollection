require('dotenv').config()

const express = require('express')
const sequelize = require('./app/database')
require('./app/models')
const router = require('./app/router')

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

app.use(router)

app.listen(PORT, () => console.log(`App listening on ${PORT}`))