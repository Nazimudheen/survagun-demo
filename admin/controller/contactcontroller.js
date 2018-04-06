'use strict';

 var mongoose = require('mongoose'),
 Contact = mongoose.model('Contact');
 var fs = require('fs-extra');

var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var contactCtrl = {};

contactCtrl.apiPOST = function (req, res) {
 
let nodemailer = require('nodemailer');

let MAIL_SERVER_URL = '52.148.91.53';
let smtp = nodemailer.createTransport({
    host: MAIL_SERVER_URL,
    connectionTimeout: 60000
});

module.exports = {
    options: (mailOptions) => {
        let email = {
            from: 'zendesign007@gmail.com ',
            to: 'nasimudheen28@gmail.com',
            subject: 'yourEmailSubject'
            text: `${mailOptions.auid} requested access for modeler`
        };
        smtp.sendMail(email, (err, info) => {
            if (err) 
                console.log(err);
            else
                console.log(`Message sent: ${info.response}`);

        });
    }
}
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

















