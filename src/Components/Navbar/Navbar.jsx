import React from 'react'
import './NavbarStyles.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul>
            <li><Link to='/' className='go-to'>Home</Link></li>
            <li><Link to='/projects' className='go-to'>Projects</Link></li>
        </ul>
    </div>
  )
}

export default Navbar