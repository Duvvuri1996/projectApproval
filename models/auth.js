const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const time = require('../lib/moment');

const auth = new Schema({
    authToken : String,
    userId : String,
    tokenGenerationTime = {
        type : Date,
        default : time.now(),
    },
    tokenSecret : String
})

module.exports = 
    mongoose.model('Auth', auth)
