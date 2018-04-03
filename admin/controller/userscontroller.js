'use strict';

var mongoose = require('mongoose');
var User = require('../model/usersmodel');
// var LocalStrategy = require('passport-local').Strategy;
// var bCrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var userCtrl = {};
userCtrl.login = function(req, res) {

    User.findOne({
        username: req.body.username
    }, function(err, user) {
        if (err) {
            console.log(err);
        }

        if (user) {
            bcrypt.compare(req.body.password, user.password, function (err, result) {
                if(err){
                    res.status = 500;
                    res.json({msg : "Internal server error"})
                }
                if(result === true){
                    var token = jwt.sign({id : user._id}, "sampleSecret" ,{expiresIn: 10000});
                    res.json({
                        msg : "OK",
                        user : user,
                        token: 'JWT ' + token
                     });
                } else {
                    res.status = 400;
                    res.json({
                        msg : "Invalid password"
                    })
                }
            })
        } else {
            res.status = 400;
            res.json({
                msg : "Invalid Email"
            })
        }
    })
}




userCtrl.apiPOST = function(req, res) {
    var newn = new User(req.body);
    newn.save(function(err, result) {

        if (err) {
            res.status = 500;
            res.json({
                err: err
            })
        } else {
            res.json({
                msg: "OK"
            })
        }


    });


};




module.exports = userCtrl;