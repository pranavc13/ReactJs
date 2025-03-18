import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import SideBar from './Components/SideBar/SideBar';

export function Layout() {
  return (
    <>
      <Header />
      <div className="flex min-h-screen">
        
        <SideBar />
        
        
        <div className="flex-1">
          <Outlet /> 
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Layout;