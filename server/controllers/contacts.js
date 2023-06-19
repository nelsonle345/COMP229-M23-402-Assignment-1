// Create a reference to the model
let Contact = require('../../models/contacts');

module.exports.displayContactList = async (req, res, next) => {
    try {
        let contactList = await Contact.find();
        res.render('contact/list', { 
            title: 'Business Contacts List', 
            contactList: contactList, 
            displayName: req.user ? req.user.displayName : '' });
        
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
};

module.exports.displayAddPage = async (req, res, next) => {
    try {
        res.render('contact/add', { 
        title: 'Add Business Contact',
        displayName: req.user ? req.user.displayName : ''});
    } catch (err) {
        console.error(err);
    }
};


module.exports.processAddPage = async (req, res, next) => {
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
};

module.exports.displayEditPage = async (req, res, next) => {
    let id = req.params.id;

    try {
        let contactToEdit = await Contact.findById(id);
        res.render('contact/edit', { title: 'Edit Contact',
        contact: contactToEdit,
        displayName: req.user ? req.user.displayName : '' });
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
};

module.exports.processEditPage = async (req, res, next) => {
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
};

module.exports.performDelete = async (req, res, next) => {
    let id = req.params.id;

    try {
        await Contact.findByIdAndRemove(id);
        res.redirect('/contact-list');
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};
