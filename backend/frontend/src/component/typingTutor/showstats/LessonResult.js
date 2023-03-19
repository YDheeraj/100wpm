import React, { useState } from "react";

import "./lessonResult.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCol,setRow } from "../../../actions";
import TutorLessons from "../TutorLessons";
import Footer from "../../footer/Footer";


const {lessonContent } =TutorLessons();///---------API DATA 
const LessonResult = () => {
  const wpm = useSelector((state) => state.setWpm);
 const typos= useSelector((state) => state.setAccuracy);
  const [row,updateRow]=useState(useSelector((state)=>state.setRow))
  const [col,updateCol]=useState(parseInt(useSelector((state)=>state.setCol)));
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  
  const navigate= useNavigate();
  

  const setRowColatBackend= async (row,col) => {
    try {
      const response = await fetch("/update-row-col", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ row, col}),
      });
      const data = await response.json();
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };


  const tryagain=()=>{
    navigate('/typingTutor');
  }

  console.log(lessonContent);

    const gotonext = async () => {
       if(col===lessonContent[row].length-1){
           const newRow=row+1;
           const newCol=0;
           await setRowColatBackend(newRow,newCol);
           dispatch(setCol(newCol));
           dispatch(setRow(newRow));
           console.log(newRow);
       }else{
      const newCol = col + 1;
      await setRowColatBackend(row, newCol);
      dispatch(setCol(newCol));
       }
  
      // Navigate to next page
      navigate('/typingTutor');
    }
  

  return (
    <>
      <div className="banner">
        <div className="content">
              <div className="lessonResult">
                <div className="lessonResult-head">
                    {
                      typos<3?wpm>20?<h2>Exercise Finished</h2>:<h2>Opps ! need more practice</h2>:<h2>Opps ! make less than 3 mistake</h2>
                    }
                </div>
                <div className="lessonResult-stats">
                  <div className="wpm box">
                    <h3>{wpm}</h3><span>WPM</span>
                  </div>
                  <div className="typos box">
                      <h3>{typos}</h3><span>TYPOS</span>
                  </div>
                </div>
                <div className="lessonResult-next">
                   <button className="btn" type="button" onClick={tryagain}><span></span>TRY AGAIN</button>
                   {
                    typos<2 && wpm>20?<button onClick={gotonext} className="btn"><span></span>NEXT</button>:null
                   }
                </div>
              </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default LessonResult;
