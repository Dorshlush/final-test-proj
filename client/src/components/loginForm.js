import React from 'react';
import { useEffect,useState,useContext } from 'react';
import axios from 'axios';
import "./user.css"
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../helpers/context';



const Users = () => {
  const {setUserPhone,userPhone}=useContext(AppContext)
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const navigator=useNavigate()
    
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const confirmation = {
        phoneNumber: phoneNumber,
        password: password
    
      };
      
  
      try {
          const response = await axios.post('http://localhost:5000/api/login', confirmation);
           localStorage.setItem("token",response.data)
           console.log(response.data)
           const userD=await axios.post('http://localhost:5000/api/users/userdetails',confirmation)
           setUserPhone(userD.data)
           
          
          
           navigator("/allJobs")
           
          
          
        } catch (error) {
          alert(error)
          
        }
      
      };
    return (
      <>
      <form className='container' onSubmit={handleSubmit}>
        <label>
        PhoneNumber:
          <input
            type="text"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>
        <br />
        <span><button type="submit">Log in</button></span>
        
      </form>

      </>)
}

export default Users;
