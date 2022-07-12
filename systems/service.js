const mongoose = require( 'mongoose' );
const { HttpResponse } = require( './httpResponse' );
const autoBind = require( 'auto-bind' );
const { HttpError } = require('./httpError');

class Service {
    constructor( model ) {
        this.model = model;
        // autoBind(this)
    }
    async getAll(){
        try{
            const res = await this.model.find()
            return res
        }catch(e){
            throw new HttpError(e)
        }
    }

    async getId(id){
        try{
            const res = await this.model.findById(id).lean()
            return res
        }catch(e){
            throw new HttpError(e)
        }
    }

    async insertData(data){
        try{
            const res = await this.model.create(data)
            return (res)
        }catch(e){
            throw new HttpError(e)
        }
    }
}

module.exports = { Service };