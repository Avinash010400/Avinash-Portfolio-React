import React from 'react'

const Contact = () => {
    return (
        <div name="Contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Contact</p>
                    <p className='py-6'>Submit the form below to get in touch with me</p>
                </div>
                <div className='flex justify-center items-center'>
                    <form action="https://getform.io/f/56378e81-d365-4f91-ab7f-467b8aadd950" method="POST" className='flex flex-col w-full md:w-1/2'>
                        <input type="text" name='name' placeholder='Enter your name'
                            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                        <input type="email" name='email' placeholder='Enter your email'
                            className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                        <textarea name="message" rows="10"
                            placeholder='Enter your message'
                            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>

                        <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md
                        hover:scale-105 duration-300'>Let's talk</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;