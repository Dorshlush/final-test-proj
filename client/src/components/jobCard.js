import React from 'react';
import "./jobCard.css"
import { AppContext } from '../helpers/context';
import axios from 'axios'
import { useContext } from 'react';

const JobCard = (props) => {
    const {userPhone}=useContext(AppContext)
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const applyInfo = {
          phoneNumber: userPhone,
          name: name
      
        };
        
    
        try {
            const response = await axios.post('http://localhost:5000/api/users/apply', applyInfo);
             localStorage.setItem("token",response.data)
             alert("Applied succesfuly")    
            
          } catch (error) {
            alert(error)
            
          }
        }

    const{name,sallary}=props
    return (
        
  <div className="card">
    <div className="box">
      <div className="content">
        <h2>{name}</h2>
        <h3>{name}</h3><br/><br/>
        <h4>Click here to apply and we will contact you soon!</h4>
        <br/><br/><br/>
        <h5>sallary:{sallary}</h5>
        <a onClick={handleSubmit} >Apply</a>
      </div>
    </div>
  </div>
  
    );
}

export default JobCard;
