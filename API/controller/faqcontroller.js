'use strict';

 var mongoose = require('mongoose'),
 Faq = mongoose.model('Faqs');
 var fs = require('fs-extra');
 const BASE_DIR = 'admin/web-angular/Local_FS/faq';




var faqCtrl = {};

faqCtrl.apiPOST = function (req, res) {
  var newn = new Faq(req.body);
  console.log(req.body);
  newn.save(function (err, result) {
    if(err){
    res.status = 500;
    res.json({err : err})
    } else{
      console.log(newn);
      res.json({msg:'OK'});
    }
  });
 }




faqCtrl.list_all_ = function(req, res) {
  Faq.find({}, function(err, faq) {

    if (err)
      res.send(err);
    console.log(faq);
    res.status(200).send(faq);

  }); 
};









faqCtrl.faqDelete = function(req, res) {

   var del_Id = req.body.delete_id;


 Faq.remove({
    _id: del_Id
  }, function(err, bookmark) {
    if (err)
      return res.send(err);
    res.json({ message: 'Bookmark successfully deleted' });
  });





  
};





faqCtrl.faq_edit = function(req, res) {
  var faqId =  req.body.Index || ''
  Faq.findOneAndUpdate({_id: faqId}, req.body, {new: true}, function(err, faq) {

if (req.files) {
if(err){
    res.status = 500;
    res.json({err : err})
    } else{
    res.json({msg : " updated successfull"})

    }
}

    

  });
};












module.exports = faqCtrl;

















