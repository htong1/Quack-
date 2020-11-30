//define a function for sending emails and exported for use in verifyemail
const nodemailer = require('nodemailer');
const sendEmail = function(email) {
  console.log("recipient" + email);
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'TimeToQuack@gmail.com',
      pass: process.env.pass
    }
  });

  const mailOptions = {
    from: 'TimeToQuack@gmail.com',
    to: email,
    subject: 'Time to get quacking!',
    html: '<h1>Quack!</h1>'
  };
 console.log("yayyy"+ email);
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
module.exports = sendEmail;