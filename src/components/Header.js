import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from 'semantic-ui-react'; // Assuming you are using Semantic UI for input
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        DEV@Deakin
      </div>
      <Input className="search-bar" placeholder="Search..." /> {/* Search Bar */}
      <div className="buttons">
        <Link to="/post">
          <button>Post</button>
        </Link>
        <Link to="/pricing">
          <button>Plans</button>
        </Link>
        <Link to="/messaging">
          <button>Messaging</button>
        </Link>
        {/* Use an <a> tag for the Botpress chatbot link to open in a new tab */}
        <a href="https://cdn.botpress.cloud/webchat/v2/shareable.html?botId=6b9b1cd8-3af3-4b32-b743-08480aa29050" target="_blank" rel="noopener noreferrer">
          <button>Chatbot</button>
        </a>
        {/* New Tutorial button added */}
        <Link to="/tutorial">
          <button>Tutorial</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
