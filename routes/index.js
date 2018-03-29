var express = require('express');
var router = express.Router();
const sgMail = require('@sendgrid/mail');

router.get('/', function(req, res, next) {
 	res.render('index');
});

router.get('/contact',function(req,res,next){
	res.render('contact');
});

router.post('/contact',function(req,res,next){
    sgMail.setApiKey("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");
    const msg = {
        to: "justblankb@gmail.com",
        from: req.body.email,
        subject: req.body.subject,
        text: req.body.body,
    };
    sgMail.send(msg);
    const msg2 = {
        to: req.body.email,
        from: "justblankb@gmail.com",
        subject: req.body.subject,
        text: req.body.body,
    };
    sgMail.send(msg2);
    res.send("<html><link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'><script>alert('Please check your email..!!')</script><a href='http://localhost:3000/'><i class='material-icons'>arrow_back</i></a></html>");
    });

module.exports = router;
