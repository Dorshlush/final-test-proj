
import './App.css';
import Navbar from './components/navbar';
import RegistrationForm from"./components/registrationForm"
import LoginForm from "./components/loginForm"
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllJobs from './components/AllJobs';

function App() {
  return (
    <>
    <Navbar/>
    <div className='app'>
    
    
  <Routes>
      
      <Route path="/allJobs" element={<AllJobs />}/>
      <Route path="/login" element={<LoginForm />}/>
      <Route path="/signUp" element={<RegistrationForm/>}/>
      
    
  </Routes>
  
  </div>
  </>
  );
}

export default App;
