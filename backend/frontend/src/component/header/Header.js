import React, { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import logo from '../../images/logo.png';
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../actions";


const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.setUser);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      dispatch(setUser(storedUser));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const[showMenu,setShowMenu]=useState(false);

  return (
    <>
    <header>
    <div className="navbar">
  <img src={logo} alt="logo"  className="logo"></img>
  <div className="menu-icon" onClick={() => setShowMenu(!showMenu)}>
    <span></span>
  </div>
  <ul className={showMenu ? "menu active" : "menu"}>
    <li onClick={() => setShowMenu(!showMenu)}>
      <NavLink to="/">Home</NavLink>
    </li>
    <li  onClick={() => setShowMenu(!showMenu)}>
      <NavLink to="/Typingtest">Typing Test</NavLink>
    </li>
    <li onClick={() => setShowMenu(!showMenu)}>
      <NavLink to="/typingTutor">Typing Tutor </NavLink>
    </li>
    <li onClick={() => setShowMenu(!showMenu)}>
      <NavLink to="/Learn">Instruction</NavLink>
    </li>
    {user ? (
      <li onClick={() => setShowMenu(!showMenu)}>
        <NavLink to="/Logout" >Logout</NavLink>
      </li>
    ) : (
      <>
        <li onClick={() => setShowMenu(!showMenu)}>
          <NavLink to="/registration">SignUp</NavLink>
        </li>
        <li className="login" onClick={() => setShowMenu(!showMenu)}>
          <NavLink to="/Login">LogIn</NavLink>
        </li>
      </>
    )}
  </ul>
</div>
</header>
    </>
  );
};

export default Header;
