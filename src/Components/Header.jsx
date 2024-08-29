import React from 'react';

const Header = () => {
  return (
    <header className="navbar bg-primary text-white fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        <div className="flex items-center space-x-4">
          <img src="./logo.png" className="w-8" alt="Logo" />
          <a className="text-xl font-bold hover:text-gray-300" id="headerTitle" href="#home">noxgen</a>
        </div>
        <nav className="flex items-center space-x-6">
          <a href="#features" className="hover:text-gray-300">Features</a>
          <a href="#pricing" className="hover:text-gray-300">Our Team</a>
          <a href="#contact" className=" btn">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
