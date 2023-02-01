import React from 'react';
import axios from 'axios';
import { useEffect,useState,useContext } from 'react';
import { AppContext } from '../helpers/context';
import JobCard from './jobCard';

const AllJobs = () => {
    const [jobs,setJobs]=useState([])
    async function getAllJobs() {
        try {
          const response = await axios.get("http://localhost:5000/api/jobs/getAllJobs");
          const jobs = response.data;
          setJobs(jobs)
        } catch (error) {
          console.error(error);
        }
      }

    useEffect(() => {
        getAllJobs();
      }, []);
    return (
        <div className="container">
            { jobs.map(job=>
                    <JobCard   
                    key={job._id}
                    name={job.name}
                    sallary={job.sallary}
                    />
                )}
            
        </div>
    );
}

export default AllJobs;
