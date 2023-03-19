import React from "react";
import Footer from "../footer/Footer";
import "../Learn/learn.css";

const Learn = () => {
  return (
    <>
      <div className="banner">
        <div className="content">
          <div className="inner-content">
            <div className="section">
              <h2>General Instruction for Typing</h2>
              <p>
                To get started, you need to have a computer or mobile device
                with an internet connection. Once you have that, simply navigate
                to our website and select the typing tutor option. Our typing
                tutor is user-friendly and easy to navigate, even for beginners.
              </p>
            </div>
            <div className="section">
              <h2>What is Touch Typing?</h2>
              <p>
                Touch typing is a typing technique that involves using all ten
                fingers to type without looking at the keyboard. It allows for
                faster and more accurate typing, which can be beneficial for
                productivity and reducing typing-related injuries.
              </p>
              {/* <img src={require('./images/image-1.jpg')} alt="Touch typing" /> */}
            </div>
            <div className="section">
              <h2>Proper Hand Placement</h2>
              <p>
                The first step to touch typing is proper hand placement. Your
                fingers should be placed on the home row, which includes the
                keys "asdf" for your left hand and "jkl;" for your right hand.
                Your thumbs should rest on the space bar.
              </p>
              {/* <img src={require('./images/image-2.jpg')} alt="Proper hand placement" /> */}
            </div>
            <div className="section">
              <h2>Typing Techniques</h2>
              <p>
                To type correctly, use the fingers of both hands to strike the
                keys. Use the index finger for keys "f" and "j", and then use
                the rest of your fingers to type the keys around them. Practice
                lifting your fingers properly to reach the top row keys and
                using the correct finger for each key.
              </p>
              {/* <img src={require('./images/image-3.jpg')} alt="Typing techniques" /> */}
            </div>
            <div className="section">
              <h2>Practice, Practice, Practice</h2>
              <p>
                To master touch typing, you need to practice regularly. Start
                with typing exercises that focus on specific key groups and
                gradually increase the difficulty level. Practice typing without
                looking at the keyboard to improve your muscle memory.
              </p>
              {/* <img src={require('./images/image-4.jpg')} alt="Practice, practice, practice" /> */}
            </div>
            <div className="section">
              <h2>Use Typing Tutor Software</h2>
              <p>
                There are many typing tutor software programs available that can
                help you improve your typing skills. These programs offer
                various exercises and tests to help you track your progress and
                identify areas for improvement.
              </p>
              {/* <img src={require('./images/image-5.jpg')} alt="Typing tutor software" /> */}
            </div>
            <div className="section">
              <h2>Benefits of Touch Typing</h2>
              <p>
                Learning touch typing can improve your typing speed and
                accuracy, reduce typing-related injuries, and increase
                productivity. It can also be helpful for people who work in
                professions that require a lot of typing, such as writers,
                editors, and programmers.
              </p>
              {/* <img src={require('./images/image-6.jpg')} alt="Benefits of touch typing" /> */}
            </div>
            <div className="section">
              <h2>Conclusion</h2>
              <p>
                Touch typing is an essential skill for anyone who spends a lot
                of time typing. By practicing proper hand placement, typing
                techniques, and using typing tutor software, you can improve
                your typing skills and enjoy the benefits of touch typing.
              </p>
              {/* <img src={require('./images/image-7.jpg')} alt="Conclusion" /> */}
            </div>
            <div className="section">
            <button className="btn">
              <span></span> It's time to get some practice
            </button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Learn;
