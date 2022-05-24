const User = require('../models/User')
const Set = require('../models/Set')
const Card = require('../models/Card')
const axios = require('axios').default;

const home = {
    
    sayHello: async (_, res) => {
        res.send('Hello world !')
    }   
}

module.exports = home;