
const express = require('express')
const router = express.Router();
const {addNewUser,getUserDetails,applyToJob}=require("../controllers/userController")

router
.route('/')
.post(addNewUser)

router
.route('/userdetails')
.post(getUserDetails)

router
.route('/apply')
.post(applyToJob)


module.exports = router