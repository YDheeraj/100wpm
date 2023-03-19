

import React, {} from 'react';
import './accuracy.css';
import { RxTarget} from "react-icons/rx";

import { setAccuracy } from '../../actions';
import { useDispatch } from 'react-redux';

const Accuracy = ({para,userInput}) => {
  const text=para.split('');
    const useInputarr=userInput.split('');
    let num=0;
const cnt=()=>{
  text.map((s,i)=>{
    if(i<useInputarr.length){
      if(s!==useInputarr[i]){
         num++;
      }
    }
  });
  let val=(((para.length-num)/para.length)*100).toFixed(0);
  num=0;
  return val;
  
}

let color;
let val=40;
val=val-(100-cnt());
if(val>0 && val<5){
  color="#6f6e6e";
}
else if(val>5 && val<10){
  color="#7c7c7c";
}
else if(val>15 &&val<20){
color="#9f9f9f";
}
else if(val>20 &&val<25){
color="#bdbdbd";
}
else if(val>25 &&val<30){
color="#cfcfcf";
}
else if(val>30 &&val<35){
  color="#d4d4d4";
}
else if(val>35 &&val<40){
  color="#d9d9d9";
}
else if(val>40 &&val<50){
  color="#e0e0e0";
}
else if(val>50 &&val<60){
  color="#ededed";
}
else{
  color="#ffffff";
}


const sendAccuracy=useDispatch();
sendAccuracy(setAccuracy(cnt()));


  return (
    <>
    <div className='container-accuracy'>
    <div className='stat-headings'>
    <RxTarget style={{width:"18px",height:"18px",textTransform:"none"}}></RxTarget>
    <h3 style={{textTransform:"uppercase"}}>Accuracy</h3>
    </div>
    <div className='progres-bar'>
    <div style={{height:`${val}px`, background:`${color}`,
    zIndex:"51",
    width:"19px",
    position:"absolute",
    borderRadius: "1px 1px 0px 0px",
    bottom:"0"}}></div>
    </div>     

      <p style={{fontSize:"32px"}}>{cnt()}<span style={{fontSize:"12px"}}>%</span></p>
    </div>
    </>
  )
}

export default Accuracy