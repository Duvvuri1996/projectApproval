const mongoose = require('mongoose');
const Schema = mongoose.Schema();
const time = require('../lib/moment');

const Lead = new Schema({

    leadId : String,

    leadFName : String,

    leadLName = {
        type : String,
        defualt : ''
    },

    leadDepartment : String,

    leadSubjects = [],

    leadJoinDate = {
        type : Date,
        defualt : ''
    },

    noOfProjects : Number,

    projects = []

})

module.exports = mongoose.model('Lead', Lead)