import { QUIZ_FAILURE, QUIZ_REQUEST, QUIZ_SUCCESS } from "./actionType"

const initState ={
    isLoading:false,
    data:[],
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
        default:{
            return {
                state
            }
        }
    }
}
