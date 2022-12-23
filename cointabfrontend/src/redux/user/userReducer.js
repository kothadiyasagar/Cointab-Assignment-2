import { GET_USER, USER_ERROR, USER_LOADING } from "./userActionType";

const initData={
  loading:false,
  error:false,
  UserData:[]
}

export const UserReducer=(store=initData,{type,payload})=>{

    switch (type) {
        case USER_LOADING:
            return {
                ...store,
                loading:true,
                error:false
            }
        case GET_USER:
            return{
                ...store,
                loading:false,
                UserData:payload
            }
        case USER_ERROR:
            return{
                ...store,
                loading:false,
                error:true
            }    
        default:
        return store;
    }
}