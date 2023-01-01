import React from 'react'
import { Link } from 'react-router-dom'
import './ProjectsStyles.css'
import moviePhoto from './moviePhoto.png'
import cryptoPriceNew from './cryptoPriceNew.png'
import weatherPhoto from './weatherPhoto.png'
import personalSite from './personalSite.png'
import ShoppingSite from './ShoppingSite.png'
import comingSoon from './coming-soon.png'


const Projects = () => {
  return (
    <div className='projects-big-container'>
      <div className="projects-container">
       <div className="projects-header">
        <h2>My Projects</h2>
       </div>
      <div className="projects-row">
        <div className="project">
          <div className="img">
            <img src={ShoppingSite} alt="" />
          </div>
          <div className="project-text">
          <h3>Hiphop Store</h3>
          <p>In this site users can see the items and add to their shopping cart. When users go to the cart page they are able to see what is the cost of the items and adjust how many items they want to buy. Also if they change their minds, they are able to clear all the items from the cart. <br />
          Builded with React.
</p>
          </div>
          <div className="buttons">
          <a className='project-btn link' target='_blank' href="https://github.com/BatuhanAslann0/eStoreReact" >Github Code</a>
          <a className='project-btn link' target='_blank' href="https://hiphopstore.netlify.app">Live Demo</a>
          </div>
        </div>
        <div className="project">
          <img src={cryptoPriceNew} alt="" />
          <div className="project-text">
          <h3>Crypto Price Tracker</h3>
          <p>In this site users can see all the crypto currencies, their current prices, their volumes, their market caps and the price changes in the last 24 hours. Also users are able to search for a specific crypto currency and see the live informations about that currency. <br /> 
          Builded with React.
          </p>
          </div>
          <div className="buttons">
          <a className='project-btn link' target='_blank' href="https://github.com/BatuhanAslann0/cryptoTrackerApp2">Github Code</a>
          <a className='project-btn link' target='_blank' href="https://cryptotrackerbasic.netlify.app">Live Demo</a>
          </div>
        </div>
        <div className="project">
          <div className="img">
            <img src={moviePhoto} alt="" />
          </div>
          <div className="project-text">
          <h3>Movie App</h3>
          <p>
            In this app users can see the popular movies at that time and they can search for a word to see the movies with that word in it. If the movie that searched loading at that time then displays ‘’Loading…’’. Also if there is no movie with that word, there is a message for that too. <br /> 
          Builded with React.
          </p>
          </div>
          <div className="buttons">
          <a className='project-btn link' target='_blank' href="https://github.com/BatuhanAslann0/reactMovieApp" >Github Code</a>
          <a className='project-btn link' target='_blank' href="https://movieappbasic.netlify.app
">Live Demo</a>
          </div>
        </div>
        <div className="project">
          <img src={personalSite} alt="" />
          <div className="project-text">
          <h3>Portfolio Site</h3>
          <p>In this site users can see live demos of my projects. <br />
          They can see my codes from my GitHub account with the links that I provided and also learn a little about myself if they want to.
          <br /> Builded with React.
          <br /> <br /> 
          </p>
          </div>
          <div className="buttons">
          <button className='project-btn'>Github Code</button>
          <button className='project-btn'>Live Demo</button>
          </div>
        </div>
        <div className="project">
          <img src={weatherPhoto} alt="" />
          <div className="project-text">
          <h3>Weather App</h3>
          <p>In this app users can search for a location and see all the informations about the weather <br /> like degree, windspeed and humidity. 
          <br /> Builded with React. <br />
          <br /><br />
          <br />
         </p>
          </div>
          <div className="buttons">
          <a className='project-btn link' target='_blank' href="https://github.com/BatuhanAslann0/reactWeatherApp2">Github Code</a>
          <a className='project-btn link' target='_blank' href="https://incandescent-unicorn-3937be.netlify.app">Live Demo</a>
          </div>
        </div>
        <div className="project">
          <img id='coming-soon' src={comingSoon} alt="" />
          <div className="project-text">
          <h3>COMING SOON!</h3>
          <p id='coming-soon' >In this app users can search for a location and see all the informations about the weather Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. <br /> like degree, windspeed and humidity. 
          <br /> Builded with React. <br />
          <br />
         </p>
          </div>
          <div id='coming-soon' className="buttons">
          <a className='project-btn link' >Github Code</a>
          <a className='project-btn link'>Live Demo</a>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Projects