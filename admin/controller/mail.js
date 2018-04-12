'use strict';

 var mongoose = require('mongoose');
 var fs = require('fs-extra');
var nodemailer = require('nodemailer');



var mailCtrl = {};

mailCtrl.apiPOST = function (req, res) {


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
  subject: 'SarvaGunAushdhi Website mail Inforamtion ',
  html: '<html><body style="background-color: #f5f5f5;color: #7b6868;font-size: 15px;margin: 19px;padding: 60px"><p style=" color:#7b6868;">You Have a New Enquiry,</p><br/><br/></b> Email :'+email+'<br/><br/> Phone : '+phone+'</br></br></br><br/></body></html>'
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





module.exports = mailCtrl;

















