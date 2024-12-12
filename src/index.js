import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' for React 18 and above
import { BrowserRouter } from 'react-router-dom';
import App from './App'; // Import App component
import './Css/index.css';
import './Css/login.css'
import './Css/home.css';
import './Css/ContactUs.css'


// For React 18 and above
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> {/* Wrap the entire application with BrowserRouter */}
    <App />
  </BrowserRouter>
);
