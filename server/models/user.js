const mongoose = require('mongoose')
const Joi = require('joi')
const jwt= require('jsonwebtoken')

const userschema= new mongoose.Schema({
    phoneNumber:{
        type: String,
        required: true,
        maxlength: 10, 
        minlength: 10,
    },
    password:{
        type: String,
        required: true,
        maxlength: 1024, 
        minlength: 5,
        
    }
}) ;

userschema.methods.generateJWT =function(){
    const token = jwt.sign({ _id : this._id},'thatsTheWordIuseToEncrypt')
    return token;
}
const User=  new mongoose.model('User',userschema)


function validateUser(user){
    const schema = {
        phoneNumber: Joi.string().min(10).max(10).required(),
        password: Joi.string().min(5).max(255).required()
    };

    return Joi.validate(user,schema)
}


module.exports.validate= validateUser
module.exports.User= User
