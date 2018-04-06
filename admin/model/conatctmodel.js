'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
  name: {
    type: String,
    Required: 'Kindly enter the  the name'
  },
  email: {
    type: String,
    Required: 'Kindly enter the  Email'
  },
  phone: {
    type: String,
    Required: 'Kindly enter your Description'
  },
  message: {
    type: String,
    Required: 'Kindly enter Message'
  }
});
module.exports = mongoose.model('Contact', ContactSchema);

