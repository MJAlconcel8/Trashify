import React from 'react'
import './Home.css'
import designer from '../../assets/Designer (1) 1.png'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/Footer'
import FramerComponent from '../framecomponent/FramerComponent'

function Home() {
  return (
    <div className="desktop-1">
    <main className="frame-parent">
      <section className="designer-rectangle">
        <img
          className="designer-1-1"
          loading="eager"
          alt=""
          src={designer}
        />
      </section>
      <FramerComponent />
    </main>
  </div>
  )
}

export default Home