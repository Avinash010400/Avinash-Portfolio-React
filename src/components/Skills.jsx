import React from 'react';
import html from "../assets/html.png";
import css from "../assets/css.png";
import bootstrap from "../assets/Bootstrap_logo.png";
import tailwind from "../assets/tailwind.png";
import javascript from "../assets/javascript.png";
import reactimg from "../assets/react.png";
import redux from "../assets/Redux.png"
import github from "../assets/github.png";

const Skills = () => {
    const skills = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500"
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-300"
        },
        {
            id: 3,
            src: bootstrap,
            title: "Bootstrap",
            style: "shadow-blue-500"
        },
        {
            id: 4,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-sky-400"
        },
        {
            id: 5,
            src: javascript,
            title: "JavaScript",
            style: "shadow-yellow-500"
        },
        {
            id: 6,
            src: reactimg,
            title: "React",
            style: "shadow-sky-300"
        },
        {
            id: 7,
            src: redux,
            title: "Redux",
            style: "shadow-indigo-500"
        },
        {
            id: 8,
            src: github,
            title: "GitHub",
            style: "shadow-gray-400"
        }
    ]

    return (
        <div name="Skills" className='bg-gradient-to-b from-gray-800 to-black w-full'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Skills</p>
                    <p className='py-6'>Thes are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {
                        skills.map(({ id, src, title, style }) => {
                            return (
                                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                    <img src={src} alt="" className='w-20 mx-auto' />
                                    <p className='mt-4'>{title}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills;