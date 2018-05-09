var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: 'mohitsavaliya33@gmail.com',
        pass: ''
    }
});

const mailOptions = {
  from: 'mohitsavaliya33@gmail.com', // sender address
  to: '@gmail.com', // list of receivers
  subject: 'Subject of your email', // Subject line
  html: '<p>Your html here</p>',// plain text body
  attachments: 
        {   // filename and content type is derived from path
            path: '/home/admin/Desktop/SFTBR-04.PDF'
        } 
    
};

let i = 0;
for(i=0;i<25;i++){
transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
});
}