import React from 'react'
import Aboutcontent from '../components/Aboutcontent'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import Navbar from '../components/Navbar'

function About() {
  return (
    <div>
       <Navbar></Navbar>
       <Heroimg2 heading="about" text="I am always energetic and eager to learn new skills."/>
       <Aboutcontent/>
       <Footer/>
    </div>
  )
}
//I am always energetic and eager to learn new skills.
export default About
