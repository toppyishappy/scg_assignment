const mongoose = require('mongoose')

const schema = new mongoose.Schema({ name: 'string', size: 'string'})

const GroupModel = mongoose.model('Groups', schema);

module.exports = {GroupModel}

