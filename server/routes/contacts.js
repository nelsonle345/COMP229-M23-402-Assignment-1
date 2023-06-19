let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to our contact model
let Contact = require('../../models/contacts');
const contacts = require('../../models/contacts');

// Get route for the contact list page - READ Operation
router.get('/', async (req, res, next) =>{
    try {
        let contactList = await contacts.find()
        console.log(contactList)

        res.render('contact_data', {title: 'Business Contacts List', contactList: contactList})
    } catch (err){
        console.error(err);
    }
});

// Get Route for displaying the Add page - CREATE Operation

//Post Route for processing the Add Page - CREATE Operation

//Get Route for displaying the Edit Page - UPDATE Operation

//Post Route for processing the Edit Page - UPDATE Operation

//Get to perform Delection - Delete Operation


module.exports = router; 