import React, { useRef, useState } from 'react';
import "./ContactUs.css";
import Footer from './Footer';
import contact from '../../images/contactus.jpg'
import emailjs from 'emailjs-com';


const  ContactUs=()=> {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8vd3dr6', 'template_4asow5n', form.current, 'UFpVZMDYHi-j5inpm')
      .then((result) => {
        window.alert("message send successfully")
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  }

  return (
    <>
    <div className='banner'>
      <div className='content'>
    <div className="card">
    <div className="left">
      <img alt='contact-us' src={contact}/>
    </div>
    <div className="right">
      <h2>Contact Us</h2>
      <div className="contact">
        <div className="form-container">
          <form className="form" ref={form} onSubmit={sendEmail}>
            <div className="username">
              <input type="text" name='name'  autoComplete="off" value={name} onChange={handleNameChange} placeholder="Enter your Name"/>
            </div>
            <div className="useremail">
              <input type="email" name='email' placeholder="Enter your email" value={email} onChange={handleEmailChange} required/>
            </div>
            <div className="usermessage">
              <textarea placeholder="Enter your message" name='message' value={message} onChange={handleMessageChange} required/>
            </div>
             <button type='submit' value='send' className='btn'><span></span> Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  </div>
    </div>
    <Footer></Footer>
    </>
  );
}

export default ContactUs;
