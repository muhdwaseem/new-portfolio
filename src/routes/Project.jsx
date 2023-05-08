import React from 'react'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import Navbar from '../components/Navbar'
import Workcard from '../components/Workcard'

function Project() {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="projects" text="Some of the my best works"  />
      <Workcard/>
      <Footer/>

    </div>
  )
}

export default Project
