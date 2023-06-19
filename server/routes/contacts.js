let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

// Connect to our contact model
let Contact = require('../../models/contacts');

let contactController = require('../controllers/contacts');

function requireAuth(req, res, next)
{
    //check is the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}


// Get route for the contact list page - READ Operation
router.get('/', contactController.displayContactList);

// Get Route for displaying the Add page - CREATE Operation
router.get('/add', requireAuth, contactController.displayAddPage);

// Post Route for processing the Add Page - CREATE Operation
router.post('/add', requireAuth, contactController.processAddPage);

// Get Route for displaying the Edit Page - UPDATE Operation
router.get('/edit/:id', requireAuth, contactController.displayEditPage);

// Post Route for processing the Edit Page - UPDATE Operation
router.post('/edit/:id', requireAuth, contactController.processEditPage);

// Get to perform Deletion - DELETE Operation
router.get('/delete/:id', requireAuth, contactController.performDelete);

module.exports = router;
