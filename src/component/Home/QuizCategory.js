import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Quiz from "./quizApi.js";
import QuizCard from "./QuizCard";
import newCard from "./newCard.js";
import Pagination from "./Pagination";
import AllQuiz from "./AllQuiz"
import "./style.css";
import DropDown from "./DropDown.js";



const QuizCategory = () => {
  const [quizData, setQuizData] = useState(Quiz);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);
  let { category } = useParams();

  useEffect(() => {
    if (category === "All") {
      setQuizData(Quiz);
    } else {
      setQuizData(Quiz.filter((curElem) => {
        return curElem.category === category;
      }))
    }
  }, [category])

  function getMaxViewsId(quizData, prop) {
    var max;
    for (var i = 0; i < quizData.length; i++) {
      if (max == null || parseInt(quizData[i][prop]) > parseInt(quizData[max][prop]))
        max = i;
    }
    return max;
  }

  var idx;
  idx = getMaxViewsId(quizData, "views");

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentCards = quizData.slice(firstPostIndex, lastPostIndex);

  return (
    <>

      <div className="flex justify-start items-center">
       
      </div>
      <div className="container px-5 py-6 mx-auto " >

        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 mx-auto ">  {category} Quizzes</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded">

        </div>

        <QuizCard quizData={currentCards} />
        <Pagination
          totalPosts={quizData.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
        <h2>there is something to show <br></br></h2>

      </div>
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-sm">Copyright © 2022 Your Company</p>
          <div className="flex items-center">
            <a href="/#" className="text-white mr-4">Terms</a>
            <a href="/#" className="text-white">Privacy</a>
          </div>
        </div>
      </footer>



    </>
  )
}

export default QuizCategory;




