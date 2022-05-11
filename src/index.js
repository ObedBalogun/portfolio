import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  './fonts/br-firma-cdnfonts/BR Firma Black.otf'
import  './fonts/br-firma-cdnfonts/BR Firma Bold.otf'
import  './fonts/br-firma-cdnfonts/BR Firma Light.otf'
import  './fonts/br-firma-cdnfonts/BR Firma Medium.otf'
import  './fonts/br-firma-cdnfonts/BR Firma SemiBold.otf'
import  './fonts/br-firma-cdnfonts/BR Firma Thin.otf'

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
