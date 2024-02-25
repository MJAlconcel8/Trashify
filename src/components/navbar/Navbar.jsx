import React from 'react'
import './navbar.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom' 
import logo from '../../assets/image 1.png'
import logout from '../../assets/log-in 1.png'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="elementsInNavbar">
            <Link to='/'><img src={logo} alt="" className="rectangleTrashify"/></Link>
            <div className="navbarPages">
                <Link to='/recycling-locations'><span className='navbarPage'>RECYCLING LOCATION</span></Link>
                <Link to='/community'><span className='navbarPage'>COMMUNITY</span></Link>
                <Link to='/stores'><span className='navbarPage'>STORES</span></Link>
                <Link to='/about-us'><span className='navbarPage'>WHO WE ARE</span></Link>
            </div>
            <img src={logout} alt="" className='logout'/>
        </div>
    </div>
  )
}

export default Navbar
