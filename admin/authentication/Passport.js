/**
 * Created by Aditya on 02-Sep-17.
 */
var JwtStrategy = require('passport-jwt').Strategy
    ,ExtractJwt = require('passport-jwt').ExtractJwt;

var User = require('../model/usersmodel');

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
opts.secretOrKey = "sampleSecret";


module.exports = function(passport) {
    passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
        User.findOne({_id: jwt_payload.id}, function(err, user) {
            if (err) {
                return done(err, false, {msg : "JsonWebTokenError"});
            }
            if (user) {
                done(null, user);
            } else {
                done(null, false, {msg : "JsonWebTokenError"});
            }
        });
    }));
};