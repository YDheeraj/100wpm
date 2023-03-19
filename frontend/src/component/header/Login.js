

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/Footer';
import "./Login.css";
import {setUser,setEmail} from '../../actions/index';
import { useDispatch } from 'react-redux';



const Login = () => {
   
  const sendUserstatus = useDispatch();
  const sendEmail=useDispatch();
    const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setemail(event.target.value);
  }

 

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }
 const navigate=useNavigate();
  const handleSubmit =async (event) => {
    event.preventDefault();
    const res= await fetch("/signin",{
      method:"POST",
      headers:{
           "content-Type":"application/json"
      },
      body:JSON.stringify({
         email,
         password
      })
    })
    const data=res.json();
    if(res.status===400||!data){
      window.alert("invalid Credentials");
    }else{
      console.log("user");
      console.log(data)
      sendUserstatus(setUser(true));
      sendEmail(setEmail(email));
      window.alert("Login Successful");
      navigate("/")
    }
  }

  return (
    <>
    <div className='banner'>
    <div className='content'>
    <div className='container'>
    <div className="neumorphic-login-container">
  <div className="neumorphic-login-card">
    <h2>Welcome</h2>
    <form method='POST' onSubmit={handleSubmit}>
      <input type="text" id="username" value={email} onChange={handleEmailChange} autoComplete='off' placeholder="Email Address"/>
      <div className="password-input-container">
        <input type="password" id="password" placeholder="Password" value={password}autoComplete='off'  onChange={handlePasswordChange}/>
        <span className="password-toggle-icon"><i className='bx bx-hide'></i></span>
      </div>
      <button className='btn' type="submit"><span></span>Submit</button>
    </form>
  </div>
</div>
    </div>
    </div>
    </div>
    <Footer></Footer>
    </>
  )
}





export default Login