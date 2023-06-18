let mongoose = require('mongoose');

//create a model class
let contactModel = mongoose.Schema({
    Contact_Name: String,
    Contact_Number: String,
    Email_address: String
},

{
    collection: 'contacts'
});

module.exports = mongoose.model('Contact', contactModel);