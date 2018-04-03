'use strict';

 var mongoose = require('mongoose');
 var User = require('../model/usersmodel');
 var LocalStrategy   = require('passport-local').Strategy;
var bCrypt = require('bcrypt-nodejs');
 var userCtrl = {};

userCtrl.findByUsername = function(req, res){

  console.log(req.body.password);
        var password = req.param("password");

      var username = req.param("username");
      console.log(username);

User.findOne({password:password}, function(err, user){


if(err){
  console.log(err);
}

if(user){
  console.log('Is defined');
  console.log(user);
      res.json({value : user.username})

    res.json({print : user.username})


  }else{

  res.json({print : null})

  console.log('not defined');


  }
 })
}




userCtrl.apiPOST = function (req, res) {
  var newn = new User(req.body);
  newn.save(function (err, result) {
    
        if(err){
          res.status = 500;
          res.json({err : err})
        } else{
          res.json({msg : "OK"})
        }
     
    
  });


};







module.exports = userCtrl;

































