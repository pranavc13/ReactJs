import React from 'react'
import { useState, useEffect } from 'react'



export default function Github() {
    const [data,setdata]= useState(0)
    useEffect(()=>{
        fetch('https://api.github.com/users/pranavc13')
        .then(response=> response.json())
        .then(data=>{
            console.log(data)
            setdata(data)
        })



    },[])
    

    return (
        <>
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl flex justify-evenly text-center items-center'>
        <img className='text-center`' src={data.avatar_url} width= {300}/>
            <div className='text-center'>
            Github Followers: {data.followers}      
            </div>

            
        
        </div>
        
            
        </>
    )
}
