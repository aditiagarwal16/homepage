import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v2.1/inject.js';
    script.async = true;
    script.onload = () => {
      if (window.botpressWebChat) {
        window.botpressWebChat.init({
          botId: '6b9b1cd8-3af3-4b32-b743-08480aa29050',  // Your bot ID
          hostUrl: 'https://cdn.botpress.cloud',
          messagingUrl: 'https://mediafiles.botpress.cloud',
          container: '#chatbot-container', // specify the container ID
          hideWidget: true,
        });
      } else {
        console.error('Botpress webchat is not available');
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <h1>Chatbot</h1>
      <div id="chatbot-container"></div>  {/* Chatbot renders here */}
    </div>
  );
};

export default Chatbot;
