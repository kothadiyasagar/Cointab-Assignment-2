


import { DELETE_USER, GET_USER, USER_ERROR, USER_LOADING } from "./userActionType"
import axios from "axios"

export const getUser=(payload)=>{
    return {
        type: GET_USER,
        payload
    }
}

const deleteUser =(payload)=>{
    return{
        type: DELETE_USER,
        payload
    }
}

  export const loading=()=>{
    return{
        type: USER_LOADING
    }
}

const Error=(e)=>{
    return{
        type:USER_ERROR,
        e
    }
}

export const fetchUser=(payload)=>(dispatch)=>{
   dispatch(loading())
 return  axios.post(`http://localhost:8085`,payload)
 .then(r=>( dispatch(fetchUserData())))
 .catch(e=>dispatch(Error()))
}

export const searchUser=(id)=>(dispatch)=>{
    dispatch(loading())
    return axios.get(`https://cointabb.up.railway.app/user/${id}`)
    .then(r=>( dispatch(fetchUserData())))
    .then(d=>dispatch(getUser(d)))
    .catch(e=>dispatch(Error()))
  }
  




export const fetchUserData=()=>(dispatch)=>{
    dispatch(loading())
 return axios.get(`http://localhost:8085/data`)
    .then(d=> {
       
      dispatch(getUser(d.data))})
    .catch(e=>dispatch(Error()))
  }
  
export const allUserDelete=()=>(dispatch)=>{
    dispatch(loading())
    return axios.delete(`http://localhost:8085`)
    .then(d=>dispatch(getUser(d)))
    .catch(e=>dispatch(Error(e)))
}

