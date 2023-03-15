import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import Home from './../../Pages/Home';
import Home from './../../Pages/Home'
import About from './../../Pages/About';
import Skills from './../../Pages/Skills';
import Projects from './../../Pages/Projects';
import Contact from './../../Pages/Contact';

const AllRoutes = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/skills' element={<Skills/>}/>
    <Route path='/project' element={<Projects/>}/>
    <Route path='/contact' element={<Contact/>}/>
   </Routes>
  )
}

export default AllRoutes
