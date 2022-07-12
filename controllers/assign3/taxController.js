const { HttpResponse } = require('../../systems/httpResponse')
const {TaxService} = require('../../services/assign3/taxService')

const autoBind = require('auto-bind');

class TaxController{
    constructor(service){
        this.service = service
        autoBind( this );
    }

    async calTax(req, res, next){
        const income = req.body.income
        try{
            const response = await this.service.calTax(income)
            res.status(200).json(new HttpResponse(response))
        }catch(e){
            next(e)
        }
    }


}

const taxService = new TaxService();
module.exports = new TaxController(taxService)