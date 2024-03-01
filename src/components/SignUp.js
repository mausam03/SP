
import React,{useEffect, useState} from "react";
//import React, UseState from"react";
import axios from "axios";
import{useNavigate} from 'react-router-dom'
// import {Button} from 'react-bootstrap';

const SingUp =()=>{
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();
    
    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth){
            navigate('/')
        }
    })



    const collectData=async()=>{
        console.log(name,email,password);
       let result=await axios.post('http://localhost:5000/register',{
            name,email,password,
    },
          {
            headers:{
                'Content-Type':'application/json'

            }
          }

            
        )
        console.log("result is",result)

     const resultdata =  result.data
     console.log(resultdata);

    //  localStorage.setItem("user",JSON.stringify({name,email,password}));
    //  localStorage.setItem("user",JSON.stringify(resultdata));

     if(resultdata){
        navigate('/login')
     }
    }
// useEffect(()=>{
    
// },[]) 
//  console.log("hello",name,email,password)

    return(
        <div className="register">
        <h1 className="bg-slate-100">Register</h1>
        <input className="inputBox" type="text" 
        value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name "/>
        
        <input className="inputBox" type="text"
        value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your Email"/>
        
        <input className= "inputBox" type="passwowrd"
        value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your Password "/>
        
        <button onClick={collectData} className="appButton" type="button">Sign Up</button>
        {/* <Button variant="primary">Primary</Button>{' '} */}

    </div>
    )
}

export default SingUp;


// import React, { useState } from "react";

// const SignUp = () => {
//   const [Name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <div className="register">
//       <h1>Register</h1>
//       <input
//         className="inputBox"
//         type="text"
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Enter Name"
//       />
//       <input
//         className="inputBox"
//         type="text"
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Enter your Email"
//       />
//       <input
//         className="inputBox"
//         type="password"  
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Enter your Password"
//       />
//       <button className="appButton" type="button">
//         Sign Up
//       </button>
//     </div>
//   );
// };

// export default SignUp;
