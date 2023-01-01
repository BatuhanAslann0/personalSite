import React from 'react'
import { Routes , Route } from 'react-router-dom'
import AboutMeRoute from './Routes/AboutMeRoute'
import Home from './Routes/Home'
import ProjectsRoute from './Routes/ProjectsRoute'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projects' element={<ProjectsRoute /> }/>
      <Route path='/about' element={<AboutMeRoute/> } />
    </Routes>
    </>
  )
}

export default App