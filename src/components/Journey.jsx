import React from 'react'
import seventh from '../images/7.png'
import eight from '../images/8.png'
import sixth from '../images/6.png'

const Journey = () => {
    return (
        <>
            <h2 className="my-20 text-pink-500 text-xl tracking-widest title-font mb-1 text-center">The Journey To Harry Potter</h2>
            <div className="box">
                <a className=" mx-2 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-20">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={seventh} alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-orange-300">The Initial Spark</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> <span className='font-black text-white'>The Vision : </span> Rowling saw the character of Harry Potter in her mind's eye: a skinny, bespectacled boy with a lightning-shaped scar on his forehead. <br /> <br />
                            <span className='font-black text-white'> The Setting:</span> She began to imagine Hogwarts, a magical school with moving staircases, talking portraits, and a host of intriguing characters.</p>
                    </div>
                </a>

                <a className="mx-2 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-20">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={eight} alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-orange-300 ">Developing The Story</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> <span className='font-black text-white'>Early Notes:</span> Without a working pen, Rowling mentally plotted the story during the train ride and wrote down her ideas as soon as she got home. These notes quickly evolved into the outlines of the seven books that would make up the series. <br /> <br />
                            <span className='font-black text-white'>Detailed Planning:</span>  Rowling spent the next five years planning the series. She created extensive backstories for each character, devised the rules of the magical world, and meticulously plotted the series' overarching storyline..</p>
                    </div>
                </a>
            </div>

            <h2 className="my-20 text-pink-500 text-xl tracking-widest title-font mb-1 text-center">Challenges She Faced To Get The Book Published</h2>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={sixth} alt="blog"/>
                                    <div className="p-6">
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Persoanl Struggles</h1>
                                        <p className="leading-relaxed mb-3"> <span className='font-black'>Loss of Her Mother:</span>  Rowling’s mother passed away from multiple sclerosis in December 1990, just six months after Rowling had conceived the idea of Harry Potter. This tragic event had a profound impact on her writing, infusing her work with deeper emotional themes. <br /> <br />
                                        <span className='font-black'>Financial Hardships:</span>  In the early 1990s, Rowling moved to Portugal to teach English. There, she married and had a daughter, but the marriage ended in divorce. Returning to the UK as a single mother, she struggled financially, relying on state benefits.</p>
                                        <div className="flex items-center flex-wrap ">
                                            <a className="text-red-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </svg>1.2K
                                            </span>
                                            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>6
                                            </span>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={seventh} alt="blog"/>
                                    <div className="p-6">
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Writing the Manuscript</h1>
                                        <p className="leading-relaxed mb-3"><span className='font-black'>First Drafts:</span>  Rowling wrote much of the first Harry Potter book in cafes in Edinburgh, while her infant daughter slept in a pram. She completed the manuscript on an old manual typewriter. <br /> <br />
                                        <span className='font-black'>Rejections:</span>  Rowling faced numerous rejections from publishers. The manuscript of "Harry Potter and the Philosopher's Stone" was rejected by 12 different publishing houses. Many felt the book was too long for children and doubted its marketability.</p>
                                        <div className="flex items-center flex-wrap">
                                            <a className="text-red-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </svg>1.2K
                                            </span>
                                            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>6
                                            </span>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={eight} alt="blog"/>
                                    <div className="p-6">
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Breakthrough</h1>
                                        <p className="leading-relaxed mb-3"><span className='font-black'>Acceptance:</span>  Finally, in 1996, Bloomsbury Publishing accepted her manuscript. The decision was influenced by Alice Newton, the eight-year-old daughter of Bloomsbury's chairman, who loved the first chapter and demanded to read the rest of the book. <br /> <br />
                                        <span className='font-black'>Initial Success: </span> The book was published in June 1997 with a modest print run of 1,000 copies, many of which were distributed to libraries. It quickly gained popularity through word-of-mouth..</p>
                                        <div className="flex items-center flex-wrap ">
                                            <a className="text-red-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </svg>1.2K
                                            </span>
                                            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>6
                                            </span>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Journey
