
import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPI"


// register API
export const registerAPI = async (users)=>{
    return await commonAPI('POST',`${BASE_URL}/user/register`,users,"")
}

// login API
export const loginAPI = async (users)=>{
    return await commonAPI('POST',`${BASE_URL}/user/login`,users,"")
  
}

// logic to add project
export const addProjectAPI = async (reqBody,reqHeader)=>{
    return await commonAPI('POST',`${BASE_URL}/project/add`,reqBody,reqHeader)
  
}

// home project
export const homeProjectAPI = async ()=>{
    return await commonAPI('GET',`${BASE_URL}/project/home-project`)
  
}

// all project
export const allProjectAPI = async (searchKey,reqHeader)=>{
    //query parameter = path?key = value
    return await commonAPI('GET',`${BASE_URL}/project/all-project?search=${searchKey}`,"",reqHeader)
  
}


//user project
export const userProjectAPI = async (reqHeader)=>{
    return await commonAPI('GET',`${BASE_URL}/user/all-project`,"",reqHeader)
  
}

//edit project 
export const editProjectAPI = async (projectId,reqBody, reqHeader)=>{
    // id is passed as path parameter
    return await commonAPI('PUT',`${BASE_URL}/project/edit/${projectId}`,reqBody,reqHeader)
}

//delete user project
export const deleteUserProjectAPI = async (projectId, reqHeader)=>{
    return await commonAPI('DELETE',`${BASE_URL}/project/remove/${projectId}`,{},reqHeader)
}

//edit profile 
export const editProfileAPI = async (reqBody, reqHeader)=>{
    // id is passed as path parameter
    return await commonAPI('PUT',`${BASE_URL}/user/edit/`,reqBody,reqHeader)
}
