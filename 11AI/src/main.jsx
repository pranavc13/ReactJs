import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './Layout.jsx';
import AboutUs from './Components/AboutUS/AboutUs.jsx';
import ContactUs from './Components/ContactUs/ContactUs.jsx';
import Home from './Components/Home/Home.jsx';
import ContextProvider from './Components/Context/Context.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "aboutus",
        element: <AboutUs />
      },
      {
        path: "contactus",
        element: <ContactUs />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </StrictMode>
);