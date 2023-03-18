import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
// import AllQuiz from "./component/Home/AllQuiz";
import QuizCard from "./component/Home/QuizCard";
import QuizCategory from "./component/Home/QuizCategory";
import HomePage from "./component/Home/HomePage";
import StartQuiz from "./component/Unused/StartQuiz";

// import DropDown from "./component/Home/DropDown";
// import Navbar from "./component/Unused/Navbar";
// import Navbar1 from "./component/Home/Navbar1";
import Hero from "./component/Home/Hero";
// import Dropdown from "./component/Home/Dropdown";
// import Navbar from "./component/Home/Navbar";
import newQuizCategory from "./component/Home/newQuizCategory";
// import footer from "./component/Home/Footer";
import Footer from "./component/Home/Footer";
import Categories from "./component/Home/Categories";
import Second from "./component/Home/Second";


const App = () => {
  return (<>
    {/* <AllQuiz/> */}
    
    {/* <Dropdown/> */}
    {/* <Navbar1/> */}
    <Categories/>
    <Hero/>
  
  <Routes>
    <Route exact path = '/' element = {<HomePage />} />
  <Route exact path="/quizzes/:category"  element = {<QuizCategory/>} />
  <Route exact path="/quizzes/:category/:name"  element = {<StartQuiz />} />
  </Routes>
    
  <Footer />
    </>
    
  )
};

export default App;


