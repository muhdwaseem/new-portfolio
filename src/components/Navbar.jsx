import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import {FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {
    const [click, setclick] = useState(false)
    const handleclick=()=>{
        setclick(!click)
    }
    const [color, setcolor] = useState(false)
    const  changecolor=()=>{
        if(window.scrollY>=100){
            setcolor(true)
        }
        else{
            setcolor(false)
        }
    }
    window.addEventListener('scroll',changecolor)
  return (
    <div className={color ?  'header header-bg' : 'header'}>
      <Link to={'/'}>
       <h1> Portfolio</h1>
      </Link>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
        <Link to={'/'}>
        Home
      </Link>
        </li>
      <li>
      <Link to={'/about'}>
        About
      </Link>
      </li>
     <li>
     <Link to={'/project'}>
        Projects
      </Link>
     </li>
      <li>
      <Link to={'/contact'}>
        Contact
      </Link>
      </li>
     </ul>
     <div className='hamburg' onClick={handleclick}>
        {
            click ? ( <FaTimes size={20} style={{color:'#fff'}}></FaTimes>):
            ( <FaBars size={20} style={{color:'#fff'}}/>)
        }
       
       

     </div>
    </div>
  )
}

export default Navbar
