const homeController = require('./controllers/home');

const router = require('express').Router()

router.get('/', homeController.sayHello)

module.exports = router;