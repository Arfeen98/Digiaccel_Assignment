import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';
import {useDispatch} from 'react-redux';
import { QuizGet } from '../Redux/appReducer/action';
import { Heading, Text } from '@chakra-ui/react';
const Home = () => {
    const [name,setName]=useState('');
    const [category,setCategory]=useState('');
    const [level,setLevel]=useState('');
    const dispatch=useDispatch();
    const [num,setNum]=useState('');
    const navigate=useNavigate('');

    const handleClick=(e)=>{
        e.preventDefault();
        dispatch(QuizGet(category,num))
        navigate('/quiz');
    }
  return (
    <>
    <div className={styles.container}>
      <h1>Set Up Your Quiz</h1>
        <form action="" id="form">
            <p>Name</p>
            <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Your Name" required/>
            <p>Category</p>
            <select name="select" id="batch" required onChange={(e)=>setCategory(e.target.value)}>
                <option value="Select">Select</option>
                <option value="General Knowledge">General Knowledge</option>
                <option value="Sports">Sports</option>
                <option value="Geography">Geography</option>
            </select>
            <p>Difficulty</p>
            <select name="select" id="profession" required onChange={(e)=>setLevel(e.target.value)}>
               <option value="Select">Select</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
            </select>
            <p>Number Of Questions</p>
            <input type="text" id="number" value={num} onChange={(e)=>setNum(e.target.value)} placeholder="Number Of Questions" required/>
           <input type="submit" id="submit" onClick={(e)=>handleClick(e)} value="Start a Quiz"/>           
        </form>
    </div>
    </>
  )
}

export default Home
