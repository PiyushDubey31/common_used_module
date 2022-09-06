  // let parameters = {

        //   userName: receiver.email,

        //   company_email: companyDetails.email,

        //   total_quantity:total_quantity

        // };

        // let emailData = await inventoryDispatchedTemplate.template(parameters)

        // const mailSent = await mailer.sendMail("", "piyushnit77@gmail.com",emailData.subject,emailData.body);







exports.sendMail = (fromEmail = '',  to,  subject,  message,  filename = '') =>
  new Promise((resolve, reject) => {
    fromEmail = fromEmail == '' ? CONFIG.SMTP.SUPPORT_EMAIL : fromEmail;
    var toEmail = to;
    var transporter = nodemailer.createTransport({
      service: CONFIG.SMTP.SERVICE,
      auth: {
        // type: "login",  //default
        // user: "youremail@gmail.com",
        // pass: "PASSWORD_HERE"
        user: CONFIG.SMTP.USER,
        pass: CONFIG.SMTP.PASS,
      },
    });
    transporter.sendMail(
      {
        from: fromEmail,
        to: toEmail,
        subject: subject,
        html: message,
        attachments: filename,
      },
      function (error, response) {
        if (error) {
          console.log('err', error);
          return reject(error)
        } else {
          console.log('MAIL SENT....!');
          console.log('Success', response);
          return resolve(response)
        }
      }
    );
  })
