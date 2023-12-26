import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Login() {
  return (
    <>
    <div>login</div>
    <h1>If you dont have account</h1>
    <Link to="register" >Register</Link>
    <Link to="/" >Home</Link>
    
    
    </>
  )
}

export default Login