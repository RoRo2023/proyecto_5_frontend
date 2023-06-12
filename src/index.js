//Utilidades
import React from 'react';
import ReactDOM from 'react-dom/client';
import UserContex from './context/userContex';
import { BrowserRouter } from 'react-router-dom';
import CatalogContext from './context/catalogContext';
//Estilos
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <CatalogContext>
      <UserContex>
        <App />
      </UserContex>
    </CatalogContext>    
  </BrowserRouter>
  
);

