import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Quiz from '../pages/Quiz'


const MainRoutes = () => {
  return (
    <div>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/quiz' element={<Quiz/>}/>
      </Routes>
    </div>
  )
}

export default MainRoutes
