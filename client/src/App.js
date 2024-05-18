import { React, useState, createContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider, useCookies } from 'react-cookie';

import MainRouter from './routing/MainRouter';

import './styles/landing.css';
import './styles/main.css';
import './styles/authorization.css';
import './styles/characterPage.css';
import './styles/characterSheet.css';
import './styles/characterCreation.css';
import './styles/mainPage.css';
import './styles/compendium.css';
import './styles/diceRoller.css';
import './styles/profile.css';
import './styles/groupCreation.css';

const App = () => {
  const [cookies, setCookie] = useCookies(['user']);

  return (
    <BrowserRouter>
      <CookiesProvider>
        <MainRouter />
      </CookiesProvider>
    </BrowserRouter>
  );
}

export default App;
