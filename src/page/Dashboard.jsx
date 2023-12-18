import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import Myproject from '../components/Myproject'
import Profile from '../components/Profile'

function Dashboard() {
 const [username, setUsername] = useState("")

 useEffect(()=>{
    setUsername(JSON.parse(sessionStorage.getItem("existsUser")).username)
 },[])

  return (
    <>
    <Header dashboard/>
    <div>
      <h2 className='mt-3 ms-3'>Welcome <span style={{color:'yellowgreen'}}>{username}</span></h2>
      <Row className='container-fluid mt-5 mb-5'>
        <Col md={8}>
          <Myproject/>
        
        </Col>
        <Col ms={4}>
        <Profile/>
        </Col>
      </Row>
    </div>
    </>
  )
}

export default Dashboard