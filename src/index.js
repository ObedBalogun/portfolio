import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  './fonts/BR-Firma/BRFirma-Black.otf'
import  './fonts/BR-Firma/BRFirma-Bold.otf'
import  './fonts/BR-Firma/BR Firma Light.otf'
import  './fonts/BR-Firma/BR Firma Medium.otf'
import  './fonts/BR-Firma/BR Firma SemiBold.otf'
import  './fonts/BR-Firma/BR Firma Thin.otf'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
