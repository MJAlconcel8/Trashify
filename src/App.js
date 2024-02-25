import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import RecyclingLocations from './components/locations/RecyclingLocations'
import Community from './components/community/Community'
import Stores from './components/stores/Stores'
import AboutUs from './components/aboutUs/AboutUs'
import Footer from './components/Footer'
import './App.css'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recycling-locations' element={<RecyclingLocations />} />
        <Route path='/community' element={<Community />} />
        <Route path='/stores' element={<Stores />} />
        <Route path='/about-us' element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

