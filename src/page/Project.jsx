import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import { Col, Row } from 'react-bootstrap'
import { allProjectAPI } from '../services/allAPI'
import { Link } from 'react-router-dom'

function Project() {
  const [isToken, setisToken]= useState(false)
  const [searchKey,setSearchkey] = useState('')
  const [allProject,setAllProject]= useState([])
  const getAllProject = async()=>{
    if(sessionStorage.getItem("token"))
    {
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type" : "application/json",
        "Authorization" :`Bearer ${token}`
      }
      const result = await allProjectAPI(searchKey, reqHeader)
      console.log(result);
      if(result.status === 200)
      {
        setAllProject(result.data)
      }
      else
      {
        console.log(result.response.data);
      }
    }
  }
  console.log(allProject);
  console.log(searchKey);
  useEffect(()=>{
    getAllProject()
  },[searchKey])

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setisToken(true)
    }
  })

  return (
    <>
    <Header/>
    <div className="d-flex justify-content-center mt-5">
      <h1>All Project</h1>
    </div>
    <div className="d-flex justify-content-center mt-5 mb-5">
      <form action="">
        <input value={searchKey} onChange={(e)=>setSearchkey(e.target.value)} className='rounded border border-bold ps-2' type="text" placeholder='Search Using Techonolgies' /><button className='ms-3' style={{backgroundColor:'yellowgreen', borderRadius:'10px',borderColor:'yellowgreen'}}><i style={{color:'white'}} class="fa-solid fa-magnifying-glass p-1 fs-5 ms-2"></i></button>
      </form>
    </div>
    <Row className='container-fluid mb-5 mt-5'>
      { allProject?.length>0?
      allProject?.map((item)=>(<Col sm={12} md={6} lg={4}>
        <ProjectCard project ={item}/> 
        </Col>))
      : <div>
        {isToken? 
        <p className='text-center fs-3 text-danger'>Sorry no projects currently available</p>:
        <div className='d-flex justify-content-center align-items-center flex-column'>
        <img src="https://cdn.pixabay.com/animation/2023/06/13/15/12/15-12-30-710_512.gif" height={'200px'} width={'200px'} alt="" />
         <p className='fs-3 mt-4 text-danger'>Please<Link style={{textDecoration:'none',color:'blue'}} to={'/login'}>login</Link>to see more project</p> 
      </div>}
      </div>
}

    </Row>
    </>
  )
}

export default Project