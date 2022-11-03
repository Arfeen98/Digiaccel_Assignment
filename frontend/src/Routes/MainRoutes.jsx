import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/Login'
import Navbar from '../components/Navbar'
import Signup from '../components/Signup'
import Home from '../pages/Home'
import Quiz from '../pages/Quiz'

const MainRoutes = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/Signup' element={<Signup/>}/>
       <Route path='/Login' element={<Login/>}/>
       <Route path='/Quiz' element={<Quiz/>}/>
      </Routes>
    </div>
  )
}

export default MainRoutes
