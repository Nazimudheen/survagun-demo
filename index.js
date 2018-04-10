  var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  News = require('./admin/model/newsmodel'),
  Store = require('./admin/model/storemodel'),
  Faq = require('./admin/model/faqmodel'),
  User = require('./admin/model/usermodel'),

  Article = require('./admin/model/articlemodel'),

  bodyParser = require('body-parser');


   mongoose.Promise = global.Promise;

var cors = require('cors');
app.use(cors());
app.use(bodyParser.json({ type: 'application/json' }));

const MongoClient = require('mongodb').MongoClient; 
const url = 'mongodb://localhost:27017';
const dbName = 'admin';


app.use("/",express.static("Client/web-angular"));

app.use("/admin",express.static("admin/web-angular"));





MongoClient.connect(url, function(err, client) {
  if(err){
    console.log(err);
  }
  console.log("Connected successfully to mongo");
  const db = client.db(dbName); 

  app.get("/admin/*", function (req,res) {
    res.sendFile("admin/web-angular/index.html" , {root : __dirname});
  })

  app.get("/admin", function (req,res) {
    res.sendFile("admin/web-angular/index.html" , {root : __dirname});
  })

  app.get("*", function (req,res) {
    res.sendFile("Client/web-angular/index.html" , {root : __dirname});
  })

 
  app.listen(port, function () {
    console.log("server is running on port " + port);
  })
});
