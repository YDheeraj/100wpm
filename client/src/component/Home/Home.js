

import React from 'react'
import './home.css'
import { useNavigate } from 'react-router-dom'
import Footer from '../footer/Footer'
import { useSelector } from 'react-redux'

const Home = () => {

  const navigate=useNavigate();

  const gototest=()=>{
    navigate('/Typingetst/test');
  }

  const gotoTutorpage=()=>{
    navigate('/typingTutor');
  }
  const rowcol = useSelector((state) => state.setRowCol);
  console.log(rowcol,"sfdf");
  return (
    <>
      <div className='banner'>
         <div className='content'>
          <h1 className='medium-device-h1'>LEARN TYPING</h1>
          <p>Learn to type faster with 100wpm typing tutor. Take our typing lessons for free. Take an online typing test to find out your typing speed and impress friends or employers with your personal typing certificate.</p>
          <div className='medium-flex-column'>
            <button onClick={gotoTutorpage} type='button' className='btn'><span></span>START WITH LESSONS</button>
            <button onClick={gototest} type='button' className='btn'><span></span>TAKE A TYPING TEST</button>
          </div>
         </div>
      </div>
    <Footer></Footer>
    </>
  )
}

export default Home