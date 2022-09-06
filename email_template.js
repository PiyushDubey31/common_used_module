var CONFIG = require('../../config/index');
// var refUrl = "http://localhost:4200/inventory-allotment/update";
var refUrl = `${CONFIG.WebEndPoint}/inventory-allotment/update`
exports.template = (data) => new Promise((resolve, reject) => {
  if (data) {
    console.log("data in template ==> ", data);
    let email = {
      subject: "Inventory Allotment Request",
      body: `<!doctype html>
          <html>
          <head>
          <meta charset="utf-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">
          </head>
          <body style="margin:0px; padding:0px;background: #fff;">
          <table cellpadding="0" style="margin:20px auto;padding:0;border: none;border-collapse: collapse; font-family: arial; width:600px;">
            <tr>
              <td>
                <table cellpadding="0" style="border: none;border-collapse: collapse;font-family: arial; width: 100%;">
                  <tr>
                    <td align="center"><a href="${CONFIG.WebEndPoint}"><img src="${CONFIG.SiteLogo}"  width='300' height='100' style='margin: 0 auto' alt="" /></a></td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table cellpadding="20" style="background: #fff; border: none;font-family: arial; width: 100%; text-align: left;">
                  <tr>
                    <td height="2">&nbsp;</td>
                  </tr>
                  <tr>
                    <td><h3 style="color:#D7643A;padding:0;margin:0;font-family: arial; width: 100%;font-weight: 400">Hi ${data.userName} </h3>
                    </td>
                  </tr>
                  
                      <tr>
                        <td> <p style="padding:0;margin:0;font-family: arial; width: 100%;font-size: 16px; line-height: 1.7;"">Please Provide the Inventory to this employee</p>  </td>
                        <td> <p style="padding:0;margin:0;font-family: arial; width: 100%;font-size: 16px; line-height: 1.7;""></p> Employee Email: ${data.employee_email}  </td>
                        <td> <p style="padding:0;margin:0;font-family: arial; width: 100%;font-size: 16px; line-height: 1.7;""></p> Employee Location: ${data.employee_location}  </td>
                        <td> <p style="padding:0;margin:0;font-family: arial; width: 100%;font-size: 16px; line-height: 1.7;""></p> Required System Type: ${data.required_system_type}  </td>
                        


                        <tr>
                        <td>            <p style="padding:0;margin:0;font-family: arial; width: 100%;font-size: 16px; line-height: 1.7; "> Please click on the below button to Assign Inventory</p>
                          <p><a href="${refUrl}/${data.notification_id}/${data.employee_id}/${data.device_type_id}" target="_blank" style="padding:0;margin:0;font-family: arial; width: 100%;font-size: 16px; background-color:#D7643A;border:1px solid #D7643A;border-radius:3px;color:#ffffff;display:inline-block;line-height:44px;text-align:center;text-decoration:none;width:200px;-webkit-text-size-adjust:none;mso-hide:all;"">Assign Inventory</a></p>
                          
                        </td></tr>



                      </tr>
                    <td>
                      <table cellpadding="0" style="background: #fff; border: none;font-family: arial; width: 100%; text-align: left;border-top:1px solid #ccc;height: 1px">&nbsp;</table>
                    </td>
                  </tr>
                      <td>
                        <h6 style="padding:0;margin:0;font-family: arial; width: 100%;font-size: 16px; line-height: 1.7;font-weight: 400">Thanks & Regards</h6>
                        <h6 style="padding:0;margin:0;font-family: arial; width: 100%;font-size: 16px; "> ${data.company_email} </h6>
                      </td>
                    </tr>
                    <tr>
                      <td height="10" style="border-style: none;border:none;">&nbsp;</td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <table align="center" style="background: #ebebed; width: 100%;border:none; text-align: center;">
                    <tr><td height="10">&nbsp;</td></tr>
                    <tr>
                      <td>
                        <tr>
                          <td><p style="padding:0;margin:0;font-family: arial; width: 100%;font-size: 12px; line-height: 1.2;">Copyright © Zerotouch Logistics Partners  2022. All Rights Reserved. </p></td>
                        </tr>
                      </td>
                    </tr>
                    <tr><td height="10">&nbsp;</td></tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
          </html>`
    }
    return resolve(email);
  } else {
    return reject(false);
  }
});
