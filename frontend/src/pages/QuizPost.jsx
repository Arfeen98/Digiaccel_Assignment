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
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { quizPost } from '../Redux/appReducer/action';
import { SignupGet } from '../Redux/authReducer/action';

export default function QuizPost() {
  const {role}=useSelector((state)=>state.AuthReducer);
  const [question,setQuestion]=useState('');
  const [difficulty,setDifficulty]=useState('');
  const [correct_answer,setCorrect_answer]=useState('');
  const [incorrect_answers,setIncorrect_answers]=useState([]);
  const dispatch = useDispatch();
  const handleClick=(e)=>{
      e.preventDefault();
      dispatch(quizPost(question,difficulty,correct_answer,incorrect_answers));
  }
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Add Question</Heading>
        </Stack>
        {/* <div>{message?<h1>{message}</h1>:''}</div> */}
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
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
              <Input type="text" value={incorrect_answers} onChange={(e)=>setIncorrect_answers([...e.target.value])} />
            </FormControl>
            <FormControl id="icorrect_answer">
              <FormLabel>Incorrect_answer</FormLabel>
              <Input type="text" value={incorrect_answers} onChange={(e)=>setIncorrect_answers([...e.target.value])} />
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
    </Flex>
  );
}