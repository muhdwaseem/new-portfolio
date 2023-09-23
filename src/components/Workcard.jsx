import React from 'react'
import './workcard.css'

import { Button, Card } from 'react-bootstrap'

function Workcard() {
const  details = [{content:"Netflix-clone",img:"https://images.unsplash.com/photo-1627873649417-c67f701f1949?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG5ldGZsaXh8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",links:"netflix-clone-new-orpin.vercel.app",source:"https://github.com/muhdwaseem/netflix-clone-new/tree/main/src"},
{content:"Drum-Kit",img:"https://images.unsplash.com/photo-1630348556264-52340da87359?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJ1bWtpdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",links:"",source:"https://github.com/muhdwaseem/drumkitapp"},
{content:"My-blog",img:"https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",links:"",source:"https://github.com/muhdwaseem/drumkitapp"},
{content:"cash-register",img:"https://images.unsplash.com/photo-1564986410613-97e0b371efe5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FzaCUyMHJlZ2lzdGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",links:"",source:"https://github.com/muhdwaseem/CASH-REGISTER"},

]


  return (
    <div className='work-container' >
        <h1 className='project-heading'>Projects</h1>
        <div className='project-container'>
      {
        details.map((val)=>{
            return (
<Card style={{ width: '18rem',margin:"1.5rem",border:"1px solid #fff",padding:"0.2rem" }}>
      <Card.Img  variant="top" src={val.img} className="cards" />
      <Card.Body>
        <Card.Title >Card Title</Card.Title>
        <Card.Text style={{padding:"10px",textAlign:'center',fontSize:'20px',fontWeight:'500',textTransform
      :'uppercase'}}>
         {val.content}
        </Card.Text>
        {/* <a href='/'><Button style={{margin:"10px"}} variant="primary" >View</Button> </a> */}
       <div style={{textAlign:'center'}}>
       <a href='/'> <Button style={{}} variant="primary" > source</Button></a>
       </div>
       
      </Card.Body>
    </Card>
            )
        })
      }
      </div>
    </div>
  )
}

export default Workcard
