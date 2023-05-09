import React from 'react';
import ReactDOM from 'react-dom/client';
import Auth from "./components/Auth"

import { BrowserRouter } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import 'primeicons/primeicons.css';

import './languages/i18n'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
  <BrowserRouter> 
   <Auth />
   </BrowserRouter>
 </React.Fragment>
);

