import React from 'react'
import AddProject from './AddProject'

function Myproject() {
  return (
    <div className='card shadow p-3 ms-3 me-3'>
      <div className="d-flex">
        <h3 className="text-succes ms-3">My Project</h3>
        <div className="ms-auto">
          <AddProject/>
        </div>
      </div>
      <div className="mt-4">
        <div className="border align-items-center rounded p-2 d-flex">
          <h5>Project Title</h5>
          <div className="icon ms-auto">
            <button className="btn"><i class="fa-solid fa-pen-to-square text-info"></i></button>
            <button className="btn"><i class="fa-brands fa-github text-success"></i></button>
            <button className="btn"><i class="fa-solid fa-trash text-danger"></i></button>
          </div>
        </div>
        <p className="text-danger fs-1"><b>No Projects Uploaded yet!!</b></p>
      </div>
    </div>
  )
}

export default Myproject