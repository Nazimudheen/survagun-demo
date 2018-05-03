'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StoreShema = new Schema({
  Image: {
    type: String,
    Required: 'Kindly enter the  the Image'
  },storename: {
    type: String,
    Required: 'Kindly enter Address'
  },
  latitude: {
    type: String,
    Required: 'Kindly enter latitude'
  },longttude: {
    type: String,
    Required: 'Kindly enter longttude'
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
  }
});
module.exports = mongoose.model('Stores', StoreSchema);

