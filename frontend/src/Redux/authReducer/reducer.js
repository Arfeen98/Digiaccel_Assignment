import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS, STUDENT_SUCCESS } from "./actionType";


const initState ={
    isAuth:false,
    isLoading:false,
    data:[],
    message:'',
    isError:false
}

export const AuthReducer = (state=initState,action)=>{
    switch(action.type){
        case SIGNUP_REQUEST:{
            return { 
                ...state,
                isLoading:true,
                isError:false
            } 
        }
        case SIGNUP_SUCCESS:{
            return { 
                ...state,
                message:action.payload,
                isLoading:false,
                isError:false
            } 
        }
        // case STUDENT_SUCCESS:{
        //     return { 
        //         ...state,
        //         da:action.payload,
        //         isLoading:false,
        //         isError:false
        //     } 
        // }
        case SIGNUP_FAILURE:{
            return { 
                ...state,
                isLoading:false,
                isError:false
            } 
        }
        case LOGIN_REQUEST:{
            return {
                ...state,
                isLoading:true,
                isError:false
            }
        }
        case LOGIN_SUCCESS:{
            return {
                ...state,
                isLoading:false,
                isAuth:true,
                data:action.payload,
                isError:false
            }
        }
        case LOGIN_FAILURE:{
            return {
                ...state,
                isLoading:false,
                isError:true
            }
        }
        case LOGOUT: {
            return {
              ...state,
              isAuth: false,
            };
          }
        default:{
            return {
                state
            }
        }
    }
}
