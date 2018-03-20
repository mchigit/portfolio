'use strict';
const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');
var smtpTransport = require('nodemailer-smtp-transport');

var MailClass = module.exports = {
    sendMail: sendMail
};

function sendMail(req, res, callback){
    console.log(req.body);
      // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport(smtpTransport({
        service: 'Gmail',
        auth: {
            xoauth2: xoauth2.createXOAuth2Generator({
                user: 'michael.chi.website@gmail.com',
                clientId: "81097087912-rqv3sjd4v7f898ukpbmktmvgbqshr1jr.apps.googleusercontent.com",
                clientSecret: "xGeJYwGZDD3SXlFs3IvQAWCL",
                refreshToken: "1/snvMVVDZmPEqKfZ4zkrr2nnYeihx_W51Stci107dS80"                
            }) 
        }
    }));

    const output = `From: ${req.body.email} \n ${req.body.message}`;

    // setup email data with unicode symbols
    let mailOptions = {
        from: 'michael.chi.website@gmail.com', // sender address
        to: 'michael.chi.website@gmail.com', // list of receivers
        subject: `You have a new mail from ${req.body.first_name} ${req.body.last_name}`, // Subject line
        text: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
           callback(error)
        } else {
           callback(null);
        }
       
        // Preview only available when sending through an Ethereal accoun
        transporter.close();
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
}
