import React, { useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';
import { BASE_URL } from '../services/baseurl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editProfileAPI } from '../services/allAPI';



function Profile() {
  const [open, setOpen] = useState(false);

  const [userProfile, setUserProfile]= useState({
    username:"",
    email:"",
    password:"",
    github:"",
    linkedin:"",
    profile:""

  })
  const [isUpdate,setIsUpdate] = useState(false)
  // once an image is uploaded then taht image will be stored in exsiting image
  const [existingImage,setExistingImage]=useState("")
  // to hold the url of the new image
  const [preview,setpreview]= useState("")

  useEffect(()=>{
    const user = JSON.parse(sessionStorage.getItem("existsUser"))

    setUserProfile({...userProfile,username:user.username,email:user.email,password:user.password,github:user.github,linkedin:user.linkedin,profile:""})

    setExistingImage(user.profile)

  },[isUpdate])

  useEffect(()=>{
    if(userProfile.profile){
      setpreview(URL.createObjectURL(userProfile.profile))
    }
    else
    {
      setpreview("")
    }
  },[userProfile.profile])

  const handleProfileUpdate = async()=>{
    const {username,email,password,github,linkedin,profile}=userProfile

    if(!github || !linkedin)
    {
      toast.info("Please fill the form compltely")
    }
    else
    {
      const reqBody = new FormData()
      reqBody.append("username",username)
      reqBody.append("email",email)
      reqBody.append("password",password)
      reqBody.append("github",github)
      reqBody.append("linkedin",linkedin)
      preview?reqBody.append("profile",profile):reqBody.append("profile",existingImage)

      const token = sessionStorage.getItem("token")
    if(preview){
      const reqHeader = {
        "Content-Type" : "multipart/form-data",
        "Authorization" :`Bearer ${token}`
      }
      const result = await editProfileAPI(reqBody,reqHeader)
      console.log(result);
      if(result.status === 200){
        toast.success("Profile Updated Succesfully!")
        sessionStorage.setItem("existsUser",JSON.stringify(result.data))
        setIsUpdate(true)
      }
      else{
        console.log(result.response.data);
      }
    }
    else{
      const reqHeader = {
        "Content-Type" : "application/json",
        "Authorization" :`Bearer ${token}`
      }
      const result = await editProfileAPI(reqBody,reqHeader)
      console.log(result);
      if(result.status === 200){
        toast.success("Profile Updated Succesfully!")
        sessionStorage.setItem("existsUser",JSON.stringify(result.data))
        setIsUpdate(true)
    }
    else
    {
      console.log(result.response.data);
    }
    }
  }
}


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
                  <input onChange={(e)=>setUserProfile({...userProfile,profile:e.target.files[0]})} type="file" id='profile' style={{display:'none'}} />
                  {existingImage==""?
                  <img src={preview?preview:"https://s.pngkit.com/png/small/11-116810_man-finance-online-svg-person-icon-woman-png.png"} alt="no-image" width={'200px'} height={'200px'} className='rounded-circle' />:
                  <img src={preview?preview:`${BASE_URL}/uploads/${existingImage}`} alt="no-image" width={'200px'} height={'200px'} className='rounded-circle' />}
              </label>
              <div className="mb-3 mt-5">
                          <Form.Group style={{width:'100%'}} className=" ms-4 mb-3" controlId="exampleForm.ControlInput1">
                           <Form.Control value={userProfile.github} onChange={(e)=>setUserProfile({...userProfile,github:e.target.value})} type="email" placeholder="GitHub" />
                          </Form.Group>
                          <Form.Group style={{width:'100%'}} className=" ms-4 mb-3" controlId="exampleForm.ControlInput1">
                           <Form.Control value={userProfile.linkedin} onChange={(e)=>setUserProfile({...userProfile,linkedin:e.target.value})} type="email" placeholder="Linkedin" />
                          </Form.Group>
                          <button onClick={handleProfileUpdate} className='btn btn-dark rounded w-100 ms-4'>UPDATE</button>
              </div>
          </div>
       </div>
        </Collapse>
        <ToastContainer theme='colored' autoClose={3000} position='top-center' />
    </>
  )
}

export default Profile