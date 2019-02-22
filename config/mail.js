const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const { verifyJWT } = require('../services/jwt.service')
class Mailer {
  static sendEmail(token) {
    let email = verifyJWT(token, process.env.SECRET)
    let transporter = nodemailer.createTransport(
      smtpTransport({
        service: "gmail",
        auth: {
          user: "tosterrr9@gmail.com",
          pass: "11223344d"
        },
        tls: {
          rejectUnauthorized: false
        }
      })
    );

    let mailOptions = {
      from: 'tosterrr9@gmail.com',
      to: email,
      subject: '123',
      text: `Verify your password here http://localhost:3000/${token}`
    }

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent", info.messsageId);

      console.log("Preivew message", nodemailer.getTestMessageUrl(info));
    });
  }
}

module.exports = Mailer;

// let mailOptions = {
//     from: 'tosterrr9@gmail.com',
//     to: 'ddemarkk@gmail.com',
//     subject: 'hey',
//     text: 'wssup',

// }
