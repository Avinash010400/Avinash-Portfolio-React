import React from 'react';
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import "./About.css"

const About = () => {
  return (
    <div name="About" className='h-screen overflow-x-hidden bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Know Who I'M</p>
        </div>
        <p className='text-xl mt-20'>
          Hi Everyone, I am K Avinash from Berhampur,India.
          I am pursuing MERN Stack From Jspiders, Bengaluru.
        </p>
        <p className='text-xl mt-2'>
          My Skills are HTML, CSS, JavaScript, React.Js, and Redux.
        </p>
        <div className='text-xl mt-5'>
          <h3 className="details"><BsFillPersonFill /> <span>K Avinash</span></h3>
          <h3 className="details"><AiFillPhone />+91-8908130394</h3>
          <h3 className="details"><AiOutlineMail />kavinash010400@gmail.com</h3>
          <h3 className="details"><GoLocation />Bengaluru</h3>
        </div>
      </div>
    </div>
  )
}

export default About;