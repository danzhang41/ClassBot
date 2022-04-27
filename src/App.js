import React, { useState, useEffect } from "react";
import './App.css';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './config.js';
import MessageParser from './Messageparser.js';
import ActionProvider from './ActionProvider.js';
import {nlp} from './Api.js';

function App() {
  return (
    <div className = 'center'>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default App;
