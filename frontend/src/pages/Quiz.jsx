import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Page from '../components/Page';
import { QuizGet } from '../Redux/appReducer/action';
import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
  Heading,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
  const [score,setScore]=useState(0);
  const {data}=useSelector((state)=>state.AppReducer);
  const navigate=useNavigate();
  const handleWrong=()=>{
    alert("Total Score:",score);
    navigate('/');
}
  return (
      <>
    <div>
      <Heading>Score:{score}</Heading>
      {data?.map((elem)=>(
        <Center py={6} key={elem._id}>
        <Box
          maxW={'330px'}
          w={'full'}
          // bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Stack
            textAlign={'center'}
            p={6}
            // color={useColorModeValue('gray.800', 'white')}
            align={'center'}>
            <Text
              fontSize={'sm'}
              fontWeight={500}
              // bg={useColorModeValue('green.50', 'green.900')}
              p={2}
              px={3}
              color={'green.500'}
              rounded={'full'}>
              {elem.question}?
            </Text>
          </Stack>
          {/* <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}> */}
            <List spacing={3}>
              <Button onClick={()=>{alert('correct answer');
              setScore(score+1)}}>
               {elem.correct_answer}
              </Button>
              <br />
              <Button onClick={()=>handleWrong()}>
                {elem.incorrect_answers[0]}
              </Button>
              <br />
              <Button onClick={()=>handleWrong()}>
                {elem.incorrect_answers[1]}
              </Button>
              <br />
              <Button onClick={()=>handleWrong()}>
                {elem.incorrect_answers[2]}
              </Button>
            </List>
          </Box>
          </Center>
        // </Box>
      ))}
      {/* <Page/> */}
    </div>
    {score===10? navigate('/'):""}
    </>
  )
}
export default Quiz;