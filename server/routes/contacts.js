let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to our contact model
let Contact = require('../../modules/contacts');
const contacts = require('../../modules/contacts');

// Get route for the contact list page
router.get('/', async (req, res, next) =>{
    try {
        let contactList = await contacts.find()
        console.log(contactList)

        res.render('contact_data', {title: 'Business Contacts List', contactList: contactList})
    } catch (err){
        console.error(err);
    }
});

module.exports = router; 