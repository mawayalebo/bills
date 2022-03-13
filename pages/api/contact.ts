export default async  function(req:any, res:any){
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});
const message = `${req.body.message} Contact Information - ${req.body.email}`
var mailOptions = {
  from: req.body.email,
  to: process.env.EMAIL,
  subject: `MESSAGE FROM BILLS HUB CLIENT- ${req.body.name}`,
  text: message
};
  await transporter.sendMail(mailOptions, function(error:any, info:any){
      if (error) {
        console.log(error);
        res.send({errCode:1, errMsg:error});
        res.status(500).end();
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).end();
      }
    });
  

}