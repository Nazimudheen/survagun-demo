  var express = require('express'),
  app = express(),
  port = process.env.PORT || 7000,
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

app.use(cors());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/admin');

app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({extended: true}));

routes(app);










app.listen(port, () => {
    console.log("server is running on port " + port);
})


