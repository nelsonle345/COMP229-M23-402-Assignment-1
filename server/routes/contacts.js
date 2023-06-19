let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// Connect to our contact model
let Contact = require('../../models/contacts');

// Get route for the contact list page - READ Operation
router.get('/', async (req, res, next) => {
    try {
        let contactList = await Contact.find();
        console.log(contactList);
        res.render('contact/list', { title: 'Business Contacts List', contactList: contactList });
    } catch (err) {
        console.error(err);
    }
});

// Get Route for displaying the Add page - CREATE Operation
router.get('/add', async (req, res, next) => {
    try {
        res.render('contact/add', { title: 'Add Business Contact' });
    } catch (err) {
        console.error(err);
    }
});

// Post Route for processing the Add Page - CREATE Operation
router.post('/add', async (req, res, next) => {
    let newContact = new Contact({
        "contact_name": req.body.contact_name,
        "contact_number": req.body.contact_number,
        "email_address": req.body.email_address
    });

    try {
        console.log(newContact);
        await newContact.save();
        res.redirect('/contact-list');
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

// Get Route for displaying the Edit Page - UPDATE Operation
router.get('/edit/:id', async (req, res, next) => {
    let id = req.params.id;

    try {
        let contactToEdit = await Contact.findById(id);
        res.render('contact/edit', { title: 'Edit Contact', contact: contactToEdit });
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
});

// Post Route for processing the Edit Page - UPDATE Operation
router.post('/edit/:id', async (req, res, next) => {
    let id = req.params.id;
    let updatedContact = {
        "contact_name": req.body.contact_name,
        "contact_number": req.body.contact_number,
        "email_address": req.body.email_address
    };

    try {
        console.log("Updating...");
        await Contact.updateOne({ _id: id }, updatedContact);
        res.redirect('/contact-list');
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

// Get to perform Deletion - DELETE Operation
router.get('/delete/:id', async (req, res, next) => {
    let id = req.params.id;

    try {
        await Contact.findByIdAndRemove(id);
        res.redirect('/contact-list');
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

module.exports = router;
