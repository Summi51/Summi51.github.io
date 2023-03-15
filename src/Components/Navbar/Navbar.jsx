import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import logo from './../../Image/logo.png'

// ./../../Pages/Contact
const Navbar = () => {

  const AllNavData = [
    {path:'/', title:'HOME'},
    {path:'/about', title:'ABOUT'},
    {path:'/skills', title:'SKILLS'},
    {path:'/projects', title:'PROJECTS'},
    {path:'/contact', title:'CONTACT'},
  ]



  return (

    <div id='nav-menu'>

    <div className='logo'>
      <img src={logo} alt='summi'/>
    </div>

    <div className='navbar'>
      {
        AllNavData.map((item)=>(
         
            <NavLink key={item.path} to={item.path}>
              {item.title}        
          </NavLink>
        ))
      }
    </div>
    </div>
  )
}

export default Navbar
