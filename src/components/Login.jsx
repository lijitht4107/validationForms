import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [userDetails,setUserDetails]=useState({email:'',password:''})
    const handleLogin =(event)=>{
      event.preventDefault()
      alert(`mail :${userDetails.email}, password:${userDetails.password}`)
    }
  return (
    <div>
       <Header/>
      <div className='container'>
        <div className='login-inputs'>
          <div>
        <label htmlFor="email" >Email Id : </label>
        <input className='input-field' type="email" placeholder='Email Id' value={userDetails.email} onChange={e=>{setUserDetails({...userDetails,email:e.target.value})}} />
        </div>
        <div>
        <label htmlFor="email">Password:</label>
        <input className='input-field' type="text" placeholder='Password' value={userDetails.password} onChange={e=>{setUserDetails({...userDetails,password:e.target.value})}} />
        </div>
        <button className='login-btn' type="submit" onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login
