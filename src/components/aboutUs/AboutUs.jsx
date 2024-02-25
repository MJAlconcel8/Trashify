import React from 'react'
import './aboutUs.css'

function AboutUs() {
  return (
    <>
      <div className="about-us">
        <div className="about-us-content">
          <h1 className='title-aboutUs'>About Us</h1>
          <p className='about-us-p'>Introducing Trashify, your ultimate companion for embracing sustainable living! With Trashify, effortlessly locate nearby recycling centers and take meaningful steps towards reducing your carbon footprint. Each time you recycle, earn valuable points redeemable for exciting rewards, making your eco-conscious efforts even more rewarding. Engage with like-minded individuals in our vibrant community section, where you can inspire and be inspired to recycle more. Join Trashify today and start making a positive impact on the planet!</p>
          <button className='explore-btn'>EXPLORE NOW</button>
        </div>
      </div>
      <div className="community">
        <div className="community-content">
          <h1 className='com-title'>Community</h1>
          <p className='comm-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
          <div className="carousel">

          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs