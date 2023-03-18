import React from 'react'
import { Link } from 'react-router-dom';

const newCard = ({ quizData }) => {
    return (
        <div>
            {quizData.map((curElem, index) => {
                const { image, category, name } = curElem;
                return (
                    <div className="container my-12 mx-auto px-4 md:px-12" key={index} >
                        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
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
                                        <p class="text-grey-darker text-sm">
                                            11/1/19
                                        </p>
                                    </header>

                                    <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                                        <a class="flex items-center no-underline hover:underline text-black" href="#">
                                            <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random" />
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
                    </div>
                )
            })}
        </div>
    )
}

export default newCard
