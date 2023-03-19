

import React from 'react'
import { NavLink } from 'react-router-dom'
import '../footer/footer.css'

const Footer = () => {
  return (
    <div className='Footer-container'>
        <ul>
                <li>
                  <NavLink to="/AboutUs">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/ContactUs">Contact Us</NavLink>
                </li>
                <li>
                  <NavLink to="/TermAndCondition">Privacy & Terms</NavLink>
                </li>
        </ul>
        <h5>	&#169; 2023 100wpm — Free Online Typing Tutor</h5>
    </div>
  )
}

export default Footer