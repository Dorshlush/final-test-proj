const {validate,Job}=require("../models/job")


//get all the jobs
exports.getAllJobs=async(req,res)=>{
    
    const jobs = await Job.find().sort();
    if(!jobs)
        res.status(400).send('There are no available Jobs ')
    try {
        res.send(jobs);
    } catch (error) {
        res.status(400).send(error)
        
    }
    }
//adding new Job
exports.addNewJob= async(req,res)=>{
    
    const results = validate(req.body)
    if(results.error){
        res.status(400).send(results.error.details[0].message)
        return
    }
    try {
        let job = new Job({
            name: req.body.name,
            description : req.body.description,
            sallary: req.body.sallary

        }
        );
        
        job = await job.save()
        
        res.status(200).send("added succecfully")
        
    } catch (error) {
        res.status(404).send(error)
        
    }
};


//delete Job by name
exports.deleteJob=async(req,res)=>{

    const job= await Job.findByIdAndRemove(req.body.name);
    if(!job){
        res.status(400).send('this job does not exist')
    }
    try {
        res.status(200).send("Deleted succecfully")
    } catch (error) {
        res.status(404).send(error)
    }
    
}




