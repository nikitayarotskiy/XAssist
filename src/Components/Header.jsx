// src/Components/Header.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
// import ThemeController from './ThemeController'; // Uncomment if you need it

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear marks from local storage
    localStorage.removeItem('marks');

    // Redirect to the login page
    navigate('/login');
  };

  return (
    <header className="navbar bg-primary text-white fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        <div className="flex items-center space-x-4">
          <img src="./logo_dark.png" className="w-8" alt="Logo" />
          <a className="text-xl font-bold text-secondary" id="headerTitle" href="/">XAssist</a>
        </div>
        <div className="flex items-center space-x-4">
          {/* Settings Icon */}
          {/* <ThemeController /> */}
          <button 
            className="text-secondary"
            onClick={handleLogout}
          >
            <span className="material-icons">logout</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
