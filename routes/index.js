var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Shopping Cart' });
});

/*
added nodemailer from course video - need to change in project

router.get('/contact', function(req, res, next) {
  console.log("Form is coming....");
  var mailOpts, smtpConfig;
  smtpConfig = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    tls: { rejectUnauthorized: false },
    auth: {
      user: 'rpirritano@gmail.com',
      pass: 'Green1212'
    }
  });

  mailOpts = {
    from: 'rpirritano@gmail.com',
    to: 'rpirritano@gmail.com',
    subject: 'Sending Email using node.js',
    text: 'That was easy!'
  };

  smtpConfig.sendMail(mailOpts, function(error, respsonse) {
    if(error) {
      console.log(error);
      res.end("Email send failure");
      *** ALL I COULD SEE FROM VIDEO
    }
  })
})







*/




module.exports = router;
