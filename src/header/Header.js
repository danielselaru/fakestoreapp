import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"

function Header() {
  return (
    <div className='header'>
      
        <Link to="/" className='home'>Home</Link>
    
        <Link to="/about" className='about'>About</Link>
     
        <Link to="/contact" className='contact'>Contact</Link>
       
     
    </div>
  )
}

export default Header