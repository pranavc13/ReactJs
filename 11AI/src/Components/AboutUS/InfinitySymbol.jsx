import React from 'react';
import './AboutUs.css';

const InfinitySymbol = () => {
  return (
    <div className="infinity-container w-80 h-80 relative">
      <svg
        viewBox="0 0 100 50"
        className="w-full h-full"
      >
        <path
          d="M24.3,30C11.4,30,5,43.3,5,50s6.4,20,19.3,20c19.3,0,32.1-40,51.4-40 C88.6,30,95,43.3,95,50s-6.4,20-19.3,20C56.4,70,43.6,30,24.3,30z"
          className="infinity-path"
        />
      </svg>
      <div className="gradient-orb"></div>
      <div className="blue-spark"></div>
    </div>
  );
};

export default InfinitySymbol;