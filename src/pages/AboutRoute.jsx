import React from 'react';
import Navbar from '../components/Navbar';
import SocialLinks from "../components/SocialLinks"
import Footer from '../components/Footer';
import About from "../components/About";
import Bgimg from "../components/Image"
import AboutImg from "../assets/About_me.jfif"

const AboutRoute = () => {
  return (
    <div>
      <Navbar />
      <SocialLinks />
      <Bgimg title="ABOUT ME" text="I'm a Front End Devloper" img={AboutImg}/>
      <About />
      <Footer />
    </div>
  )
}

export default AboutRoute;