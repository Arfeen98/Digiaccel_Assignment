import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS, STUDENT_SUCCESS } from "./actionType";


export const signup_succ = (data)=>({
    type:SIGNUP_SUCCESS,
    payload:data
})
export const student_succ = (data)=>({
    type:STUDENT_SUCCESS,
    payload:data
})

export const signup_req =()=>({
    type:SIGNUP_REQUEST
})

export const signup_fail =()=>({
    type:SIGNUP_FAILURE
})

export const login_fail =()=>({
    type:LOGIN_FAILURE
})

export const login_succ =(data)=>({
    type:LOGIN_SUCCESS,
    payload:data
})

export const login_req =()=>({
    type:LOGIN_REQUEST
})



export const SignupGet =(email,password,name)=>(dispatch)=>{
    console.log(email,password);
    dispatch(signup_req());
    return axios({
        method:"post",
        url:"https://infinite-citadel-08024.herokuapp.com/signup",
        data:{
            email:email,
            password:password,
            name:name
        }
    }).then((res)=>{
        // console.log(res);
        dispatch(signup_succ(res.data));
    }).catch((err)=>{
        console.log(err);
    })
}
export const LoginGet =(email,password)=>(dispatch)=>{
    console.log(email,password);
    dispatch(login_req());
    return axios({
        method:"post",
        url:"https://infinite-citadel-08024.herokuapp.com/login",
        data:{
            email:email,
            password:password
        }
    }).then((res)=>{
        // console.log(res.data.token);
        dispatch(login_succ(res.data));
        localStorage.setItem('token',res.data.token);
        localStorage.setItem('name',res.data.name);
    }).catch((err)=>{
        dispatch(login_fail());
        console.log(err);
    })
}

export const StudentGet =(name,age,gender,test)=>(dispatch)=>{
    dispatch(login_req());
    return axios({
        method:"post",
        url:"https://infinite-citadel-08024.herokuapp.com/student/create",
        data:{
            name:name,
            age:age,
            gender:gender,
            test:test
        }
    }).then((res)=>{
        // console.log(res.data.token);
        dispatch(login_succ(res.data));
    }).catch((err)=>{
        dispatch(login_fail());
        console.log(err);
    })
}
export const logout = () => (dispatch) => {
    dispatch({ type: LOGOUT });
    localStorage.removeItem("name");
    localStorage.removeItem("token");
  };
