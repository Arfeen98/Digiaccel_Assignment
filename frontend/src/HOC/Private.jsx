import React from 'react'
import { useSelector } from 'react-redux';
import Login from '../components/Login';

const Private = ({children}) => {
    const {isAuth}=useSelector((state)=>state.AuthReducer)
    const token=localStorage.getItem('token');
    
    if(isAuth||token){
        return children;
    }else{
        return <Login/>
    }
}

export default Private