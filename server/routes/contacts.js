let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// Connect to our contact model
let Contact = require('../../models/contacts');

let contactController = require('../controllers/contacts');

// Get route for the contact list page - READ Operation
router.get('/', contactController.displayContactList);

// Get Route for displaying the Add page - CREATE Operation
router.get('/add', contactController.displayAddPage);

// Post Route for processing the Add Page - CREATE Operation
router.post('/add', contactController.processAddPage);

// Get Route for displaying the Edit Page - UPDATE Operation
router.get('/edit/:id', contactController.displayEditPage);

// Post Route for processing the Edit Page - UPDATE Operation
router.post('/edit/:id', contactController.processEditPage);

// Get to perform Deletion - DELETE Operation
router.get('/delete/:id', contactController.performDelete);

module.exports = router;
