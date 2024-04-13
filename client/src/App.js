import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import MainRouter from './routers/MainRouter';

import './styles/main.css';
import './styles/characterSheet.css';
import './styles/login.css'

function App() {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
}

export default App;
