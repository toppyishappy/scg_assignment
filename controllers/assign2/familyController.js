const {FamilyModel} = require('../../models/FamilyModel')
const {GroupModel} = require('../../models/GroupsModel')
const {FamilyService} = require('../../services/assign2/familyService')

const autoBind = require('auto-bind');
const { HttpResponse } = require('../../systems/httpResponse');

class FamilyControlelr{
    constructor(service){
        this.service = service;
        autoBind( this );
    }

    async insert(req, res, next){
        try{
            const response = await this.service.insetData(req.body)
            await res.status( 201 ).json( new HttpResponse(response) );
        }catch(e){
            next(e)
        }
    }

    async getAll(req, res, next){
        try{
            const response = await this.service.getAll()

            await res.status( response.statusCode ).json( new HttpResponse(response) );
        }catch(e){
            next(e)
        }
    }
    
    async getFamByGroupId(req, res, next){
        const id = req.params.id;
        try{
            const response = await this.service.getFamByGroupId(id)
            res.status( 200 ).json( new HttpResponse(response) );
        }catch(e){
            next(e)
        }
    }

    // async insert(req, res, next){
    //     const response = await this.service.insetData('62caa3359770abd1973e2123')
    //     await res.status( 201 ).json( new HttpResponse(response));
    // }
}


const familyService = new FamilyService(FamilyModel, GroupModel);
module.exports = new FamilyControlelr(familyService)