// src/components/Messaging.js
import React, { useState } from 'react';
import './Messaging.css';

const Messaging = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'User' }]);
      setInput('');
    }
  };

  return (
    <div className="messaging-container">
      <h2>Secure Messaging</h2>
      <div className="message-list">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <strong>{message.sender}: </strong>
            <span>{message.text}</span>
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Messaging;
