import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Learn from './component/Learn/Learn';
import Typingtest, { Test,StartTyping } from './component/LearnTest/Typingtest';
import TypingTutor from './component/typingTutor/TypingTutor';
import Error from './component/Error/Error';
import MainHeader from './component/mainHeader/MainHeader';
import TestResult from './component/typingTutor/showstats/TestResult';
import LessonResult from './component/typingTutor/showstats/LessonResult';
import Registration from './component/header/Registration';
import Login from './component/header/Login';
import AboutUs from './component/footer/AboutUs';
import ContactUs from './component/footer/ContactUs';
import Logout from './component/header/Logout';
import TermsAndCondition from './component/footer/TermsAndCondition';
function App() {
  return (
  <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainHeader></MainHeader>}>
      <Route index element={<Home></Home>} />
      <Route path='/typingtest' element={<Typingtest></Typingtest>}></Route>
      <Route path='/typingTutor' element={<TypingTutor></TypingTutor>}></Route>
      <Route path='/Learn' element={<Learn></Learn>}></Route>
      <Route path='/Typingetst/test' element={<Test></Test>}></Route>
      <Route path='/Typingetst/StartTyping' element={<StartTyping></StartTyping>}></Route>
      <Route path='/TestResult' element={<TestResult></TestResult>}></Route>
      <Route path='/LessonResult' element={<LessonResult></LessonResult>}></Route>
      <Route path='/registration' element={<Registration></Registration>}></Route>
      <Route path='/Login' element={<Login></Login>}></Route>
      <Route path='/AboutUs' element={<AboutUs></AboutUs>}></Route>
      <Route path='/ContactUs' element={<ContactUs></ContactUs>}></Route>
      <Route path='/logout' element={<Logout></Logout>}></Route>
      <Route path='/TermAndCondition' element={<TermsAndCondition></TermsAndCondition>}></Route>
      <Route path='*' element={<Error></Error>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
