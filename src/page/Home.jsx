import React, { useContext, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import titleImage from '../assets/programmer_v_02.jpg'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'
import { homeProjectAPI } from '../services/allAPI'
import { isAuthTokenContext } from '../context/ContextShare'

function Home() {
    const {isAuthenticated, setIsAuthenticated} =useContext(isAuthTokenContext)
const [isLogin,setIsLogin] = useState(false)
const [homeProject,setHomeproject] = useState([])
    useEffect(()=>{
        if(sessionStorage.getItem("token")){
            setIsLogin(true)
        }
    },[])

    const getHomeProject = async()=>{
        const result = await homeProjectAPI()
        console.log(result.data);
        setHomeproject(result.data)
    }
    useEffect(()=>{
        getHomeProject()
    },[])

  return (
    <>
    <div style={{width:'100%',height:'100vh',backgroundColor:'yellowgreen'}}>
        <div className="container-fluid rounded">
           <Row className='align-items-center p-5'>
                <Col sm={12} md={6}>
                    <h1 style={{fontSize:'80px',color:'white'}}>Project Fair</h1>
                    <p>One Step Destiantion for all Software Devlopemnt Projects</p>
            {isLogin ?
            <Link to={'/dashboard'}>
                        <button onClick={()=>setIsAuthenticated(true)}  className='btn btn-dark rounded'>Manage project <i class="fa-solid fa-arrow-right 2s-3"></i> </button>
    
            </Link>:               
            <Link to={'/login'}>
                        <button  className='btn btn-dark rounded'>Get Started <i class="fa-solid fa-arrow-right 2s-3"></i> </button>
    
            </Link>}               
            </Col>
                <Col sm={12} md={6}>
                    <img src={titleImage} alt="no-imge" className='w-75' style={{marginTop:'100px'}}/>
                </Col>
           </Row>
        </div>


    </div>

    <div className="mt-5 all-project mb-5">
        <h1 className="text-center">Explore Our Projects</h1>
        <marquee scrollAmount={20} className='mt-5'>
            <div className="d-flex">
                {
                    homeProject?.length>0?
                    homeProject?.map((item)=>(<div className='ms-5' style={{width:'500px'}}>
                    <ProjectCard project={item}/>
                    </div>))
                    :null
                }
            </div>
        </marquee>

        <div className='text-center mt-5'>
           <button className='btn btn-dark' style={{borderRadius:'10px',border:'none'}}>
                <Link style={{textDecoration:'none',color:'white'}} to={'/project'}>See More Projects
                
                </Link>
           </button>
        </div>
    </div>
    </>
  )
}

export default Home