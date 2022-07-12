const {EmailService} = require('../../services/assign1/emailService')

const autoBind = require( 'auto-bind' );


class Assign1Controller{

    constructor(service){
        this.service = service;
        autoBind( this );
    }
    async sendEmail(req, res, next){
        const data = req.body
        try{
            const response = await this.service.sendEmail(data)
            res.status( 200 ).json( response );
        }catch(e){
            next(e)
        }
    }
}

const emailService = new EmailService();

module.exports = new Assign1Controller(emailService);