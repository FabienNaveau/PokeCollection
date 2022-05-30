const User = require('../models/User')
const Set = require('../models/Set')
const Card = require('../models/Card')

const home = {
    
    sayHello: async (_, res) => {
        res.send('Hello world !')

    }
}   


module.exports = home;