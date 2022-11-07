import { QUIZ_FAILURE, QUIZ_POST_FAILURE, QUIZ_POST_REQUEST, QUIZ_POST_SUCCESS, QUIZ_REQUEST, QUIZ_SUCCESS } from "./actionType"

const initState ={
    isLoading:false,
    data:[],
    data_post:[],
    isError:false
}

export const AppReducer = (state=initState,action)=>{
    switch(action.type){
        case QUIZ_REQUEST:{
            return { 
                ...state,
                isLoading:true,
                isError:false
            } 
        }
        case QUIZ_SUCCESS:{
            return { 
                ...state,
                data:action.payload,
                isLoading:false,
                isError:false
            } 
        }
        case QUIZ_FAILURE:{
            return { 
                ...state,
                isLoading:false,
                isError:false
            } 
        }
        case QUIZ_POST_REQUEST:{
            return {
                ...state,
                isLoading:true,
                isError:false
            }
        }
        case QUIZ_POST_SUCCESS:{
            return {
                ...state,
                isLoading:false,
                data_post:action.payload,
                isError:false
            }
        }
        case QUIZ_POST_FAILURE:{
            return {
                ...state,
                isLoading:false,
                isError:true
            }
        }
        default:{
            return {
                state
            }
        }
    }
}
