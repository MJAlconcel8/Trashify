import React from 'react'
import Navbar from './components/Navbar'
import RecyclingLocations from './components/locations/RecyclingLocations'
import Footer from './components/Footer'
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <RecyclingLocations />
      <Footer />
    </div>
  )
}

export default App

