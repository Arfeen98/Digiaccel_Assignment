import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { logout } from '../Redux/authReducer/action';

const Logout = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    useEffect(()=>{
      dispatch(logout());
      navigate('/Login')
    },[])
  return (
    <div>
      
    </div>
  )
}

export default Logout
