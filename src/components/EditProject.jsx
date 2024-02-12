import React, { useContext } from 'react'
import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BASE_URL } from '../services/baseurl';
import { editProjectAPI } from '../services/allAPI';
import { editProjectResponseContext } from '../context/ContextShare';

function EditProject({project}) {

    const {editProjectResponse, setEditProjectResponse} = useContext(editProjectResponseContext)

    const [show, setShow] = useState(false);
    //state to hold the values of inputbox
    const [projectDetails, setProjectDetails]=useState({
        id:project._id,
        title:project.title,
        language:project.language,
        github:project.github,
        website:project.website,
        overview:project.overview,
        projectImage:""
    })

        // state to hold the url of the file
        const [ preview, setPreview]=useState("")

        const handleClose = () => {
            setShow(false)
            handleClosed()
            
        }

        const handleClosed =()=>{
            setProjectDetails({
                id:project._id,
                title:project.title,
                language:project.language,
                github:project.github,
                website:project.website,
                overview:project.overview,
                projectImage:""
            })
            setPreview("")
        }

        const handleShow = () => setShow(true);

    useEffect(()=>{
        if(projectDetails.projectImage)
        {
            setPreview(URL.createObjectURL(projectDetails.projectImage))
        } 
    
        },[projectDetails.projectImage])
        console.log(preview);

    const handleUpdate =async(e)=>{
        e.preventDefault()

        const {id,title,language,github,website,overview,projectImage} = projectDetails

        if(!title || !language || !github || !website || !overview ){
            alert("Please fill out all fields.")
        }
        else
        {
            const reqBody = new FormData()

            reqBody.append("title",title)
            reqBody.append("language",language)
            reqBody.append("github",github)
            reqBody.append("website",website)
            reqBody.append("overview",overview)
            preview?reqBody.append("projectImage",projectImage):reqBody.append("projectImage",project.projectImage) 

            const token = sessionStorage.getItem("token")


            if(preview)
            {
                const reqHeader = {
                    "Content-Type" : "multipart/form-data",
                    "Authorization" :`Bearer ${token}`
                  }
                
                  const result = await editProjectAPI(id,reqBody,reqHeader)
                  console.log(result);
                  if(result.status === 200)
                  {
                    alert('updated successfully')
                    handleClose()
                    setEditProjectResponse(result.data)
                  }
                  else
                  {
                    console.log(result.response.data);
                  }
            }
            else
            {
                const reqHeader = {
                    "Content-Type" : "application/json",
                    "Authorization" :`Bearer ${token}`
                  }
    
                  const result = await editProjectAPI(id,reqBody,reqHeader)
                  console.log(result);
                  if(result.status === 200)
                  {
                    alert('updated successfully')
                    handleClose()
                    setEditProjectResponse(result.data)
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
     <button onClick={handleShow} className="btn"><i class="fa-solid fa-pen-to-square text-info"></i></button>
     <Modal show={show} onHide={handleClose} size='lg'>
      <Modal.Header closeButton>
        <Modal.Title>Edit Project</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
            <div className="col-lg-6">
                <label htmlFor='upload'>
                    <input onChange={(e)=>setProjectDetails({...projectDetails,projectImage:e.target.files[0]})}  id='upload' type="file" style={{display:'none'}} />
                    <img width={'100%'} height={'100%'} className='img-fluid' src={preview?preview:`${BASE_URL}/uploads/${project.projectImage}`} alt="" />
                </label>
            
            </div>
            <div className="col-lg-6">
                <div className=" mt-2 mb-3 w-100">
                    <input type="text" className="form-control" placeholder='Project Title' value={projectDetails.title} onChange={(e)=>setProjectDetails({...projectDetails,title:e.target.value})}/>
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
                    <textarea className='form-control' name='' id='' cols="30" rows="3" placeholder='Project Overview' value={projectDetails.overview} onChange={(e)=>setProjectDetails({...projectDetails,overview:e.target.value})}/>
                </div>
            </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClosed}>
          Cancel
        </Button>
        <Button variant="success" onClick={handleUpdate}>
          Update
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}

export default EditProject