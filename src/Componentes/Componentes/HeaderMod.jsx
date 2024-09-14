// src/App.jsx
import React from 'react';

function Header() {
  return (
    <div className="p-6 bg-[#e9d5ff]">
      <header className="flex justify-center">
        <img 
          src="/react-proyecto1/gallery/logo.png" 
          alt="Logo Image" 
          className="w-24 sm:w-32 md:w-40 lg:w-48 h-auto" 
        />
      </header>
    </div>
  );
}


export default Header;

