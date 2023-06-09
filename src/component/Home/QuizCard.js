import React from "react";
import { Link } from 'react-router-dom';
import "./quizcard.css";
import Pagination from "./Pagination";
// import "./cards.css";



const QuizCard = ({ quizData }) => {
  console.log(quizData);



  return (

    <>
      <div class="container my-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">


          {quizData.map((item, index) => {
            const { image, category, name } = item;
            return <>
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" key={index}>


<article class="overflow-hidden rounded-lg shadow-lg">

  <a href="#">
    <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
  </a>

  <header class="flex items-center justify-between leading-tight p-2 md:p-4">
    <h1 class="text-lg">
      <a class="no-underline hover:underline text-black" href="#">
        {item.name}
      </a>
    </h1>
    <p class="text-grey-darker text-sm">
      11/1/19
    </p>
  </header>

  <footer class="flex items-center justify-between leading-none p-2 md:p-4">
    <a class="flex items-center no-underline hover:underline text-black" href="#">

      <p class="ml-2 text-sm">
        {item.category}
      </p>
    </a>
    <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
      <span class="hidden">Like</span>
      <i class="fa fa-heart"></i>
    </a>
  </footer>

</article>


</div>



            </>
            
            



          })}


        </div>
      </div>


    </>
  );
};

export default QuizCard;
