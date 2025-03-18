import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../context/usercontext.js'

function Profile() {
    const {user} = useContext(UserContext)

    if(!user) return <div> Please Login</div>
    return <div> Welcome {user.username}</div>
     

    
}
export default Profile
