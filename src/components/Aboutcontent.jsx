import React from 'react'
import { useNavigate } from 'react-router-dom';
import './aboutconten.css';
import img1 from '../assets/luca-bravo-9l_326FISzk-unsplash.jpg'
import img2 from '../assets/ales-nesetril-Im7lZjxeLhg-unsplash.jpg'
function Aboutcontent() {
  let navi = useNavigate();
  return (
    <div className='about'>
        <div  className="left">
            <h1>Who am i?</h1>
            <p style={{paddingBottom:'10px'}}>ther is text present here </p>
             <button onClick={()=>navi('/contact')}  className='btn'>contact</button>
        </div>
        <div className="right">
          <div className="img-container">
            <div className="img-stack top">
              <img src={img1} className='img' alt=""  />
            </div>
            <div className="img-stack bottom">

              <img src={img2} alt="" />
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default Aboutcontent
