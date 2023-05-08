import React from 'react'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import Navbar from '../components/Navbar'

function Contact() {
  return (
    <div>
   <Navbar/>
   <Heroimg2 heading="contact" text='Lets have chat!'/>
   {/* <Form/> */}
   <Footer/>
    </div>
  )
}

export default Contact
