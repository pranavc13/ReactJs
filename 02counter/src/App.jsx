import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter= 15
  let [counter, setcounter]= useState(0)
  let addvalue = ()=>{
    
    
    console.log("Value added", counter);
    counter= counter+1
    setcounter(counter)

  }
  let removevalue = ()=>{
    console.log("Value Removed", counter);
    counter= counter-1;
    setcounter(counter)
    if( counter<= 0){
      console.log("Value cannot be negative", counter)
      counter=0;
      setcounter(counter)
    }
  }
  
  
  

  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter Value : {counter} </h2>
    <button onClick={ addvalue} >Add value  </button>
    <br/>

    <button onClick={removevalue}>Remove Value</button>
      
    </>
  )
}

export default App
