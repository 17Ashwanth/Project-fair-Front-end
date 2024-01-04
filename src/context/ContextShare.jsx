import React, { useState } from 'react'
import { createContext } from 'react'

export const addProjectResponseContext = createContext()
export const editProjectResponseContext = createContext()
export const isAuthTokenContext =  createContext()

function ContextShare({children}) {
    // children is a predefined prop used to share data b/w all the components
    // data to share
    const [addProjectResponse, setAddProjectResponse]= useState({})
    const [editProjectResponse, setEditProjectResponse]= useState({})
    const [isAuthenticated, setIsAuthenticated] = useState(true)
  return (
    <>
    {/* provider - provide the data to the components
        children - provide data to every component
        value = data to be provided */}
    <addProjectResponseContext.Provider value={{addProjectResponse, setAddProjectResponse}}>
    <editProjectResponseContext.Provider value={{editProjectResponse, setEditProjectResponse}}>
    <isAuthTokenContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
      {children}
    </isAuthTokenContext.Provider>
    </editProjectResponseContext.Provider>
    </addProjectResponseContext.Provider>
    
    </>
  )
}

export default ContextShare