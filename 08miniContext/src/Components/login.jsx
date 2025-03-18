import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../context/usercontext.js'


function Login() {
    const [userName, setuserName] = useState('')
    const [password, setpassword] = useState('')
    const {setUser} = useContext(UserContext)

    const handleSubmit= (e)=>{
        e.preventDefault()
        setUser({username, password})

    }

    

    return (
        <>
        <div>
            <h2>Login</h2>
            <input 
            value= {userName}
            onChange={(e)=> setuserName(e.target.value)}
            type= 'text' 
            placeholder='username' />
            <input
            value = {password}
            onChange={(e)=> setpassword(e.target.value)}
            type= 'password' 
            placeholder='password' />
            <button onClick={handleSubmit}>Submit</button>
        </div>
            
        </>
    )
}
export default Login;
