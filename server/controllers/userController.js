const {User,validate} = require('../models/user')
const {Job}=require("../models/job")
const _=require('lodash')
const bcrypt =require('bcrypt')
const jwt=require("jsonwebtoken")


exports.addNewUser=async (req,res)=>{
    const {error} = validate(req.body)
  if(error) return res.status(400).send(error.details[0].message)
  
  let user = await User.findOne({phoneNumber:req.body.phoneNumber})
  if(user) return res.status(400).send('User already exsist ')

   
     user= new User( _.pick(req.body,['phoneNumber','password']))
     const salt = await bcrypt.genSalt(10)
     user.password = await bcrypt.hash(user.password,salt)

    try{

        user = await user.save()    
    }
    catch(err){
        res.status(500).send('somethong went wrong')
    }    
    
    res
    .header('x-auth-token',user.generateJWT())
    .header('access-control-expose-headers','x-auth-token')
    .send(_.pick(user,['phoneNumber']));
}
//get user details
exports.getUserDetails=async (req,res)=>{
    let user = await User.findOne({phoneNumber:req.body.phoneNumber})
    if(!user){
        res.status(400).send("user does not exist!")
    }
    else{
    try {
    res.send(user.phoneNumber);
    } catch (error) {
    res(error.message)
    
    }
    }}

exports.applyToJob=async(req,res)=>{
    const user = await User.findOne({phoneNumber:req.body.phoneNumber})
    const job=await Job.findOne({name:req.body.name})
    console.log(job)
    console.log(user)
    if(!user){
        return res.status(404).send('User not found');
    }
    if(!job){
        return res.status(404).send('Job not found');
    }
    else{
        try {
            job.candidates.push(user)
            res.status(200).send("Applied succesfully!")
            await job.save();
            
        } catch (error) {
            res.status(500).send(error)

        }
    }

}
