import React, { useState } from 'react'
import Footer from '../footer/Footer';
import "./registration.css";
import {NavLink, useNavigate} from "react-router-dom";
import regImg from '../../images/regBack.jpg'

const  Registration = () => {
  const history = useNavigate();
  const loginpage=useNavigate();
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

  const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (!passwordRegex.test(password)) {
    return alert("Password should be at least 8 characters long and should contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
  }

  if (password !== cpassword) {
    return alert("Password and Confirm Password do not match");
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
     console.log(data.error);
     if (res.status === 422 && data.error === "Email already exist") {
      window.alert("Email already exists, please sign in instead.");
      loginpage("/Login");
    } else if (res.status === 201) {
      window.alert("Registration Successful");
      console.log("successful Registration");
      history("/");
    } else {
      window.alert("Registration Failed");
    }
   }


  return (
    <>
    <div className='banner'>
    <div className='content'>
      <div className='registration'>
       <img alt='registrationImage' src={regImg}></img>
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
