import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Register = () => {
 
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigator=useNavigate()///moving the user the another page

  const handleSubmit =  async (event) => {
    event.preventDefault();
    const user = {
      phoneNumber: phoneNumber,
      password: password
    };
    
    try {
      const response = await axios.post('http://localhost:5000/api/users', user);
      localStorage.setItem("token",response.headers['x-auth-token'])//saving the token in the local storage
      alert("user Created")
      navigator ('/alljobs')
    } catch (error) {
      console.log(error.message)
      alert("User alredy exist!")//moving the user the another page
      
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
      <span><button  type="submit">Sign up</button></span>
     
      
    </form>
    </>
  );
};

export default Register;