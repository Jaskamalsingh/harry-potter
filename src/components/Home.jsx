import React, { useState, useEffect } from 'react';
import jk from '../images/1813349.jpg';
import jk1 from '../images/1813350.jpg';
import jk2 from '../images/1813354.jpg';
import jk3 from '../images/1813382.jpg';
import jk4 from '../images/1813392.jpg';
import one from '../images/1.png'
import second from '../images/2.png'
import third from '../images/3.png'
import fourth from '../images/4.png'
import fifth from '../images/5.png'
import sixth from '../images/6.png'
import seventh from '../images/7.png'
import eight from '../images/8.png'


const Home = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const images = [jk, jk1, jk2, jk3, jk4];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    const goToSlide = (index) => {
        setActiveIndex(index);
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <>
            <div className="flex justify-center mt-20">
                <div id="default-carousel" className="relative w-1/2" data-carousel="slide">
                    <div className="relative h-96 overflow-hidden rounded-lg md:h-96 ">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={`absolute h-96 duration-700 ease-in-out w-full h-full ${index === activeIndex ? 'block' : 'hidden'}`}
                                data-carousel-item={index}
                            >
                                <img src={image} className="block w-full  object-cover" alt={`Slide ${index + 1}`} style={{ "height": "600px" }} />
                            </div>
                        ))}
                    </div>

                    <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-blue-600' : 'bg-white'}`}
                                aria-current={index === activeIndex ? 'true' : 'false'}
                                aria-label={`Slide ${index + 1}`}
                                onClick={() => goToSlide(index)}
                            ></button>
                        ))}
                    </div>

                    <button
                        type="button"
                        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                        onClick={prevSlide}
                        data-carousel-prev
                    >
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
                            <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                            </svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button
                        type="button"
                        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                        onClick={nextSlide}
                        data-carousel-next
                    >
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
                            <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>
            </div>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">J.K. Rowling's Past</h1>
                            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Joanne Rowling, better known by her pen name J.K. Rowling, was born on July 31, 1965, in Yate, Gloucestershire, England. Here's a detailed look at her early life and education</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-100 p-6 rounded-lg">
                                <img className="h-40 rounded w-full object-cover object-center mb-6" src={jk1} alt="content" />
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Childhood & Family</h3>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Daughter of Peter James Rowling</h2>
                                <p className="leading-relaxed text-base"> <span className='font-black'> Parents : </span> J.K. Rowling is the daughter of Peter James Rowling, a Rolls-Royce aircraft engineer, and Anne Rowling, a science technician. She has one younger sister, Dianne. <br />
                                    <span className='font-black'>Early Interests : </span> From a young age, Rowling showed a keen interest in storytelling. She would often write fantasy stories, which she would read to her sister.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-100 p-6 rounded-lg">
                                <img className="h-40 rounded w-full object-cover object-center mb-6" src={jk4} alt="content" />
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Education</h3>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">St Michael's Primary School</h2>
                                <p className="leading-relaxed text-base"> <span className='font-black'>Primary School:</span>  Rowling attended St Michael's Primary School, where her headmaster, Alfred Dunn, is believed to have inspired the character of Albus Dumbledore. <br />
                                    <span className='font-black'>Secondary School:</span>  She went to Wyedean School and College. Here, she was described as a "quiet" and "unassuming" student who loved reading and writing. <br />
                                    <span className='font-black'>Early Writing:</span>  During her teenage years, she wrote her first novel, which was never published but was an important step in her development as a writer.I</p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-100 p-6 rounded-lg">
                                <img className="h-40 rounded w-full object-cover object-center mb-6" src={jk2} alt="content" />
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Higher Education</h3>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">University of Exeter</h2>
                                <p className="leading-relaxed text-base"> <span className='font-black'>University:</span>  Rowling attended the University of Exeter, where she studied French and the Classics. The curriculum included one year in Paris. <br />
                                    <span className='font-black'>Challenges:</span>  During her time at university, she faced various personal challenges, including the death of her mother in 1990 due to multiple sclerosis. This event had a profound impact on her and influenced her writing, particularly in the Harry Potter series.
                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-100 p-6 rounded-lg">
                                <img className="h-40 rounded w-full object-cover object-center mb-6" src={jk3} alt="content" />
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Post Graduation</h3>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Researcher and bilingual secretary for Amnesty International</h2>
                                <p className="leading-relaxed text-base"> <span className='font-black'>Early Career:</span>  After graduating, Rowling moved to London to work as a researcher and bilingual secretary for Amnesty International. It was during this period that she began to conceive the idea of a young boy attending a school for wizards.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <h3 className="text-pink-500 text-xl tracking-widest title-font mb-1 text-center">Harry Potter All Volumes</h3>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={one} />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">2001</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">Harry Potter and the Philosopher's Stone</h2>
                                <p className="mt-1">🌟 7.6</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={second} />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">2002</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">Harry Potter and the Chamber of Secrets</h2>
                                <p className="mt-1">🌟 7.4</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={third} />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">2004</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">Harry Potter and the Prisoner of Azkaban</h2>
                                <p className="mt-1">🌟 7.9</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={fourth} />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">2005</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">Harry Potter and the Goblet of Fire</h2>
                                <p className="mt-1">🌟 7.7</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={fifth} />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">2007</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">Harry Potter and the Order of the Phoenix</h2>
                                <p className="mt-1">🌟 7.5</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={sixth} />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">2009</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">Harry Potter and the Half-Blood Prince
                                </h2>
                                <p className="mt-1">🌟 7.6</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={seventh} />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">2010</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">Harry Potter and the Deathly Hallows: Part 1</h2>
                                <p className="mt-1">🌟 7.7</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={eight} />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">2011</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">Harry Potter and the Deathly Hallows: Part 2</h2>
                                <p className="mt-1">🌟 8.1</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
};

export default Home;
