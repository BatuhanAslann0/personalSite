import React from 'react'
import {FaMailBulk,FaSearchLocation } from 'react-icons/fa'
import { FaGithub } from  'react-icons/fa'
import './FooterStyles.css'

const Footer = () => {
  return (
    <div className='footer-big-container'>
       <div className="infos">
         <div className="location"> 
           <FaSearchLocation size={20} style={{color:'#1e2022' , marginRight:'.3rem'}} />
           <p>Istanbul, Turkey</p>
         </div>
         <div className="github">
           <FaGithub size={20} style={{color:'#1e2022' , marginRight:'.3rem'}} />
           <p>BatuhanAslann0</p>
          </div>
        <div className='email'>
          <FaMailBulk size={20} style={{color:'#1e2022' , marginRight:'.3rem'}} />
          <p>Batuhan.aslan.98@hotmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default Footer