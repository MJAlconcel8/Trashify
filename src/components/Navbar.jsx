import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom' 
import logo from '../assets/image 1.png'
import logout from '../assets/log-in.svg'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="elementsInNavbar">
            <img src={logo} alt="" className="rectangleTrashify"/>
            <div className="navbarPages">
                <Link to='/recycling-locations'><span className='navbarPage'>RECYCLING LOCATION</span></Link>
                <span className='navbarPage'>COMMUNITY</span>
                <span className='navbarPage'>STORES</span>
                <span className='navbarPage'>WHO WE ARE</span>
            </div>
            <img src={logout} alt="" className='logout'/>
        </div>
    </div>
  )
}

export default Navbar
