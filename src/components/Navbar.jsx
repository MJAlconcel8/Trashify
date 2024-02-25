import React from 'react'
import logo from '../assets/image 1.png'
import logout from '../assets/log-in.svg'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="elementsInNavbar">
            <img src={logo} alt="" className="rectangleTrashify" />
            <div className="navbarPages">
                <span className='navbarPage'>RECYCLING LOCATION</span>
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
