import React from 'react';
import course from "../assets/projects/course.PNG";
import amazone from "../assets/projects/amazone-ui.PNG";
import travel from "../assets/projects/travel.PNG";
import zomato from "../assets/projects/zomato-ui.PNG";


const Projects = () => {

    const projects = [
        {
            id: 1,
            src: zomato,
            link:"https://react-zomato-ui.vercel.app/"
        },
        {
            id: 2,
            src: amazone,
            link:"https://react-amazon-ui.vercel.app/"
        },
        {
            id: 3,
            src: course,
            link:"https://sourav-react-course.vercel.app/"
        },
        {
            id: 4,
            src: travel,
            link:"https://sourav-react-travel.vercel.app/"
        }
    ]

    const clickHandler=(link)=>{
        window.location.href=link;
    }
    
    return (
        <div name="Projects" className='bg-gradient-to-b from-black to-gray-800 w-full text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
                    <p className='py-6'>Check out some of my recent work</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        projects.map(({id, src,link}) => {
                            return (
                                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                    <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                                    <div className='flex items-center justify-center'>
                                        <button onClick={()=>clickHandler(link)} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>View</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects;