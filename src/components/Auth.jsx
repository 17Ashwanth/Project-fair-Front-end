import React, { useContext, useState } from 'react'
import { Link, json, useNavigate } from 'react-router-dom'
import auth from '../assets/655.jpg'
import Header from './Header'
import Form from 'react-bootstrap/Form';
import { loginAPI, registerAPI } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isAuthTokenContext } from '../context/ContextShare';


function Auth({register}) {

    const {isAuthenticated, setIsAuthenticated} = useContext(isAuthTokenContext)

    const [userData, setUserData] = useState({
        username:"",
        email:"",
        password:""
})
/* console.log(userData);
 */
//for navigation
const navigate = useNavigate()

// function to register
const handleRegister = async(e)=>{
    e.preventDefault()
    const {username,email,password}= userData
    if(!username || !email || !password){
        toast.info("Please Fill The Form Completely")
    }
    else
    {
      const result= await registerAPI(userData)
      console.log(result);
      if(result.status===200)
      {
        toast.success(`${result.data.username} Registerd Succesfully`)
        setUserData({username:"",email:"",password:""})
        navigate('/login')
      }
      else
      {
        toast.warning(`${result.response.data}`)
      }
    }
}

// function to login

const handleLogin = async(e)=>{
    e.preventDefault()

    const {email,password}= userData
    if(!email || !password){
        toast.info(`please fill the form completely`)
    }
    else
    {
        const result = await loginAPI(userData)
        console.log(result);

        if(result.status===200){
            setIsAuthenticated(true)
            //store data
            // in session storage key:string, value:string
            sessionStorage.setItem("existsUser",JSON.stringify(result.data.existsUser))
            sessionStorage.setItem("token",result.data.token)

            toast.success('login successfull!')

            setUserData({
                username: "",
                email: "",
                password:""
            })
            setTimeout(()=>{
                navigate('/')
            },2500)
            
        }
        else
        {
            toast.warning(result.response.data)
        }
    }
    
}

    const RegisterForm = register?true:false
  return (
    <>
    <Header/>
    <div className='d-flex justify-content-center align-items-center'>
    <Link to={'/'}> <button  className='btn btn-dark rounded mt-5 mb-5'><i class="fa-solid fa-arrow-left 2s-3"></i> Back to Home</button></Link>  
    </div>
    <div style={{backgroundColor:'yellowgreen'}} className="w-75 container rounded p-5 mb-5">
        <div className="row align-items-center">
            <div className="col-lg-6">
                <img src={auth} style={{width:'100%'}} alt="" />
            </div>
            <div className="col-lg-6">
                <div className="d-flex align-items-center justify-content-center flex-column">
                    <h1 className="text-light"> <i style={{color:'white'}} class= "fa-brands fa-stack-overflow fs-1 me-2 ms-5"></i>Project Fair</h1>
                    <h5 className="text-light ms-5 mt-4 mb-4">
                        {
                            RegisterForm? "Sign up to your Account":"Sign in to your Account"
                        }
                    </h5>
                    <Form>

                        {RegisterForm&& <Form.Group style={{width:'100%'}} className=" ms-4 mb-3" controlId="exampleForm.ControlInput1">
                         <Form.Control value={userData.username} onChange={(e)=>setUserData({...userData,username:e.target.value})} type="email" placeholder="Enter Your Username" />
                        </Form.Group>}

                        <Form.Group style={{width:'100%'}} className=" ms-4 mb-3" controlId="exampleForm.ControlInput1">
                         <Form.Control value={userData.email} onChange={(e)=>setUserData({...userData,email:e.target.value})} type="email" placeholder="Enter Your Email ID" />
                        </Form.Group>

                        <Form.Group style={{width:'100%'}} className=" ms-4 mb-3" controlId="exampleForm.ControlInput1">
                         <Form.Control value={userData.password} onChange={(e)=>setUserData({...userData,password:e.target.value})} type="password" placeholder="Enter Your Password" />
                        </Form.Group>
                        {RegisterForm?
                        <div>
                            <button onClick={handleRegister} className='btn btn-dark mt-4'>REGISTER</button>
                            <p className='text-light mt-2'>Already User? Click Here to <Link style={{textDecoration:'none', color:'white'}} to={'/login'}>Login</Link></p>
                        </div>
                            :
                            <div>
                            <button onClick={handleLogin} className='btn btn-dark mt-4'>LOGIN</button>
                            <p className='text-light mt-2'>New User? Click Here to <Link style={{textDecoration:'none', color:'white'}} to={'/register'}>Register</Link></p>
                        </div>
                        }
                     </Form>
                     
                       
                </div>
            </div>
        </div>
    </div>
    <ToastContainer theme='colored' autoClose={3000} position='top-center' />
    </>
  )
}

export default Auth