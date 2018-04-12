'use strict';

 var mongoose = require('mongoose'),
 Contact = mongoose.model('Contact');
 var fs = require('fs-extra');
var nodemailer = require('nodemailer');



var contactCtrl = {};

contactCtrl.apiPOST = function (req, res) {

var name = req.body.name;

var email = req.body.email;

var phone = req.body.phone;
var message = req.body.message;


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
  html: '<html><body style="background-color: #f5f5f5;color: #7b6868;font-size: 15px;margin: 19px;padding: 60px"><p style=" color:#7b6868;">You Have a New Enquiry,</p>,<br> <br> Email :'+email+'<br><br> Phone : '+phone+'</br></br><</body></html>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
          res.json({msg : "successfull"})

  }
});


};












contactCtrl.apiPOST2 = function (req, res) {

var name = req.body.name;

var email = req.body.email;

var phone = req.body.phone;
var message = req.body.message;


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
  subject: 'SarvaGunAushdhi Website Partner With Us Inforamtion ',
  html: '<html><body style="background-color: #f5f5f5;color: #7b6868;font-size: 15px;margin: 19px;padding: 60px"><p style=" color:#7b6868;">You Have a New  Enquiry,</p> <br> <br></b> Email :'+email+'<br/><br/> Phone : '+phone+'</br><br></body></html>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
          res.json({msg : "successfull"})

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

















