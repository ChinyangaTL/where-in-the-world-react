import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRegSun } from 'react-icons/fa';
import { FaRegMoon } from 'react-icons/fa';
import { useGlobalContext } from '../context';

const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

const Navbar = () => {
  const { setSearchKey } = useGlobalContext();

  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/" className="nav__logo" onClick={() => setSearchKey('j')}>
          <h2>Where in the world?</h2>
        </Link>
        <button
          onClick={toggleTheme}
          className="btn btn-trans nav__toggle-container"
        >
          {theme === 'dark-theme' ? <FaRegSun /> : <FaRegMoon />}
          <p>{theme === 'dark-theme' ? 'Light Mode' : 'Dark Mode'}</p>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
