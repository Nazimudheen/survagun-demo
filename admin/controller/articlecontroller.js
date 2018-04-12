'use strict';

 var mongoose = require('mongoose'),
 Article = mongoose.model('Article');
 var fs = require('fs-extra');
 const BASE_DIR = 'admin/web-angular/Local_FS/article';




var articleCtrl = {};

articleCtrl.apiPOST = function (req, res) {
  var newn = new Article(req.body);
  newn.save(function (err, result) {
    if(err){
    res.status = 500;
    res.json({err : err})
    } else{
      fs.copy(req.files.file.path, BASE_DIR+"/"+req.files.file.originalFilename , function (err) {
        if(err){
          res.status = 500;
          res.json({err : err})
        } else{
          res.json({msg : "OK"})
        }
      })
    }
  });


};




articleCtrl.list_all_ = function(req, res) {
  Article.find({}, function(err, article) {

    if (err)
      res.send(err);
    res.status(200).send(article);
  }); 
};









articleCtrl.articleDelete = function(req, res) {

   var del_Id = req.body.delete_id;


 Article.remove({
    _id: del_Id
  }, function(err, bookmark) {
    if (err)
      return res.send(err);
    res.json({ message: 'Article successfully deleted' });
  });





  
};





articleCtrl.article_edit = function(req, res) {
  var bookmarkId =  req.body.Index || ''
  Article.findOneAndUpdate({_id: bookmarkId}, req.body, {new: true}, function(err, article) {

if(err){
    res.status = 500;
    res.json({err : err})
    } else{
      fs.copy(req.files.file.path, BASE_DIR+"/"+req.files.file.originalFilename , function (err) {
        if(err){
          res.status = 500;
          res.json({err : err})
        } else{
          res.json({msg : "OK"})
        }
      })
    }
  });
};












module.exports = articleCtrl;

















