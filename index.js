require('dotenv').config()

const express = require('express')
require('express').Router()

const PORT = process.env.PORT || 3000

const app = express()

app.get('/', (_, res) => res.send('Le serveur fonctionne bien'))

app.listen(PORT, () => console.log(`App listening on ${PORT}`))