import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import './LandingPageStyles.css'


const LandingPage = () => {
  return (
      <>
      <Navbar />
         <div className="container">
           <div className='landing-container'>
              <div className="header">
              <h1>Hi! I am Batuhan, a web developer.</h1>
               <p>24 years old web developer who loves to learn, hustle and create. <br /> Improving myself is my real passion.</p>
               <p>Do you want to learn more details<br /> <Link to='/about' className='about-me'>about me ?</Link> </p>
              </div>
           </div>
        </div>
      </>
  )
}

export default LandingPage