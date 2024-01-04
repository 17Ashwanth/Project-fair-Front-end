import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addProjectAPI } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addProjectResponseContext, editProjectResponseContext } from '../context/ContextShare';

function AddProject() {


// useContext hook is used to access the context
  const {addProjectResponse, setAddProjectResponse} = useContext(addProjectResponseContext)

    // state to hold values from input box
    const [projectDetails, setProjectDetails]=useState({
        title:"",
        language:"",
        github:"",
        website:"",
        overview:"",
        projectImage:""
    })

    //display state
    console.log(projectDetails);

    const [show, setShow] = useState(false);

    // state to hold the url of the file
    const [ preview, setPreview]=useState("")

    //state to hold token
    const [token,seToken] = useState("")

    useEffect(()=>{
      if(sessionStorage.getItem("token")) 
        {
          seToken(sessionStorage.getItem("token"))
        }
    },[])

    useEffect(()=>{
    if(projectDetails.projectImage)
    {
        setPreview(URL.createObjectURL(projectDetails.projectImage))//URL is predefined method in javasxript which has createObjectURL method which can convert file into url
    } 

    },[projectDetails.projectImage])
    console.log(preview);


    const handleClose = () => {
        setShow(false)
        handleClosed()
        
    }

    const handleClosed =()=>{
        setProjectDetails({
            title:"",
            language:"",
            github:"",
            website:"",
            overview:"",
            projectImage:""
        })
        setPreview("")
    }

    
    const handleShow = () => setShow(true);
  
    //function to add project

    const handleAdd = async (e)=>{
        e.preventDefault();
        const {title,
        language,
        github,
        website,
        overview,
        projectImage}= projectDetails

        if(!title || !language || !github || !website || !overview || !projectImage){
            alert("Please fill out all fields.")
        }
        else
        {
          // reqbody

          //1) create an object of form data class since we have uploaded contnet
          const reqBody = new FormData()
 
          //2) add data - append() --can add only single item.
          reqBody.append("title",title)
          reqBody.append("language",language)
          reqBody.append("github",github)
          reqBody.append("website",website)
          reqBody.append("overview",overview)
          reqBody.append("projectImage",projectImage)

          //reqHeader
          if(token)
          {
            const reqHeader = {
              "Content-Type" : "multipart/form-data",
              "Authorization" :`Bearer ${token}`
            }

            const result = await addProjectAPI(reqBody,reqHeader)
            console.log(result);
            if(result.status === 200)
            { console.log(result);
              toast.success("Project Added Succesfully");
              handleClose()
              setAddProjectResponse(result.data)
            }
            else
            {
              toast.error('Failed to Add Project',result.response.data)
              handleClosed()
            }
  
          }
          
            
        }
    }

  return (
    <>
    <Button variant="success" onClick={handleShow}>
      Add Project
    </Button>

    <Modal show={show} onHide={handleClose} size='lg'>
      <Modal.Header closeButton>
        <Modal.Title>Add Project</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
            <div className="col-lg-6">
                <label htmlFor='upload'>
                    <input id='upload' onChange={(e)=>setProjectDetails({...projectDetails,projectImage:e.target.files[0]})}  type="file" style={{display:'none'}} />
                    <img width={'100%'} height={'100%'} className='img-fluid' src={preview?preview:"https://img.freepik.com/free-vector/flat-design-image-upload-concept_23-2148296955.jpg?w=900&t=st=1702440711~exp=1702441311~hmac=56933bcb15ddc980485b2ee1e9a8efeb6e46c21685a0b71f830aa4bb1211e2df"} alt="" />
                </label>
            
            </div>
            <div className="col-lg-6">
                <div className=" mt-2 mb-3 w-100">
                    <input type="text" className="form-control" placeholder='Project Title' value={projectDetails.title} onChange={(e)=>setProjectDetails({...projectDetails,title:e.target.value})} />
                </div>
                <div className=" mt-2 mb-3 w-100">
                    <input type="text" className="form-control" placeholder='Language' value={projectDetails.language} onChange={(e)=>setProjectDetails({...projectDetails,language:e.target.value})} />
                </div>
                <div className=" mt-2 mb-3 w-100">
                    <input type="text" className="form-control" placeholder='Github Link' value={projectDetails.github} onChange={(e)=>setProjectDetails({...projectDetails,github:e.target.value})} />
                </div>
                <div className=" mt-2 mb-3 w-100">
                    <input type="text" className="form-control" placeholder='Website Link' value={projectDetails.website} onChange={(e)=>setProjectDetails({...projectDetails,website:e.target.value})} />
                </div>
                <div className=" mt-2 mb-3 w-100">
                    <textarea className='form-control' name='' id='' cols="30" rows="3" placeholder='Project Overview' value={projectDetails.overview} onChange={(e)=>setProjectDetails({...projectDetails,overview:e.target.value})} />
                </div>
            </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClosed}>
          Cancel
        </Button>
        <Button variant="success" onClick={handleAdd}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
    <ToastContainer theme='colored' autoClose={3000} position='top-center' />

  </>

  )
}

export default AddProject