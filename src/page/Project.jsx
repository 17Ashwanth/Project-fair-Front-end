import React from 'react'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import { Col, Row } from 'react-bootstrap'

function Project() {
  return (
    <>
    <Header/>
    <div className="d-flex justify-content-center mt-5">
      <h1>All Project</h1>
    </div>
    <div className="d-flex justify-content-center mt-5 mb-5">
      <form action="">
        <input className='rounded border border-bold ps-2' type="text" placeholder='Search Using Techonolgies' /><button className='ms-3' style={{backgroundColor:'yellowgreen', borderRadius:'10px',borderColor:'yellowgreen'}}><i style={{color:'white'}} class="fa-solid fa-magnifying-glass p-1 fs-5 ms-2"></i></button>
      </form>
    </div>
    <Row className='container-fluid mb-5 mt-5'>
      <Col sm={12} md={6} lg={4}>
      <ProjectCard/>
      </Col>
    </Row>
    </>
  )
}

export default Project