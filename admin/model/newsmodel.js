'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NewsSchema = new Schema({
  heading: {
    type: String,
    Required: 'Kindly enter the  the Heading'
  },
  subheading: {
    type: String,
    Required: 'Kindly enter the  Sub heading'
  },
  description: {
    type: String,
    Required: 'Kindly enter your Description'
  },
  Image: {
    type: String,
    Required: 'Kindly enter Image'
  }
});

module.exports = mongoose.model('News', NewsSchema);


