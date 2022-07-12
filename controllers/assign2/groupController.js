const {GroupService} = require('../../services/assign2/groupService')
const {GroupModel} = require('../../models/GroupsModel');
const {HttpResponse} = require('../../systems/httpResponse')

const autoBind = require('auto-bind');

class GroupController{
    constructor(service){
        this.service = service;
        autoBind( this );
    }
    async getAll(req, res, next){
        try{
            const response = await this.service.getAll()
            await res.status(200 ).json( new HttpResponse(response) );
        }catch(e){
            next(e)
        }
    }

    async getId(req, res, next){
        const useId = req.params.id;
        try{
            const response = await this.service.getId(useId)
            await res.status( 200 ).json( new HttpResponse(response) );
        }catch(e){
            next(e)
        }
    }

    async insert(req, res, next){
        const data = {name: 'ww', size: 4};
        try{
            const response = await this.service.insertData(data)
            await res.status( 201 ).json( new HttpResponse(response) );
        }catch(e){
            next(e)
        }
    }
}

const groupyService = new GroupService(GroupModel);
module.exports = new GroupController(groupyService)