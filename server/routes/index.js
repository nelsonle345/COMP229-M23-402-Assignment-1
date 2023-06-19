var express = require('express');
var router = express.Router();

// Import the index controller
let indexController = require('../controllers/index');

// GET home page
router.get('/', indexController.displayHomePage);

// GET home page
router.get('/home', indexController.displayHomePage);

// GET About Me page
router.get('/about', indexController.displayAboutPage);

// GET Contact page
router.get('/contact', indexController.displayContactPage);

// GET Project page
router.get('/projects', indexController.displayProjectPage);

// GET Service page
router.get('/services', indexController.displayServicePage);

module.exports = router;
