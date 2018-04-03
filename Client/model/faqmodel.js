'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FaqSchema = new Schema({
  heading: {
    type: String,
    Required: 'Kindly enter the  the heading'
  },
  sub_heading: {
    type: String,
    Required: 'Kindly enter the  Sub Heading'
  },
  description: {
    type: String,
    Required: 'Kindly enter your Description'
  }
});
module.exports = mongoose.model('Faqs', FaqSchema);

