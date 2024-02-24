import React from 'react'
import logo from '../assets/image 1.png'
import logout from '../assets/log-in.svg'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="elementsInNavbar">
            <img src={logo} alt="" className="trashify" />
            <div className="navbarPages">
                <span className='page'>RECYCLING LOCATION</span>
                <span className='page'>COMMUNITY</span>
                <span className='page'>STORES</span>
                <span className='page'>WHO WE ARE</span>
            </div>
            <img src={logout} alt="" className='logout'/>
        </div>
    </div>
  )
}

export default Navbar
