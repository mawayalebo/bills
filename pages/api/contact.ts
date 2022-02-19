export default function (req:any, res:any) {
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.email,
    pass: process.env.password
  }
});

var mailOptions = {
  from: req.body.email,
  to: process.env.email,
  subject: 'BILLS HUB CLIENT SENT AN EMAIL',
  text: req.body.message
};

transporter.sendMail(mailOptions, function(error:any, info:any){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}