import React from "react";

import UserContext from 'usercontext.js'

const usercontextProvider = ({children}) =>{
    const [user,setuser] = React.useState(null)
    return (
        <UserContext.Provider value = {{User, setUser}} >
            
        {children}
        </UserContext.Provider>
    )
     
}
export default usercontextProvider


