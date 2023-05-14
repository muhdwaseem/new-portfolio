import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {  FaHome, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'
import './footer.css'
function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
            <div className="location">
                <FaHome size={20} style={{color:'#fff'}}/>
                </div>    
                <div >
                   <p>Muhaisnah 4 ,Dubai</p>
                   <br />

                </div>
                <div className='phone'>
                <h4><FaPhone size={20} style={{color:"#fff",marginRight:'2rem'}}/>
                +917 554494600</h4>
                </div>
                <div className='mail'>
                <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:'2rem'}}/>
                waseemvann@gmail.com</h4>
                </div>
                
           
        
      </div>
      <div className="right">
        <h4>This is me waseem</h4>
        <p>I enjoy doing coding,Looking forward to do more projects</p>
      
      <div className="social">

       <a href='https://github.com/muhdwaseem'><AiFillGithub size={30} style={{color:'#fff',marginRight:'1rem'}}/></a> 
       <a href='https://www.linkedin.com/in/muhammed-waseem-a7061222a/' ><FaLinkedin size={30} style={{color:'#fff',marginRight:'1rem'}}/>

</a> 
      
 
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer
