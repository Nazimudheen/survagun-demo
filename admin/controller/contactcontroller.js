'use strict';

 var mongoose = require('mongoose'),
 Contact = mongoose.model('Contact');
 var fs = require('fs-extra');



var contactCtrl = {};

contactCtrl.apiPOST = function (req, res) {
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nasimudheen28@gmail.comm',
        pass: 'p@$$word28'
    }
});


transporter.sendMail({
  from: 'nasimudheen28@gmail.com',
  to: 'nasimudheen97@gmail.com',
  subject: 'test',
  text: 'test tecxt'
}, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
    }
});


};






contactCtrl.list_all_ = function(req, res) {
  Contact.find({}, function(err, faq) {

    if (err)
      res.send(err);
    console.log(faq);
    res.status(200).send(faq);

  }); 
};









contactCtrl.faqDelete = function(req, res) {

   var del_Id = req.body.delete_id;


 Contact.remove({
    _id: del_Id
  }, function(err, bookmark) {
    if (err)
      return res.send(err);
    res.json({ message: 'Contact successfully deleted' });
  });





  
};





contactCtrl.faq_edit = function(req, res) {
  var faqId =  req.body.Index || ''
  Contact.findOneAndUpdate({_id: faqId}, req.body, {new: true}, function(err, faq) {

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












module.exports = contactCtrl;

















