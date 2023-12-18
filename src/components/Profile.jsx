import React from 'react'
import Form from 'react-bootstrap/Form';
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';



function Profile() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <div className='d-flex justify-content-between'>
        <h2 className='ms-3'>Profile</h2>
        <button onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className='btn btn-dark text-white me-3'><i class="fa-solid fa-arrow-up-from-bracket fa-rotate-180 fs-6  p-1"></i></button>
        </div>
        <Collapse in={open}>

       <div id="example-collapse-text" >
          <div className="d-flex justify-content-center align-items-center mt-4 flex-column">
              <label htmlFor="profile">
                  <input type="file" id='profile' style={{display:'none'}} />
                  <img src="https://s.pngkit.com/png/small/11-116810_man-finance-online-svg-person-icon-woman-png.png" alt="no-image" width={'200px'} height={'200px'} className='rounded-circle' />
              </label>
              <div className="mb-3 mt-5">
                          <Form.Group style={{width:'100%'}} className=" ms-4 mb-3" controlId="exampleForm.ControlInput1">
                           <Form.Control type="email" placeholder="Enter Your Username" />
                          </Form.Group>
                          <Form.Group style={{width:'100%'}} className=" ms-4 mb-3" controlId="exampleForm.ControlInput1">
                           <Form.Control type="email" placeholder="Enter Your Username" />
                          </Form.Group>
                          <button className='btn btn-dark rounded w-100 ms-4'>UPDATE</button>
              </div>
          </div>
       </div>
        </Collapse>
    </>
  )
}

export default Profile