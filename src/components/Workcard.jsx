import React from 'react'
import './workcard.css'

// import { NavLink } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'
function Workcard() {
const  details = [{content:"To-Do App",img:"https://images.unsplash.com/photo-1602757115429-b4190ae087be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2plY3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
{content:"anything new",img:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fHByb2plY3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},

]


  return (
    <div className='work-container' >
        <h1 className='project-heading'>Projects</h1>
        <div className='project-container'>
      {
        details.map((val)=>{
            return (
<Card style={{ width: '18rem',margin:"3rem",border:"1px solid #fff",padding:"0.2rem" }}>
      <Card.Img  variant="top" src={val.img} className="cards" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text style={{padding:"10px"}}>
         {val.content}
        </Card.Text>
        <Button style={{margin:"10px"}} variant="primary">view</Button>
        <Button style={{}} variant="primary">source</Button>
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
