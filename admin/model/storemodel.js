'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StoreSchema = new Schema({
  Image: {
    type: String,
    Required: 'Kindly enter the  the Image'
  },
  email: {
    type: String,
    Required: 'Kindly enter the  Email'
  },
  phone: {
    type: String,
    Required: 'Kindly enter your Description'
  },
  location: {
    type: String,
    Required: 'Kindly enter location'
  },
  address: {
    type: String,
    Required: 'Kindly enter Address'
  },
   re_address: {
    type: String,
    Required: 'Kindly enter Reginel Office Address'
  },latitude: {
    type: String,
    Required: 'Kindly enter Address'
  },longttude: {
    type: String,
    Required: 'Kindly enter Address'
  },storename: {
    type: String,
    Required: 'Kindly enter Address'
  }
  
});

module.exports = mongoose.model('Stores', StoreSchema);

