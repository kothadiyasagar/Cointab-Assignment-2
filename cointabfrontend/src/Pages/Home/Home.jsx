import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { allUserDelete, fetchUser,loading } from '../../redux/user/useraction';
import { Spinner } from "react-bootstrap";
import {json, useNavigate} from "react-router-dom";
import { FormControl, FormGroup, Input, InputLabel, Typography,styled,Button} from "@mui/material"
import LinearProgress from '@mui/material/LinearProgress';
import Tabledata from '../../Components/Tabledata';
import axios from 'axios';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
const  [data ,setData] = useState(false)
const  [html ,sethtml] = useState(false)
  const users = useSelector(store=>store.User.UserData)
   const {loading,error} = useSelector(store=>store.User)
 
async function fetchUsers() {
        sethtml(true)
    for(let i=0; i<50; i++){
      axios.get("https://randomuser.me/api/?results=1", {headers: {
        "Content-Type": "application/json"}
      }).then((res)=>{


               
              let data =res.data.results[0]
              let obj  = {
                name : `${data.name.first} ${data.name.last}`,
                gender : data.gender,
                age : data.dob.age,
                dob : data.dob.date,
                city: data.location.city,
                state:data.location.state,
                country:data.location.country

              }

            let aa =  dispatch(fetchUser(obj))
              setData(true)
          
           
              
      }).catch(()=>{

      })

     
    } 
    sethtml(false)
  }
  const fetchUserData= async()=>{
   let datas =  fetchUsers()


  }

  // delete user...
  const DeleteData=()=>{
    dispatch(allUserDelete())
  }

  const UserDetails=()=>{
   navigate(`/details`);
  }

  useEffect(()=>{
  },[dispatch])
 
  if(users.length <49  && data){
    return (
      <>
      <LinearProgress  />
      </>
    )
  }


  if(error){
    return <div>ERROR....</div>
  }
  return (
   <>
  <div style={{display:"flex" , margin:"auto" , justifyContent:"center" , marginBottom:"40x",marginTop:"20px"}}>
  <Button   style={{marginRight:"20px"}}   variant="contained" onClick={()=>fetchUserData()}>Fetch User</Button>
  <Button   style={{marginRight:"20px"}}   variant="contained" onClick={DeleteData}>Fetch Delete</Button>
  <Button   style={{marginRight:"20px"}}   variant="contained" onClick={UserDetails}>Fetch Details</Button>

  </div>
    { data && users.length >49 ?  <Tabledata   data = {users} /> :"" }
 


       
          
   </>

  )
}

export default Home;