import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom'

import { createContext } from 'react';

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

export const UserContext = createContext();  // Создается глобальный контекст для авторизованного пользователя

const App = () => {
  const [user, setUser] = useState(null);  // Хранит в себе айди авторизованного пользователя

  return (
    <BrowserRouter>
      <UserContext.Provider value={{user, setUser}}>
        <MainRouter />
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
