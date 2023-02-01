import React from 'react';
import "./navbar.css"
import { Link,useNavigate } from 'react-router-dom';


function Navbar() {
  const navigate=useNavigate()
  return (
    <nav>
      <ul>
        <li><Link to="/allJobs">AllJobs</Link></li>
        <li className='logsign' hidden={localStorage.getItem('token')?true:false}><Link to="/login">Login</Link></li>
        <li className='logsign' hidden={localStorage.getItem('token')?true:false}><Link to="/signUp">signUp</Link></li>
        
        <li hidden={localStorage.getItem('token')?false:true}><button onClick={()=>{
          localStorage.removeItem('token')
          navigate("/login")
        }}>LogOut</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;