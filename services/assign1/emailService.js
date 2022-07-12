const autoBind = require( 'auto-bind' );
const {HttpError} = require('../../systems/httpError')
//ES6
const sgMail = require('@sendgrid/mail');
    config = require( '../../configs/config' ).getConfig();


sgMail.setApiKey(config.SENDGRID_API_KEY);

class EmailService{
    constructor(){
    }

    async sendEmail(data){
        const {from, to, message, templateId} = data;
        const msg = {
            to: to,
            from: from, // Use the email address or domain you verified above
            subject: 'test send email',
            text: message,
            html: '',
        };
        try {
            return await sgMail.send(msg);
          } catch (e) {
            e.message = 'Email service error'
            e.statusCode = 400
            throw new HttpError(e)
          }
    }
}

module.exports = { EmailService };
