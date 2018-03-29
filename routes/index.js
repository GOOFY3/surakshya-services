var express = require('express');
var router = express.Router();
const sgMail = require('@sendgrid/mail');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/contact', (req,res) => {
  res.render('contact');
})

router.post('/contact', (req, res) => {
  sgMail.setApiKey("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");
  const msg = {
    to: 'ankitjena13@gmail.com',
    from: 'test@example.com',
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<p>'+ req.body.subject +'</p><br><p>By'+ req.body.name + '</p><br><p>'+ req.body.email + '</p>',
  };
  sgMail.send(msg);
  res.json(msg);
})

module.exports = router;
