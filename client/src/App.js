import { React, useEffect } from 'react';
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
import './styles/groupPage.css';

const App = () => {
  const [cookies, setCookie] = useCookies(['user']);  // Создаем куки, которые будут использоваться в приложении

  // Создаем куки пользователя, если еще не создали
  if (!cookies.user) {
    setCookie('user', null);
  }
  
  return (
    <BrowserRouter>
      <CookiesProvider>
        <MainRouter />
      </CookiesProvider>
    </BrowserRouter>
  );
}

export default App;
