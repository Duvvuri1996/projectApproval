const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const time = require('../lib/moment');

const Student = new Schema({

    studentId :String,

    studentFName : String,

    studentLName = {
        type : String,
        default : ''
    },

    studentPName : String,

    projectThesis : String,

    projectLead : String,

    projectInCharge : String,

    sutudentSection : String,

    Date = {
        type : Date,
        default : time.now()
    },

    files = []

})

module.exports = mongoose.model('Student', Student)