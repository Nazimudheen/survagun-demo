'use strict';
var news = require('../controller/newscontroller');
var store = require('../controller/storecontroler');
var faq = require('../controller/faqcontroller');
var article = require('../controller/articlecontroller');
var user = require('../controller/userscontroller');

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();


module.exports = function(app) {


              app.get('/newsget',news.list_all_);
              app.post('/news', multipartMiddleware,news.apiPOST);
              app.delete('/newsDelete', multipartMiddleware,news.newsDelete);
              app.put('/newsedit',multipartMiddleware,news.news_edit);

              app.post('/store', multipartMiddleware,store.apiPOST);
              app.get('/storeget',store.list_all_); 
              app.delete('/storeDelete', multipartMiddleware,store.storeDelete);
              app.put('/storeedit',multipartMiddleware,store.store_edit);

              app.post('/faq', multipartMiddleware,faq.apiPOST);
              app.get('/faqget',faq.list_all_); 
              app.delete('/faqDelete', multipartMiddleware,faq.faqDelete);
              app.put('/faqedit',multipartMiddleware,faq.faq_edit);



              app.get('/articleget',article.list_all_);
              app.post('/article', multipartMiddleware,article.apiPOST);
              app.delete('/articleDelete', multipartMiddleware,article.articleDelete);
              app.put('/articleedit',multipartMiddleware,article.article_edit);

              app.post('/login',function(req, res){
                      res.json({
                            print: "sucsess",
                            value : "abxc"
                     })
              });

              // app.post('/apilogin',multipartMiddleware,user.apiPOST);

       
};