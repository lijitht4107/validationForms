import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="register">
        <Link className="registaion-btn" to='/signup'>Register</Link>
        <Link className="login-btn" to='/login'>Login</Link>
        <Link className="registaion-btn" to='/newSign'>Validate signup</Link>
        <Link className="login-btn" to='/newlog'>Validate login</Link>

        </div>
        <div className="fade-bottom"></div>
        
      </div>
    </div>
  )
}

export default Header
