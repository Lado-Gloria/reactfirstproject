import React,{useState} from "react";
import { Link } from 'react-router-dom';
import React from 'react';
import './style.css';
const Login =()=>{
        const [username,setUsername] =useState('');
        const[password,setPassword] = useState('');
        console.log(username)
        console.log(password);
        const handleSubmit =async(e)=>{
            e.preventDeefault();
            const data ={
                username:username,
                password :password

            }
            console.log({data});
            try{
                const response =await fetch('https://dummyjson.com/auth/login',{
                method: 'POST',
                headers:{
                    'Constent-Type':'application/json',
                    username:"atuny0",
                    password:"9uQFF1Lh"
                },
                body:JSON.stringify(data),

            })
            const result =await response.json();
           
            console.log(result)
       
    }
            catch(error){
                console.log(error.message)
            }
            
        }
    
    return(
        <div>
<form className="form" onSubmit={handleSubmit                                                                                                                                                                                                 }>
                <h1>Login</h1>
                <input placeholder="Enter user name " type="text"
                onChange= {(e)=>setUsername(e .target.value)}/>
               <br/>
               <br/>
               <br/>
                <input placeholder="Enter password " type="password"
                onChange={(e)=>setPassword ( e.target.value)} />
                <br/>
               <br/>
                {/* <button  type ="submit"> Login</button> */}
                <Link to="/products"><button  type ="submit"> Login</button></Link>
            </form>
        </div>
    )
}
export default Login


