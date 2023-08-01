import React from 'react';
import Navbar from "../components/Navbar";
import SocialLinks from "../components/SocialLinks"
import Skills from "../components/Skills";
import Footer from "../components/Footer"
import Bgimg from "../components/Image";
import SkillsImg from "../assets/Skills.jfif"

const SkillsRoute = () => {
  return (
    <div>
      <Navbar />
      <SocialLinks />
      <Bgimg title="SKILLS" text="My Skills" img={SkillsImg}/>
      <Skills />
      <Footer />
    </div>
  )
}

export default SkillsRoute;