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

              app.post('/API/Mail',multipartMiddleware,contact.Dr);
             

              app.post('/API/login',user.login);


       
};