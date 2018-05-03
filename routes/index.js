const express = require('express');
const MailClass = require('../bin/email');
const router = express.Router();
const bodyParser = require('body-parser');

router.get('/', function(req, res, next) {
  res.render('index', {headerTitle: "Michael Chi"});
});

router.get('/skills', function(req, res, next) {
  res.render('skills', {headerTitle: "Home"});
});

router.get('/projects', function(req, res, next) {
  res.render('projects', {headerTitle: "Home"});
});

router.get('/work', function(req, res, next) {
  res.render('work', {headerTitle: "Home"});
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
