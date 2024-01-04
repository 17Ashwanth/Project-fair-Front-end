import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { isAuthTokenContext } from '../context/ContextShare'

function Header({dashboard}) {
  const navigate = useNavigate()
  const {isAuthenticated, setIsAuthenticated} = useContext(isAuthTokenContext)

  const handleLogout = ()=>{
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("existsUser")
    navigate('/')
    setIsAuthenticated(false)
  } 
  return (
    <>
    <div style={{backgroundColor:'yellowgreen'}} className='d-flex justify-content-between ps-3 p-1'>
    <div className='d-flex'>
      <i style={{color:'white'}} class= "fa-brands fa-stack-overflow fs-1 me-2 ms-5"></i>
      <h1 style={{color:'white'}} className='ms-3'>Project Fair</h1>
    </div>
    {dashboard &&
    <button onClick={handleLogout} className='btn btn-dark text-white me-3'>Logout<i style={{color:'white'}} class="fa-solid fa-power-off ms-2 fs-6"></i></button>
    }
    </div>
    
    </>
  )
}

export default Header