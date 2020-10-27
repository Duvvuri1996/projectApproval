const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const time = require('../lib/moment');

const Admin = new Schema({

    adminId :String,

    adminFName : String,

    adminLName = {
        type : String,
        default : ''
    },

    adminJoinDate : String,

})

module.exports = mongoose.model('Admin', Admin)