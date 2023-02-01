const mongoose = require('mongoose')
const Joi = require('joi');
const User=require("./user")


const Job = new mongoose.model('Job', new mongoose.Schema({
  
    name:{
        type: String,
        required : true,
        minlength: 3 ,
        maxlength: 50
    },
   
    description:{
        type: String,
        required : true,
        maxlength: 500, 
        minlength: 3
    },
    sallary:{
        type:String,
        required:true


    },
    candidates: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}],

}) ) ;

function vaidateJob(job){
    const schema = {
        
        name: Joi.string().min(3).max(50).required(),
        description: Joi.string().min(3).max(500).required(),
        sallary: Joi.string().required()
    };

    return Joi.validate(job,schema)}


module.exports.validate= vaidateJob
module.exports.Job= Job