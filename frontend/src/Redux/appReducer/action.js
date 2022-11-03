import axios from "axios";
import { QUIZ_FAILURE, QUIZ_REQUEST, QUIZ_SUCCESS,} from "./actionType";


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

export const QuizGet =(category,num)=>(dispatch)=>{
    dispatch(quiz_req());
    return axios({
        method:"get",
        url:`https://thawing-plains-46147.herokuapp.com/quiz?cattegory=${category}&page=${num}&limit=1`,
    }).then((res)=>{
        console.log(res.data.results);
        dispatch(quiz_suc(res.data.results));
    }).catch((err)=>{
        console.log(err);
    })
}

 
