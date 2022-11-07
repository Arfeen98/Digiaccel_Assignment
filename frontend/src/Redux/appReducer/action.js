import axios from "axios";
import { QUIZ_FAILURE, QUIZ_POST_FAILURE, QUIZ_POST_REQUEST, QUIZ_POST_SUCCESS, QUIZ_REQUEST, QUIZ_SUCCESS,} from "./actionType";


export const quiz_suc = (data)=>({
    type:QUIZ_SUCCESS,
    payload:data
})

export const quiz_req =()=>({
    type:QUIZ_REQUEST
})

export const quiz_fail =()=>({
    type:QUIZ_FAILURE
})

export const Quiz_fail =()=>({
    type:QUIZ_POST_FAILURE
})

export const Quiz_succ =(data)=>({
    type:QUIZ_POST_SUCCESS,
    payload:data
})

export const Quiz_req =()=>({
    type:QUIZ_POST_REQUEST
})


export const QuizGet =(category,num)=>(dispatch)=>{
    dispatch(quiz_req());
    return axios({
        method:"get",
        url:`https://enigmatic-headland-84986.herokuapp.com/quiz?cattegory=${category}&page=${num}&limit=${num}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : localStorage.getItem("token")
          },
    }).then((res)=>{
        dispatch(quiz_suc(res.data.results));
    }).catch((err)=>{
        console.log(err);
    })
}

export const quizPost =(question,difficulty,correct_answer,incorrect_answers)=>(dispatch)=>{
    dispatch(Quiz_req());
    return axios({
        url:"https://enigmatic-headland-84986.herokuapp.com/quiz/quizpost",
        method:"post",
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : localStorage.getItem("token")
          },
        data:{
            question:question,
            difficulty:difficulty,
            correct_answer:correct_answer,
            incorrect_answers:incorrect_answers
        }
    }).then((res)=>{
        console.log(res.data);
        dispatch(Quiz_succ(res.data));
    }).catch((err)=>{
        dispatch(Quiz_fail());
        console.log(err);
    })
}