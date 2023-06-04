//Utilidades
import React from 'react';
import ReactDOM from 'react-dom/client';
import UserContex from './context/userContex';
import { BrowserRouter } from 'react-router-dom';
//Estilos
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <UserContex>
        <App />
      </UserContex>
    </React.StrictMode>
  </BrowserRouter>
  
);

