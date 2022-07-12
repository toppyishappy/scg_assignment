const {Service} = require('../../systems/service.js')
// const autoBind = require( 'auto-bind' );
//ES6

class GroupService extends Service{
    constructor(model){
        super(model);
        this.model = model;
        // autoBind(this)
    }

}

module.exports = { GroupService };
