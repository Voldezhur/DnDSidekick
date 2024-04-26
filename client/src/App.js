import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import MainRouter from './routers/MainRouter';

import './styles/main.css';
import './styles/login.css';
import './styles/characterPage.css';
import './styles/characterSheet.css';
import './styles/characterCreation.css';
import './styles/mainPage.css';
import './styles/compendium.css';

function App() {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
}

export default App;
