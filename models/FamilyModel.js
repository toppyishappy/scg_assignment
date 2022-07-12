const mongoose = require('mongoose')

const schema = new mongoose.Schema({ 
    name: 'string', 
    groupId: 'string',
    avatarPath: 'string',
    firstname: 'string',
    lastname: 'string',
    birthDate: 'Date',
    phone: 'string',
    email: 'string'
})

const FamilyModel = mongoose.model('Family', schema);

module.exports = {FamilyModel}

