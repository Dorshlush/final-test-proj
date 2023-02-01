
const express = require('express')
const router = express.Router();
const {getAllJobs,addNewJob,deleteJob}=require("../controllers/jobController")

router
.route('/')
.post(addNewJob)

router
.route('/getAllJobs')
.get(getAllJobs)

router
.route('/deleteJob')
.delete(deleteJob)


module.exports = router