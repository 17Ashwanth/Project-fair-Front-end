import React from 'react'
import Card from 'react-bootstrap/Card';
import projectImg from '../assets/4882464.jpg'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';


function ProjectCard() {

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    
    <Card className='shadow rounded btn' onClick={handleShow}>
      <Card.Img variant="top" src={projectImg} />
      <Card.Body>
        <Card.Title style={{color:'yellowgreen'}}>Project Holder</Card.Title>
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
            <img src={ projectImg} style={{width:'100%'}} alt="" />
            </Col>
            <Col md={6}>
            <h1>Project Title</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam molestias veritatis tempora totam placeat nemo, eveniet porro voluptas? Debitis explicabo maxime repudiandae labore neque error, a nisi modi quod officiis.</p>
            <p><b>Language Used : HTML,CSS,React</b></p>
            </Col>
          </Row>
          <div className="d-flex">
            <a href=""><i style={{color:'black'}} class="fa-brands fa-github fs-2 me-5"></i></a>
            <a href=""><i style={{color:'black'}} class="fa-solid fa-link fs-2 me-2"></i></a>
          </div>
        </Modal.Body>
      </Modal>


    </>
  )
}

export default ProjectCard