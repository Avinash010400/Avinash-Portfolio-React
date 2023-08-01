import React from 'react'
import Navbar from "../components/Navbar"
import SocialLinks from "../components/SocialLinks"
import Projects from "../components/Projects"
import Footer from "../components/Footer"
import Bgimg from "../components/Image";
import ProjectImg from "../assets/Projects.jfif"

const ProjectsRoute = () => {
  return (
    <div>
      <Navbar />
      <SocialLinks />
      <Bgimg title="PROJECTS" text="Check out some of my work right here" img={ProjectImg}/>
      <Projects />
      <Footer />
    </div>
  )
}

export default ProjectsRoute;