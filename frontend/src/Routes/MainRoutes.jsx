import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/Login'
import Logout from '../components/Logout'
import Navbar from '../components/Navbar'
import Signup from '../components/Signup'
import Home from '../pages/Home'
import Quiz from '../pages/Quiz'
import QuizPost from '../pages/QuizPost'

const MainRoutes = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/Home' element={<Home/>}/>
       <Route path='/Signup' element={<Signup/>}/>
       <Route path='/Login' element={<Login/>}/>
       <Route path='/Logout' element={<Logout/>}/>
       <Route path='/Quiz' element={<Quiz/>}/>
       <Route path='/Quizpost' element={<QuizPost/>}/>
      </Routes>
    </div>
  )
}

export default MainRoutes
