'use strict';

 var mongoose = require('mongoose'),
 Store = mongoose.model('Stores');
 var fs = require('fs-extra');
 const BASE_DIR = 'admin/web-angular/Local_FS/store';




var storeCtrl = {};

storeCtrl.apiPOST = function (req, res) {
  var newn = new Store(req.body);
  console.log(req.body);
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



storeCtrl.list_all_ = function(req, res) {
  Store.find({}, function(err, store) {

    if (err)
      res.send(err);
    console.log(store);
    res.status(200).send(store);

  }); 
};




storeCtrl.list_Map_one = function(req, res) {
 

var limit = 1;

 Store.find({})
            .limit(limit)
            .exec(function(err,wins){

    res.status(200).send(wins);


 });

};




storeCtrl.storeDelete = function(req, res) {

   var del_Id = req.body.delete_id;


 Store.remove({
    _id: del_Id
  }, function(err, bookmark) {
    if (err)
      return res.send(err);
    res.json({ message: 'Bookmark successfully deleted' });
  });





  
};





storeCtrl.store_edit = function(req, res) {
  var bookmarkId =  req.body.Index || ''
  Store.findOneAndUpdate({_id: bookmarkId}, req.body, {new: true}, function(err, store) {

console.log(req.files);
if (req.files) {
if(err){
    res.status = 500;
    res.json({err : err})
    } else{
      fs.copy(req.files.file.path, BASE_DIR+"/"+req.files.file.originalFilename , function (err) {
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












module.exports = storeCtrl;

















