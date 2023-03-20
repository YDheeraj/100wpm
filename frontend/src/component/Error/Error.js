
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../footer/Footer'

const Error = () => {
   const gotoHomePage=useNavigate();

  return (
    <>
       <div className='banner'>
        <div className='content'>
          <h1>
            404
          </h1>
          <h2>
            PAGE NOT FOUND
          </h2>
          <p>Go To Home Page</p>
          <button className='btn' onClick={()=>{gotoHomePage('/')}}> <span></span> Click Here</button>
        </div>
       </div>
       <Footer></Footer>
    </>
  )
}

export default Error