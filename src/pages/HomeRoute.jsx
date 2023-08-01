import React from 'react'
import Navbar from '../components/Navbar';
import SocialLinks from "../components/SocialLinks"
import Main from "../components/Main"
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const HomeRoute = () => {
  return (
    <div>
        <Navbar/>
        <SocialLinks/>
        <Main/>
        <Projects/>
        <Footer/>
    </div>
  )
}

export default HomeRoute;