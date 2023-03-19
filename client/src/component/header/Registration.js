import React, { useState } from 'react'
import Footer from '../footer/Footer';
import "./registration.css";
import {NavLink, useNavigate} from "react-router-dom";
import { useDispatch } from 'react-redux';

const  Registration = () => {
  const history = useNavigate();
   const [user,setUser]=useState([{
        name:"",email:"",password:"",cpassword:"",check:""
   }])

   let name,value;
   const handleInputs=(e)=>{
        name= e.target.name;
        value = e.target.value
        setUser({...user,[name]:value});
   }



   const handlesubmit= async (e)=>{
    const {name,email,password,cpassword,check}=user;
    e.preventDefault();
    if(!name|| !email || !password|| !cpassword||!check ){
      return alert("pls fill the feild properly");
  }
     const res=  await  fetch("/register",{
      method:"POST",
      headers:{
        "content-Type":"application/json"
      },
      body:JSON.stringify({
         name,email,password,cpassword
      })
     });
     const data = await res.json();
     if(data.status===422 || !data){
      window.alert("Invalid Registration");
      console.log("invalid Registration");
     }
     else{
      window.alert("Registration Successful");
       console.log("successful Registration");
        //  sendUserstatus(setUser(false));
       history("/");
     }
   }


  return (
    <>
    <div className='banner'>
    <div className='content'>
      <div className='registration'>
    <form className='form-registration' onSubmit={handlesubmit}>
      <label className="input-label">
        <span>Name:</span>
        <input type="text" name='name'id='name' value={user.name} onChange={handleInputs} />
      </label>
      <label className="input-label">
        <span>Email:</span>
        <input type="email" name='email' id='email' value={user.email} onChange={handleInputs} />
      </label>
      <label className="input-label">
        <span>Password:</span>
        <input type="password" name='password' id='password' value={user.password} onChange={handleInputs} />
      </label>
      <label className="input-label">
        <span>Confirm Password:</span>
        <input type="password" name='cpassword' id='cpassword' value={user.cpassword} onChange={handleInputs} />
      </label>
      <label className="checkbox-label">
        <input type="checkbox" name='check' id='check' checked={user.check}  onChange={handleInputs} />
        <span>I agree to the <NavLink to="/TermAndCondition" style={{textDecoration:"none", color:"#009688"}}>Privacy & Terms</NavLink></span>
      </label>
      <button className='reg-btn' type="submit"><span></span>Register</button>
    </form>
    </div>
    </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Registration;
