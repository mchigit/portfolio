const express = require('express');
const MailClass = require('../bin/email');
const router = express.Router();
const bodyParser = require('body-parser');

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/skills', function(req, res, next) {
  res.render('skills');
});

router.get('/projects', function(req, res, next) {
  
});

router.get('/work', function(req, res, next) {
  res.render('work');
});

router.post('/send_email', (req, res, next) => {
  MailClass.sendMail(req, res, (error, data) => {
    if (error) {
      res.status(500).json({
        error: error
      });
    } else {
      res.status(200).json({
        error: null
      });
    }
  });
});

module.exports = router;
