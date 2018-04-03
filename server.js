  var express = require('express'),
  app = express(),
  passport = require('passport'),
  port = process.env.PORT || 5000,
  mongoose = require('mongoose'),
   News = require('./admin/model/newsmodel'),
  Store = require('./admin/model/storemodel'),
  Faq = require('./admin/model/faqmodel'),
  Article = require('./admin/model/articlemodel'),
  User = require('./admin/model/usersmodel'),

  bodyParser = require('body-parser'),
  routes = require('./admin/routes/routMap');

var multer = require('multer');
var cors = require('cors');
var user = require('./admin/model/usersmodel');
app.use(cors());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/admin');

var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({extended: true}));

app.use(passport.initialize());
require('./admin/authentication/Passport')(passport);
app.get('/API/getCurrentUser', function (req, res, next) {
  passport.authenticate('jwt', {session : false}, function(err, user, info) {
      if (err) {
          res.status(500);
          res.json({msg : "Internal server Error"});
      }
      else if (!user) {
          res.status(400);
          res.json({msg : "Invalid token"});
      } else{
          req.user = user;
          next();

      }
  })(req, res, next);
},function(req,res){
  res.json({msg : "OK"})
});


routes(app);

app.use("/",express.static("Client/web-angular"));

app.use("/admin",express.static("admin/web-angular"));

app.get("/admin/*", function (req,res) {
  res.sendFile("admin/web-angular/index.html" , {root : __dirname});
})

app.get("/admin", function (req,res) {
  res.sendFile("admin/web-angular/index.html" , {root : __dirname});
})

app.get("*", function (req,res) {
  res.sendFile("Client/web-angular/index.html" , {root : __dirname});
})


var args = process.argv;
if(args[args.length-3] === 'INIT_CLIENT'){
    user.findOne({username : args[args.length - 2]}, function(err, user){
      if(err){
        console.log(err);
        process.exit();
      } else if(user){
        console.log("This account already exists");
        process.exit();
      } else{
        bcrypt.hash(args[args.length-1],10,function (err, hash) {
          var newUser = new User({
            username :  args[args.length-2],
            password: hash
          });
            newUser.save(function(err, user){
              console.log("account for user " + args[args.length-2]+" has been created"); 
              process.exit();  
          })
        })
      }
    })
}



app.listen(port, () => {
    console.log("server is running on port " + port);
})


