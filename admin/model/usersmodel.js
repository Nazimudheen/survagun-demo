'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    Required: 'Kindly enter the  the username'
  },
  password: {
    type: String,
    Required: 'Kindly enter the  password'
  },
  created_at: {
    type: String,
    Required:{type: Date, default: Date.now}  
  },

});
module.exports = mongoose.model('User', UserSchema);
    
  