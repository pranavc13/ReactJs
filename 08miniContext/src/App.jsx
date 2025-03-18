import { useState } from 'react'
import Login from './Components/login.jsx'
import Profile from './Components/profile.jsx'
import usercontextProvider from './Contextjsx/Usercontext.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <usercontextProvider>
      <h1>Hello Brother</h1>
      <Login/>
      <Profile/>
      


    </usercontextProvider>

    </>
  )
}

export default App
