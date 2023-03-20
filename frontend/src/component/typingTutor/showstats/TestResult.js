
import "./testResult.css";
import {FiDownload} from "react-icons/fi"
import { useSelector } from "react-redux";
import image from '../../../images/typingimg.jpg';
import { useNavigate } from "react-router-dom";
import {jsPDF} from 'jspdf'
import Customfont from "./Great_Vibes-normal";
import { useEffect, useState } from "react";
import Footer from "../../footer/Footer";

const TestResult = () => {
const font=Customfont();
const wpm = useSelector((state) => state.setWpm);
const accuracy = useSelector((state) => state.setAccuracy);
const navigate=useNavigate();
const [name,setname]=useState("your Beauitful Name");
const [loading, setLoading] = useState(false);


  const callTutorPage = async () => {
    setLoading(false);
    try {
      const res = await fetch("/typingTutor", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "appliction/json",
        },
        credentials: "include",
      });
        const userdata =await res.json();
        setname(userdata.name);
        setLoading(true);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      
      }
    } catch (error) {
      console.log(error);
      alert("Please login to get certificate");
      navigate('/Login');
    }
  };






 //////////////////////////////////////////////////--generate certificate---------////////////////
const generatePDF=()=>{
  const doc = new jsPDF('landscape', 'in', [14.67, 11.33]);
  doc.addImage(image,"JPG",0,0,14.67,11.33);


  // Set font for the document 
  doc.addFileToVFS("Great_Vibes.ttf",font);
  doc.addFont("Great_Vibes.ttf", "Great_Vibes",'normal');
  doc.setFont("Great_Vibes",'normal');

 let UserName=name;
 UserName=name.charAt(0).toUpperCase() + name.slice(1);
  doc.setFontSize('50');
  doc.text(`${UserName}`,7.3,6.4,'center');


  doc.setFont('Times-Roman');
  doc.text(`${wpm}`,3.87,8.62);
  doc.text(`${accuracy}`,9.5,8.62);
  doc.save(`${UserName}_Typing_Certificate.pdf`);
}


useEffect(() => {
  if(loading){
    generatePDF();
  }
}, [loading])



const downloadCertificate=()=>{
    if(localStorage.getItem("user")){
      callTutorPage();
    }
    else{
      alert("Login to get certificate");
      console.log("login to get certificate")
    }
}



  return (
    <>
      <div className="banner">
        <div className="content">
          <div className="testResult">
            <div className="testResult-head">
              {accuracy > 95 ? (
                wpm > 30 ? (
                  <h2>Well done !</h2>
                ) : (
                  <h2>You have to work on speed !</h2>
                )
              ) : (
                <h2>You have to work on your accuracy !</h2>
              )}
            </div>
            <div className="testResult-content">
            <div className="testResult-stats">
                  <div className="wpm box">
                    <h3>{wpm}</h3><span>WPM</span>
                  </div>
                  <div className="typos box">
                      <h3>{accuracy}<span>%</span></h3><span>ACCURACY</span>
                  </div>
             </div>
             <div className="Certificate-Container">
                <div className="certificate">
                  <div className="get-certificate">
                    {
                      accuracy<95?<><p>Complete test with acccuracy more than <b>95%</b> to get certificate or start with lessons to improve your result</p><button  className="download h"><span><FiDownload></FiDownload></span>Download Certificate</button></>
                      :<><p>Click on download to get certificate or start with lessons to improve your result</p><button className="download" onClick={downloadCertificate}><span><FiDownload></FiDownload></span>Download Certificate</button></>
                    }
                  </div>
                </div>
                <div className="lessonResult-next">
                   <button className="btn" type="button"  onClick={()=>navigate('/Typingetst/StartTyping')}><span></span>TRY AGAIN</button>
                   <button  className="btn" onClick={()=>navigate('/typingTutor')}><span></span>START WITH LESSONS</button>
                </div>
             </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default TestResult;
