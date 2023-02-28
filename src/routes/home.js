// const express = require('express')
// var router = express.Router();
var Router       = require('router')

var router = Router()
var homeController =require('../controllers/HomeController')
router.get('/',homeController.home)

module.exports = router;
