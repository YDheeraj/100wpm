import React, {useRef } from 'react'
import './parapreview.css';

const ParaPreview = ({para,userInput,textColor,textColor2,backgroundC}) => {
    const text=para.split('');
    const useInputarr=userInput.split('');
    
    let change=useRef(null);
const changecolor=(i)=>{
  const span=change.current.children[i];
  span.className=backgroundC;
}


const changecolor2=(i)=>{
  if(i-1>0){
  const span=change.current.children[i-1];
  span.className="";
  }
}

const changecolor3=(i)=>{
  if((i+1)<text.length){
  const span=change.current.children[i+1];
  span.className="";
}
}






  return (
    <>
    <div ref={change}>
        {
         text.map((s,i)=>{
            let color;
            if(i<useInputarr.length){
              if(useInputarr.length<text.length){
                  changecolor(useInputarr.length);
                  changecolor2(useInputarr.length);
                  changecolor3(useInputarr.length);
                  
              }
                s===useInputarr[i]?color=textColor:color=textColor2;
                
            }
             return <span  key={i} style={{color:color}} className="">{s}</span>
         })
        }
    </div>
    </>
  )
}

export default ParaPreview