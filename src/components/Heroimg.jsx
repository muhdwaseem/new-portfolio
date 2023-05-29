import React from 'react'
import './heroimg.css'
import introimg from '../assets/pexels-annam-w-1120162.jpg'
import { Link } from 'react-router-dom'

function Heroimg() {
  return (
    <div className='hero'>
    <div className='mask'>
      <img className='into-img' src={introimg} alt="" srcset="" />
      </div>
      <div className="content">
        <p>hello! </p>
        <h3>I am Muhammed Waseem</h3>
        <h1>Web Developer</h1>
        <div>
            <Link to={'/project'} className='btn'>Projects
            </Link>
            <Link to={'/contact'} className='btn btn-light'>Contact
            </Link>
        </div>
      </div>
    
    </div>
  )
}

export default Heroimg
