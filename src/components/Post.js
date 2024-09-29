// src/components/Post.js
import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import ReactMarkdown from 'react-markdown';
import 'codemirror/lib/codemirror.css'; // Import CodeMirror styles
import 'codemirror/theme/material.css'; // Import CodeMirror theme (you can change it)
import 'codemirror/mode/javascript/javascript'; // Import JavaScript mode for syntax highlighting
import './Post.css';

const Post = () => {
  const [markdownContent, setMarkdownContent] = useState(''); // Markdown text state
  const [codeSnippet, setCodeSnippet] = useState(''); // Code snippet state

  return (
    <div className="post-container">
      <h1>Post your question</h1>

      {/* Markdown Input Area */}
      <div className="markdown-editor">
        <h3>Write your post in Markdown...</h3>
        <textarea
          value={markdownContent}
          onChange={(e) => setMarkdownContent(e.target.value)}
          placeholder="Write your question or description using Markdown..."
          className="markdown-textarea"
        />
      </div>

      {/* CodeMirror Code Snippet Editor */}
      <div className="code-editor">
        <h3>Code Snippet</h3>
        <CodeMirror
          value={codeSnippet}
          options={{
            mode: 'javascript', // Set the syntax highlighting mode to JavaScript
            theme: 'material',
            lineNumbers: true,
          }}
          onBeforeChange={(editor, data, value) => {
            setCodeSnippet(value); // Update the code snippet state
          }}
        />
      </div>

      {/* Render the Markdown content below */}
      <div className="markdown-preview">
        <h3>Preview</h3>
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
        <pre>
          <code>{codeSnippet}</code>
        </pre>
      </div>
    </div>
  );
};

export default Post;
