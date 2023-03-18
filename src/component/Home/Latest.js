import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import Quiz from "./quizApi.js";

const uniqueList = [
    ...new Set(
        Quiz.map((curElem) => {
            return curElem.category;
        })
    ),
    "All",
];

const Latest = () => {
    const [quizData, setQuizData] = useState(Quiz);
    const [categoryList, setCategoryList] = useState(uniqueList);

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
    return (

        <div>

            {/* <Hero /> */}
            {/* <Identity /> */}


            <div className="mx-auto mt-20">


                {/* <Navbar /> */}
                {/* <Dropdown/> */}
                <div className="flex justify-center items-center">
                    <div className="container px-5 py-6 mx-auto" >
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 mx-auto  ">Latest Quizzes</h1>
                        {/* <div className="h-1 w-20 bg-indigo-500 rounded mx-auto"></div> */}
                        <Carousel responsive={responsive} infinite={false}
                            focusOnSelect={true}

                            itemClass="carousel-item-padding-40-px mx-auto" >
                            {quizData.map((curElem, index) => {
                                const { image, category, name } = curElem;
                                return (
                                    <div className="container my-12 mx-auto px-4 md:px-12" key={index} >

                                        <Link to={`/quizzes/${category}/${name}`}>
                                            {/* <div className="bg-white rounded-lg overflow-hidden shadow-lg border-2 border-gray-300 rounded-lg">
                  <img className="h-48 w-full object-cover" src={image} alt="content" />
                  <div className="p-6">
                    <h2 className="text-lg font-medium text-gray-900 title-font mb-2">{name}</h2>
                    <p className="text-gray-600">{category}</p>
                  </div>
                </div> */}
                                            {/* <!-- Article --> */}
                                            <article class="overflow-hidden rounded-lg shadow-lg">

                                                <a href="#">
                                                    <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                                                </a>

                                                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                                                    <h1 class="text-lg">
                                                        <a class="no-underline hover:underline text-black" href="#">
                                                            {name}
                                                        </a>
                                                    </h1>
                                                    {/* <p class="text-grey-darker text-sm">
                      11/1/19
                    </p> */}
                                                </header>

                                                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                                                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                                                        {/* <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random" /> */}
                                                        <p class="ml-2 text-sm">
                                                            {category}
                                                        </p>
                                                    </a>
                                                    <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                                                        <span class="hidden">Like</span>
                                                        <i class="fa fa-heart"></i>
                                                    </a>
                                                </footer>

                                            </article>
                                            {/* <!-- END Article --> */}


                                        </Link>
                                    </div>
                                )
                            })}

                        </Carousel>;
                        {/* <Latest/> */}
                        {/* <Carousel cards={quizData} /> */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Latest
