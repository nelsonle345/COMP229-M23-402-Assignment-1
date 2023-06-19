let express = require('express');
let router = express.Router();
let User = require('../../models/user')

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

// Get Route for displaying the login page
router.get('/login', indexController.displayLoginPage);

// Post Route for processing the login page
router.post('/login', indexController.processLoginPage);

// Get Route for displaying the register page
router.get('/register', indexController.displayRegisterPage);

// Post Route for processing the register page
router.post('/register', indexController.processRegisterPage);

// Get route for performing UserLogout
router.get('/logout', indexController.performLogout);

module.exports = router;
