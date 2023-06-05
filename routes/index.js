var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});


/* GET About Me page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Us' });
});

/* GET Project page. */
router.get('/projects', function(req, res, next) {
  res.render('project', { title: 'Projects' });
});

/* GET Server page. */
router.get('/services', function(req, res, next) {
  res.render('service', { title: 'Services' });
});

module.exports = router;
