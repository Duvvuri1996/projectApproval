const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const InCharge = new Schema({

    inChargeId : String,

    inChargeLName : String,

    inChargeLName = {
        type : String,
        default : ''
    },

    inChargeSubjects = [],

    inchargeJoinDate = {
        type : Date,
        default : ''
    },

    inChargeProjects = [],

    noOfInchargeProjects : Number,

    inChargeDept : String

})

module.exports = mongoose.model('InCharge', InCharge)

