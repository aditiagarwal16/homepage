// src/components/Header.js
import React from 'react';
import { Input, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">DEV@Deakin</div>
      <Input className="search-bar" placeholder="Search..." />
      <div className="buttons">
        <Link to="/post">
          <Button>Post</Button> {/* Navigates to /post */}
        </Link>
        <Link to="/pricing">
          <Button>Plans</Button> {/* Navigates to /pricing */}
        </Link>
        <Button>Login</Button>
      </div>
    </div>
  );
};

export default Header;
