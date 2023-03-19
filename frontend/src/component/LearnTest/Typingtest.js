

import React, { useEffect, useRef, useState } from 'react'
import Accuracy from '../accuracy/Accuracy';
import ParaPreview from '../parapreview/ParaPreview';
import Speed from '../speed/Speed';
import './typingtest.css'
import {VscDebugRestart} from  "react-icons/vsc";
import {GiPistolGun} from  "react-icons/gi";

import { useNavigate } from 'react-router-dom';
import Footer from '../footer/Footer';
import { setTrue,setFalse} from '../../actions';
import { useDispatch } from 'react-redux';
import store from '../../store';
import Loading from '../../loadingPage/Loading';


export const Test= () => {
  const [loading, setLoading] = useState(true);
  const [para, setParagraph] = useState('');

    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch('https://hipsum.co/api/?type=hipster-centric&sentences=4');
        const data = await response.json();
        setParagraph(data);
        console.log(data);
        setParagraph(data[0]);
        setLoading(false);

      } catch (error) {
        console.error(error);
      }
    };
    
  useEffect(()=>{
         fetchData();
  },[])
  
  // console.log(typeof para,"para");
  // console.log(typeof paragraph[0],"paragraph");
  


  const state=store.getState();
  const data=Object.values(state);


  const settruefalse=useDispatch();


const [input,setinput]=useState("");
const [symbol,setSymbol]=useState(0);
const [finished,setFinished]=useState(false);

const navigate=useNavigate();

const onRestart=()=>{
    setinput("");
    setSymbol(0);
    settruefalse(setFalse());
    setFinished(false);
    navigate('/Typingetst/StartTyping');

}


const handleInput=(e)=>{

  if(!data[0]){
    settruefalse(setTrue());
  }
   const v=e.target.value;
     setinput(v);
     onFinish(v);
     setSymbol(countCorrectSymbol(v));
}

const countCorrectSymbol=(str)=>{
    const arr = para.split('');
    let ans=str.split('').filter((s,i) => s === arr[i]).length;
    return ans;
}

const inputref=useRef(null);

const gotostats=useNavigate();
const onFinish=(str)=>{
  const gotoStartTypingtest=()=>{
    gotostats('/TestResult');
  }
 
  if(para.length===str.length){
    gotoStartTypingtest();
    setFinished(true);
    settruefalse(setFalse()); 

  }
}

if(loading){
  return <>
  <Loading></Loading>
  </>
}
  return (
    <>
      <div onClick={()=>{inputref.current.focus()}}   className='banner'>
        <div className='content'>
        <div className='typingTest-Container' >
     <div className='paraPreview-container'> <ParaPreview para={para} userInput={input} textColor={"#fff"} textColor2={"#F36747"} backgroundC={"back-white"}></ParaPreview></div>
     <div className='stats-typingtest'>
     <Speed symbol={symbol} start={data[0]}></Speed>
     <Accuracy para={para} userInput={input} ></Accuracy>
     <div className='restart-container'>
    <VscDebugRestart style={{width:"20px",height:"20px",textTransform:"none"}}></VscDebugRestart>
    <button className='restart-btn' onClick={onRestart}>Restart</button>
    </div>
     </div>
    </div>
    <input className='para-input' ref={inputref} value={input} onChange={handleInput} autoFocus  readOnly={finished}></input>
    </div >
    </div>
    <div>
    <Footer></Footer>
    </div>
    </>



  )
}




export const Typingtest=()=>{
  const navigate=useNavigate();
  const gotoStartTypingtest=()=>{
    navigate('/Typingetst/StartTyping');
  }

  
  return (
    <>
    <div className='banner'>
    <div className='content'>
          <h1 className='medium-device-h1'>LEARN TYPING</h1>
          <p>You can test your typing speed in wpm on English and impress your friends or employers with your own typing certificate. Test your typing speed, and find out how fast you type, and then improve your typing speed if necessary.</p>
          <div>
            <button onClick={gotoStartTypingtest} type='button' className='btn'><span></span>START TYPING</button>
          </div>
          <div>
            
          </div>
         </div>
    </div>
    <Footer></Footer>
    </>
  )
}


export const StartTyping=()=>{
  const navigate=useNavigate();
  const startType=()=>{
    navigate('/Typingetst/test');
  }

  const [isSmallScreen, setIsSmallScreen] = useState(false);
   
  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 500);
      console.log("screen");
    }
    
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <>
     {isSmallScreen ? (
      <div className='banner'>
        <div className="warning">
          <p>Please switch to desktop mode or landscape mode for a better typing experience.</p>
        </div>
        </div>
      ) :
      (<div className='banner'>
        <div className='container'>
        <div className='startType-main-box'>
          <div className='startType-logo-box-outer'>
            <div className='startType-logo'>
              <GiPistolGun></GiPistolGun>
            </div>
          </div>
          <div className='bottom-container'>
            <h1>Please be prepared. Good luck! </h1>
            <button className='btn' onClick={startType}><span></span> Start Typing Now</button>
          </div>
        </div>
        </div>
      </div>)}
    </>
  )
}




export default Typingtest