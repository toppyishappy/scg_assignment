const {Service} = require('../../systems/service.js')
const {GroupService} = require('./groupService')
const { HttpError } = require('../../systems/httpError');
const { HttpResponse } = require( '../../systems/httpResponse' );

const ObjectId = require('mongoose').Types.ObjectId; 
const autoBind = require( 'auto-bind' );
//ES6

class FamilyService extends Service{
    constructor(model, groupModel){
        super(model);
        this.model = model;
        this.groupService = new GroupService(groupModel);
        autoBind(this)

    }
    async insetData(data){
        const groupId = data.groupId
        try{
            const group = await this.groupService.getId(groupId)
            data = {groupId: groupId, ...data}
            return await this.model.create(data)
        }catch(e){
            throw new HttpError(e)
        }
    }

    async getFamByGroupId(id){
        try{
            const group = await this.groupService.getId(id)
            const groupId = new ObjectId(group._id).toString()
            const familyMember = await this.model.find({group_id: groupId}).lean()
            const result = familyMember.map(i => {
                return{groupName: group.name, ...i}
            })
            return result
        }catch(e){
            throw new HttpError(e)
        }
    }


}

module.exports = { FamilyService };
