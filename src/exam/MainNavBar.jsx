import React from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import Home from './Home'
import DepartmentRegistration from './DepartmentRegistration'
import DepartmentMembers from './DepartmentMembers'
import ApiDemo from './ApiDemo'
import './navbar.css'
export default function MainNavBar() {
  return (
    <div>
        
        <nav className='navbar' >
            <Link to="/" >Home</Link>
            <Link to="/DepartmentRegistration" >Department Registration</Link>
            <Link to="/DepartmentMembers" >Department Members</Link>
            <Link to="/ApiDemo" >Api</Link>
        </nav>





        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/DepartmentRegistration' element={<DepartmentRegistration/>} />
          <Route path='/DepartmentMembers' element={<DepartmentMembers/>} />
          <Route path='/ApiDemo' element={<ApiDemo/>} />
          <Route path='/*' element={<div>Not found</div>} />
        </Routes>
    </div>
  )
}
