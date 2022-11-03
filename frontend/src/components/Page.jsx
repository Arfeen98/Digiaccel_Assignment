import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { QuizGet } from '../Redux/appReducer/action';

const Page = () => {
    const dispatch=useDispatch();
    const [page,setPage]=useState(1);
    // const {cattegory}=useSelector((state)=>state.AppReducer.data);
    useEffect(()=>{
      dispatch(QuizGet(page));
    },[page])
  return (
    <div>
      <button onClick={()=>setPage(page-1)}>prev</button>
      <button onClick={()=>setPage(page+1)}>next</button>
    </div>
  )
}

export default Page
