import React from 'react';
import '../styles/header.css';
import { Link } from 'react-router-dom';
import Search from './Search';

const Header = () => {
  return (
    <>
      <div className="tac">
        <h1 className="header-header">Event Manager</h1>
        <Search />
        <Navbar />
      </div>
    </>
  );
};
export default Header;

const Navbar = () => {
  return (
    <>
      <nav role="navigation" className="main-navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/events">Events</Link>
        <Link to="/signup">Sign up</Link>
        <Link to="/signin">Sign in</Link>
      </nav>
    </>
  );
};
