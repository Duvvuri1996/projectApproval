const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const time = require('../lib/moment');

const HOD = new Schema({

    hodId : String,

    hodFName : String,

    hodLName = {
        type : String,
        default : ''
    },

    hodJoinDate : {
        type : Date,
        default : ''
    },

    hodDepartmentName : String,

    hodSubjects = []

})