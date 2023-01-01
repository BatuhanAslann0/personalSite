import React from 'react'
import LandingPage from '../Components/Landing/LandingPage'
import Projects from '../Components/Projects/Projects'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <div className='app'>
    <LandingPage />
    <Projects />
    <Footer />
    </div>
  )
}

export default Home