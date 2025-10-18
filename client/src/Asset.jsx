import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function SignUp() {
  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const navigate=useNavigate()
 const handleChange=(e)=>{
  e.preventDefault()
  axios.post('http://localhost:3001/register',{name,email,password})
  .then(result=>{console.log(result)
    navigate('/login')
  })
  .catch(err=>console.log(err))
  


 }
  return (
    
    <div className="d-flex justify-content-center align-items-center pe-2  min-vh-100">
      
   
      <div className="bg-white p-4 rounded shadow w-100" style={{ maxWidth: "400px" }}>
        <h2 className="text-center mb-4">Register</h2>

        <form onSubmit={handleChange}>
       
          <div className="mb-3">
            <label htmlFor="name" className="form-label"><strong>AssetName</strong></label>
            <input
              type="text"
              placeholder="Enter your name"
              autoComplete="off"
              name="name"
              id="name"
              className="form-control"
              onChange={(e)=>setName(e.target.value)}
            />
          </div>

  
          <div className="mb-3">
            <label htmlFor="email" className="form-label"><strong>Email</strong></label>
            <input
              type="email"
              placeholder="Enter your email"
              autoComplete="off"
              name="email"
              id="email"
              className="form-control"
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label"><strong>Password</strong></label>
            <input
              type="password"
              placeholder="Enter your password"
              autoComplete="off"
              name="password"
              id="password"
              className="form-control"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>

   
          <button type="submit" className="btn btn-primary w-100">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;