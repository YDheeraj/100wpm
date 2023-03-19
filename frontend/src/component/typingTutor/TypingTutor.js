import React, { useRef } from "react";
import ParaPreview from "../parapreview/ParaPreview";
import "../typingTutor/typingtutor.css";
import TutorLessons from "./TutorLessons";
import { useState, useEffect } from "react";
import Footer from "../footer/Footer";
import { useNavigate } from "react-router-dom";
import { setTrue, setFalse,setRow,setCol } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import store from "../../store";
import { setAccuracy, setWpm} from "../../actions";
import Loading from "../../loadingPage/Loading";

const { chapters, lessons, lessonContent } = TutorLessons();///---------API DATA 

const TypingTutor = () => {
  const temp = lessons[0];
  const [row, setCurRow] = useState(0);
  const [col, setCurCol] = useState(0);
  const [lessonData, setlessonData] = useState(temp);
  const inputref = useRef(null);
  const storeRow=useDispatch();
  const storeCol=useDispatch();
  const storRowVal=useSelector((state)=>state.setRow);
  const storeColVal=useSelector((state)=>state.setCol);
  const truefalse = useDispatch();
  const state = store.getState();
  const data = Object.values(state);
  const [input, setinput] = useState("");
  const [symbol, setSymbol] = useState(0);
  const [finished, setFinished] = useState(false);
  const gotostats = useNavigate();
  const history = useNavigate();
  const [loading, setLoading] = useState(true);



/////////////////////////////////---------Check authentication start --------------------/////////////////////////////

  const callTutorPage = async () => {
    
    try {
      setLoading(true);
      const res = await fetch("/typingTutor", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "appliction/json",
        },
        credentials: "include",
      });
        const userdata =await res.json();
        storeRow(setRow(userdata.row));
        storeCol(setCol(userdata.col));
        setCurRow(userdata.row);
        setCurCol(userdata.col);
        setLoading(false);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      history("/Login");
    }
  };

  useEffect(() => {
    callTutorPage();
  }, []);

/////////////////////////////////---------Check authentication end --------------------/////////////////////////////

//////////////////////////------------setting exercises declaration of para and select options---///////////////////

  const handleChapters = (e) => {
    console.log("handle Chapters");
    setCurRow(e.target.value);
    setCurCol(0);
    setlessonData(lessons[e.target.value]);
    console.log(lessonData,"lessondata");
  };
  const para = lessonContent[row][col];
  //////////////////////////------------setting exercises declaration of para and select options---///////////////////

///////////////////////////////////////-----------test-working-code----start----------------////////////////////////

  const onRestart = () => {
    setinput("");
    setSymbol(0);
    truefalse(setFalse());
    setFinished(false);
  };

  const handleInput = (e) => {
    if (!data[1]) {
      truefalse(setTrue());
    }
    const v = e.target.value;
    setinput(v);
    onFinish(v);
    setSymbol(countCorrectSymbol(v));
  };

  const countCorrectSymbol = (str) => {
    const arr = para.split("");
    let ans = str.split("").filter((s, i) => s === arr[i]).length;
    return ans;
  };


  const onFinish = (str) => {
    const gotoStartTypingtest = () => {
     storeRow(setRow(row));
     storeCol(setCol(col));
      gotostats("/LessonResult");
    };
    if(para.length === str.length) {
      onRestart();
      gotoStartTypingtest();
      setFinished(true);
      truefalse(setFalse());
    }
  };

  ///////////////////-----------------for small screen size----------///////
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

  ////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////-----------test-working-code----start----------------////////////////////////
if(loading){
  return <>
  <Loading></Loading>
  </>
}
return (
    <>
    {
      isSmallScreen ? (
        <div className='banner'>
          <div className="warning">
            <p>Please switch to desktop mode or landscape mode for a better typing experience.</p>
          </div>
          </div>
        ):(
    <>
      <div className="banner">
        <div className="container">
          {/* onClick={()=>{inputref.current.focus()}}  focus humesha input per rakhne k liye    */}
          <div className="course-detail-outer">
            <div className="course-detail-left">
              <div className="course">
                <h5>course</h5>
                <select>
                  <option value="1">1.English</option>
                </select>
              </div>
              <div className="lessons">
                <h5>Lessons</h5>
                <select
                 value={row}
                  className="navSelect-large"
                  id="selLesson"
                  onChange={handleChapters}
                >
                  {chapters.map((id, key) => {
                    return (
                      <option disabled={key>storRowVal} value={key} key={id}>
                        {id}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div style={{ paddingRight: "80px" }}>
                <h5>Exercise</h5>
                <select id="selString" value={col} onChange={(e) => setCurCol(e.target.value)}>
                  {lessonData.map((id, key) => {
                    return (
                     <option disabled={key>storeColVal && row===storRowVal} value={key} key={id}>{id}</option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="course-detail-right">
              <div className="show-keyboard">
                <h5>WPM</h5>
                <Wpm symbol={symbol} start={data[0]}></Wpm>
              </div>
              <div className="show-keyboard">
                <h5>Typos</h5>
                <WpmAccuracy para={para} userInput={input}></WpmAccuracy>
              </div>
            </div>
          </div>
          <div className="">
            <div
              className="bottom-text-container"
              onClick={() => {
                inputref.current.focus();
              }}
            >
              <ParaPreview
                para={para}
                userInput={input}
                textColor={"#d2d2d2"}
                textColor2={"#F36747"}
                backgroundC={"line"}
              ></ParaPreview>
            </div>
            <div>
              <input
                ref={inputref}
                className="para-input"
                value={input}
                onChange={handleInput}
                autoFocus
                readOnly={finished}
              ></input>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
      </>
        )
            }
    </>
  );
};

////////////////////---------------------------------WPM------------------------------//////////////////////

export const Wpm = ({ symbol, start }) => {
  const [sec, setSec] = useState(0);
  let id;
  useEffect(() => {
    if (start) {
      id = setInterval(() => {
        setSec((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      clearInterval(id);
    };
  }, [start]);

  let wpm = 0;
  if (symbol !== 0 && sec !== 0) {
    wpm = (symbol / 5 / sec) * 60;
  }

  const sendWpm = useDispatch();
  useEffect(()=>{
    sendWpm(setWpm(Math.round(wpm)));
  },[wpm])


  return (
    <>
      <span>{Math.round(wpm)}</span>
    </>
  );
};

//////////////////////---------------------WPM ACCURACY-------------------/////////////////////////////////

const WpmAccuracy = ({ para, userInput }) => {
  const text = para.split("");
  const useInputarr = userInput.split("");
  const cnt = () => {
    let num = 0;
    text.map((s, i) => {
      if (i < useInputarr.length) {
        if (s !== useInputarr[i]) {
          num++;
        }
      }
      return "";
    });
    return num;
  };

  const sendAccuracy = useDispatch();
  useEffect(()=>{
    sendAccuracy(setAccuracy(cnt()));
  },[cnt()])

  return (
    <>
      <span>{cnt()}</span>
    </>
  );
};

export default TypingTutor;
