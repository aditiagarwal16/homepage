// src/components/Header.js
import React from 'react';
import { Input, Button } from 'semantic-ui-react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">DEV@Deakin</div>
      <Input className="search-bar" placeholder="Search..." />
      <div className="buttons">
        <Button>Post</Button>
        <Button>Login</Button>
      </div>
    </div>
  );
};

export default Header;
