import React from 'react';
import Navbar from "../components/Navbar";
import SocialLinks from "../components/SocialLinks"
import Contact from "../components/Contact";
import Footer from "../components/Footer"
import Bgimg from "../components/Image";
import ContactImg from "../assets/Contact.jpg"

const ContactRoute = () => {
  return (
    <div>
      <Navbar />
      <SocialLinks />
      <Bgimg title="CONTACT ME" text="Lets have a Chat" img={ContactImg} style={{color:"black"}}/>
      <Contact />
      <Footer />
    </div>
  )
}

export default ContactRoute