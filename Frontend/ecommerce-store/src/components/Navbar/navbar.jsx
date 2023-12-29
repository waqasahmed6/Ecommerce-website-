import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
function Navbar() {
  return (
<body>
<div className='main'>
<ul className='nav'>
    <li><Link to="/">Home  </Link> </li>
    <li> <Link className='li' to="/Contact Us">Contact us  </Link> </li>
    <li> <Link to="/about">About us</Link> </li>
    <li> <Link to="/login">Admin Login</Link> </li>
    
    
</ul>
</div>
</body>
    
    )
}

export default Navbar