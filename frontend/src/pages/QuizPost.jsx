import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { quizPost } from '../Redux/appReducer/action';
import { SignupGet } from '../Redux/authReducer/action';

export default function QuizPost() {
  const role=localStorage.getItem("role");
  const [question,setQuestion]=useState('');
  const [difficulty,setDifficulty]=useState('');
  const [correct_answer,setCorrect_answer]=useState('');
  const [incorrect_answers,setIncorrect_answers]=useState([]);
  const [incorrect_answers1,setIncorrect_answers1]=useState('');
  const [incorrect_answers2,setIncorrect_answers2]=useState('');
  const dispatch = useDispatch();
  // console.log(incorrect_answers1);
  // console.log(incorrect_answers2);
  const handleClick=(e)=>{
      e.preventDefault();
      let arr=[];
      arr.push(incorrect_answers1);
      arr.push(incorrect_answers2);
      setIncorrect_answers(arr);
        setTimeout(()=>{
          console.log(incorrect_answers);
          //  dispatch(quizPost(question,difficulty,correct_answer,incorrect_answers));
        },1500)
  }
  const handleIncorrectanswers1=(e)=>{
    setIncorrect_answers1(e.target.value);
  }
  const handleIncorrectanswers2=(e)=>{
    setIncorrect_answers2(e.target.value);
  }
  return (
<>
    {role==="admin"?<Flex
    minH={'100vh'}
    align={'center'}
    justify={'center'}>
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      <Stack align={'center'}>
        <Heading fontSize={'4xl'}>Add Question</Heading>
      </Stack>
      {/* <div>{message?<h1>{message}</h1>:''}</div> */}
      <Box
        rounded={'lg'}
        // bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}>
        <Stack spacing={4}>
          <FormControl id="role">
            <FormLabel>Question</FormLabel>
            <Input type="text" value={question} onChange={(e)=>setQuestion(e.target.value)}/>
          </FormControl>
          <FormControl id="Difficultymail">
            <FormLabel>Difficulty</FormLabel>
            <Input type="text" value={difficulty} onChange={(e)=>setDifficulty(e.target.value)} />
          </FormControl>
          <FormControl id="Correct_answer">
            <FormLabel>Correct_answer</FormLabel>
            <Input type="text" value={correct_answer} onChange={(e)=>setCorrect_answer(e.target.value)} />
          </FormControl>
          <FormControl id="incorrect_answer">
            <FormLabel>Incorrect_answer</FormLabel>
            <Input type="text" name='ia1' onChange={handleIncorrectanswers1} />
          </FormControl>
          <FormControl id="icorrect_answer">
            <FormLabel>Incorrect_answer</FormLabel>
            <Input type="text" name='ia2' onChange={handleIncorrectanswers2} />
          </FormControl>
          {/* <FormControl id="Incorrect_answer">
            <FormLabel>Incorrect_answer</FormLabel>
            <Input type="text" value={incorrect_answers} onChange={(e)=>setIncorrect_answers([...e.target.value])} />
          </FormControl> */}
          <Stack spacing={10}>
            <Button
            onClick={(e)=>handleClick(e)}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Submit
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Flex>:"You Are Not Authorized"}
  </>
  );
}