'use strict';

 var mongoose = require('mongoose'),
 News = mongoose.model('News');
 var fs = require('fs-extra');
 const BASE_DIR = 'admin/web-angular/Local_FS/news';




var newsCtrl = {};

newsCtrl.apiPOST = function (req, res) {
  var newn = new News(req.body);
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



newsCtrl.list_all_ = function(req, res) {
  News.find({}, function(err, news) {

    if (err)
      res.send(err);
    res.status(200).send(news);
  }); 
};









newsCtrl.newsDelete = function(req, res) {

   var del_Id = req.body.delete_id;


 News.remove({
    _id: del_Id
  }, function(err, bookmark) {
    if (err)
      return res.send(err);
    res.json({ message: 'Bookmark successfully deleted' });
  });





  
};





newsCtrl.news_edit = function(req, res) {
  var bookmarkId =  req.body.Index || ''
  News.findOneAndUpdate({_id: bookmarkId}, req.body, {new: true}, function(err, news) {

console.log(req.files);
if (req.files) {
if(err){
    res.status = 500;
    res.json({err : err})
    } else{
      fs.copy(req.files.file.path, BASE_DIR+"/"+req.files.file.originalFilename , function (err,news) {
        if(err){
          res.status = 500;
          res.json({err : err})
        } else{
          res.json({msg : " updated successfull"})
        }
      })
    }
}

    

  });
};












module.exports = newsCtrl;

















