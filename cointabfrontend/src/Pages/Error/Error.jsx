import React from "react";
import { useNavigate } from "react-router-dom";
import "./Error.css";
const Error = () => {
  const navigate = useNavigate();
  const goToHome=()=>{
   navigate("/")
  }
  return (
    <div className="container">
      <div class="text">
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/404-error-3702359-3119148.png" alt="" />
      </div>
        <button onClick={goToHome} className="btn" >Back to Home</button>
    </div>
  );
};

export default Error;
