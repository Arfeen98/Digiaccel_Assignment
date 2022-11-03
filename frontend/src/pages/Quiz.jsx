import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Page from '../components/Page';
import { QuizGet } from '../Redux/appReducer/action';

const Quiz = () => {
  const [score,setScore]=useState(0);
  const {data}=useSelector((state)=>state.AppReducer);
  return (
    <div>
      <h1>Score:{score}</h1>
      {data?.map((elem)=>(
        <div key={elem._id}>
          <div>{elem.question}?</div>
          <button onClick={()=>{alert('correct answer');setScore(score+1)}}>{elem.correct_answer}</button>
          <br />
          <button onClick={()=>{alert('Wrong answer');setScore(score-1)}}>{elem.incorrect_answers[0]}</button>
          <br />
          <button onClick={()=>{alert('Wrong answer');setScore(score-1)}}>{elem.incorrect_answers[1]}</button>
          <br />
          <button onClick={()=>{alert('Wrong answer');setScore(score-1)}}>{elem.incorrect_answers[2]}</button>
          <br />
        </div>
      ))}
      {/* <Page/> */}
    </div>
  )
}
export default Quiz;