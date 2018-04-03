'use strict';

var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
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

UserSchema.pre('save' , function (next) {
  console.log("here")
  currUser = this;
  
});
module.exports = mongoose.model('Users', UserSchema);
