
import './speed.css'
import React ,{useEffect,useRef,useState} from 'react'
import {SlSpeedometer} from "react-icons/sl";
import { setWpm } from '../../actions';
import { useDispatch } from 'react-redux';

const Speed = ({symbol,start}) => {
  const [sec,setSec]=useState(0);
  let id;
  useEffect(()=>{
     if(start){
       id=setInterval(() => {
         setSec((prev)=>prev+1);
       }, 1000);
     }
     return ()=>{
       clearInterval(id);
     }
  },[start])

   let wpm=0;
  if(symbol!==0 && sec!==0){
    wpm=(((symbol/5)/(sec))*60);
}

let  updatedSpeed=0;
const color={
  borderBottomColor:"#000000",
  borderLeftColor:"#000000"
}

if(wpm>0 && wpm<5){
  color.borderBottomColor="#6f6e6e";
  color.borderLeftColor="#6f6e6e";
}
else if(wpm>5 && wpm<10){
  color.borderBottomColor="#7c7c7c";
  color.borderLeftColor="#7c7c7c";
}
else if(wpm>15 && wpm<20){
  color.borderBottomColor="#9f9f9f";
  color.borderLeftColor="#9f9f9f";
}
else if(wpm>20 && wpm<25){
  color.borderBottomColor="#bdbdbd";
  color.borderLeftColor="#bdbdbd";
}
else if(wpm>25 && wpm<30){
  color.borderBottomColor="#cfcfcf";
  color.borderLeftColor="#cfcfcf";
}
else if(wpm>30 && wpm<35){
  color.borderBottomColor="#d4d4d4";
  color.borderLeftColor="#d4d4d4";
}
else if(wpm>35 && wpm<40){
  color.borderBottomColor="#d9d9d9";
  color.borderLeftColor="#d9d9d9";
}
else if(wpm>40 && wpm<50){
  color.borderBottomColor="#e0e0e0";
  color.borderLeftColor="#e0e0e0";
}
else if(wpm>50 && wpm<60){
  color.borderBottomColor="#ededed";
  color.borderLeftColor="#ededed";
}
else{
  color.borderBottomColor="#ffffff";
  color.borderLeftColor="#ffffff";
}

let needleref=useRef(null);
let needledeg;
let speedref=useRef(null);
useEffect(()=>{
  wpm=Math.round(wpm)
  updatedSpeed = Math.round(wpm*180/100)-45;
  needledeg=Math.round(wpm*180/100)-90;
    speedref.current.style.transform=`rotate(${updatedSpeed}deg)`;
    needleref.current.style.transform=`rotate(${needledeg}deg)`;
},[wpm])

const sendWpm=useDispatch();
sendWpm(setWpm(Math.round(wpm)));




  return (

    <div className='indicator'>
        <div className='speed-stat-headings'>
    <SlSpeedometer style={{width:"17px",height:"17px",textTransform:"none"}}></SlSpeedometer>
    <h3 style={{textTransform:"uppercase"}}>speed</h3>
    </div>
<div className="speedbox">
  <div className='needle' ref={needleref} ></div>
  <div className='dot'></div>
  <div className="speedbox__score"  id="speedbox-score" ref={speedref} style={color}></div>
  <div className="speedbox__groove" ></div>
  <div className="speedbox__odo" >
    <div className="speedbox__down"><span style={{fontSize:"32px"}}>{Math.round(wpm)}</span><span style={{fontSize:"12px"}}>WPM</span></div>
  </div>
  <div className="speedbox__base"></div>
</div>
    </div>
  )
}

export default Speed;

