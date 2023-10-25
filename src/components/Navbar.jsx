import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <a className="logo" href="#">
            <span>LO</span>GO
        </a>

        <ul className="navbar">
            <li><Link to="/">HOME</Link>   </li>
            <li><Link to="/about">ABOUT</Link>   </li>
            <li><Link to="/contact">CONTACT</Link>   </li>
        </ul>
    </nav>
  )
}

export default Navbar