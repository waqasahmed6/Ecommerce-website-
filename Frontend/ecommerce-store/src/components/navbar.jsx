import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
<>
<nav>
    <li> <Link to="/">Home  </Link> </li>
    <li> <Link to="/about">About us</Link> </li>
    <li> <Link to="/login">Login</Link> </li>
    
    
</nav>
</>
    
    )
}

export default Navbar