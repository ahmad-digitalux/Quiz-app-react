import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './text.sass'
import {Provider} from "./context/index";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
  
  <React.StrictMode>
  
    <App />
  </React.StrictMode>
  </Provider>
);

