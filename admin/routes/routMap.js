'use strict';
var news = require('../controller/newscontroller');
var store = require('../controller/storecontroler');
var faq = require('../controller/faqcontroller');
var article = require('../controller/articlecontroller');
var user = require('../controller/userscontroller');
var contact = require('../controller/contactcontroller');
var mailS = require('../controller/mail');

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();


module.exports = function(app) {

              app.get('/API/newsget',news.list_all_);
              app.post('/API/news', multipartMiddleware,news.apiPOST);
              app.delete('/API/newsDelete', multipartMiddleware,news.newsDelete);
              app.put('/API/newsedit',multipartMiddleware,news.news_edit);

              app.post('/API/store', multipartMiddleware,store.apiPOST);
              app.get('/API/storeget',store.list_all_); 
              app.delete('/API/storeDelete', multipartMiddleware,store.storeDelete);
              app.put('/API/storeedit',multipartMiddleware,store.store_edit);

              app.post('/API/faq', multipartMiddleware,faq.apiPOST);
              app.get('/API/faqget',faq.list_all_); 
              app.delete('/API/faqDelete', multipartMiddleware,faq.faqDelete);
              app.put('/API/faqedit',multipartMiddleware,faq.faq_edit);


              app.get('/API/articleget',article.list_all_);
              app.post('/API/article', multipartMiddleware,article.apiPOST);
              app.delete('/API/articleDelete', multipartMiddleware,article.articleDelete);
              app.put('/API/articleedit',multipartMiddleware,article.article_edit);

              app.post('/API/contact',multipartMiddleware,contact.apiPOST);

              app.post('/API/mail',multipartMiddleware,contact.Dr);
             app.post('/API/mail', function(req, res) {

              var email = req.body.email;

var phone = req.body.phone;


  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'noreplaysurvagun@gmail.com',
    pass: 'survagun123'
  }
});

var mailOptions = {
  from: 'noreplaysurvagun@gmail.com',
  to: 'info@stayhappi.in',
  cc: 'anil.sharma@stayhappi.in',
  bcc:'nasimudheen97@gmail.com',
  subject: 'SarvaGunAushdhi Website Contact Inforamtion ',
  html: '<html><body style="background-color: #f5f5f5;color: #7b6868;font-size: 15px;margin: 19px;padding: 60px"><p style=" color:#7b6868;">You Have a New Enquiry,</p> From <br><br>  <br></br> Email :'+email+'<br/><br/> Phone : '+phone+'</br></br></br></body></html>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
          res.json({msg : "successfull"})

  }
});
    
                  });

              app.post('/API/login',user.login);


       
};