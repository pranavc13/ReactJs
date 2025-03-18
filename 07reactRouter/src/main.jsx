import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/home.jsx'
import About from './components/About/About.jsx' 
import Contact from './components/ContactUs/contact.jsx'
import User from './components/User/User.jsx'
import ErrorPage from './components/ErrorPage/Errorpage.jsx'
import Github from './components/Github/Github.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element : <Home/>
      },
      {
        path: "about",
        element: <About/>

      }, 
      {
        path: "contactus",
        element:  <Contact/>
      },
      {
        path: "User/:userid",
        element: <User/>
      },
      {

        path: "github",
        element: <Github/>
      }
      

    ]


  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router = {router}/>     
  </StrictMode>,
 
)
