import React from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div name="Home" className='h-screen overflow-x-hidden bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                        Hello World!
                        <br/>
                        I'm a Front-End Developer
                    </h2>
                    <div>
                        <Link to="Projects" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Projects
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineKeyboardArrowRight size={25}
                                    className='ml-1'
                                />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;