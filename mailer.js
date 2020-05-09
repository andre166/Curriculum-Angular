var express = require('express');
var cors = require('cors');
const bodyParser = require("body-parser");
var app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/sendmail', function (req, res) {
  let contato = req.body;
  main(contato).catch(console.error);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main(contato) {

  console.log("contato no sendMail ====> ", contato)

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.mail.yahoo.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "andre_portfolio76@yahoo.com", // generated ethereal user
      pass: "lgxlhlgiekscluds" // generated ethereal password
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "andre_portfolio76@yahoo.com", // sender address
    to: 'andremp1927@hotmail.com', // list of receivers
    subject: `${contato.assunto}`,
    html: `<p>Nome: ${contato.nome} </p> <p>Assunto: ${contato.assunto} </p> <p>Email: ${contato.email} </p> <p>Texto: ${contato.texto}</p>`   ,
    onError: (e) => console.log(e),
    onSuccess: (i) => console.log(i)
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

}
