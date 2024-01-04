import React from 'react'
import Card from 'react-bootstrap/Card';
import projectImg from '../assets/4882464.jpg'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';
import { BASE_URL } from '../services/baseurl';


function ProjectCard({project}) {

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    
    <Card className='shadow rounded btn' onClick={handleShow}>
      <Card.Img variant="top" src={project?`${BASE_URL}/uploads/${project.projectImage
}`:projectImg} />
      <Card.Body>
        <Card.Title style={{color:'yellowgreen'}}>{project.title}</Card.Title>
      </Card.Body>
    </Card>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
            <img src={project?`${BASE_URL}/uploads/${project.projectImage
}`:projectImg} style={{width:'100%'}} alt="" />
            </Col>
            <Col md={6}>
            <h1>{project.title}</h1>
            <p>{project.overview}</p>
            <p><b>{project.language}</b></p>
            </Col>
          </Row>
          <div className="d-flex">
            <a href={project.github} target='_blank'><i style={{color:'black'}} class="fa-brands fa-github fs-2 me-5"></i></a>
            <a href={project.website} target='_blank'><i style={{color:'black'}} class="fa-solid fa-link fs-2 me-2"></i></a>
          </div>
        </Modal.Body>
      </Modal>


    </>
  )
}

export default ProjectCard