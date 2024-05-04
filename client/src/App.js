import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom'

import MainRouter from './routers/MainRouter';

import './styles/main.css';
import './styles/login.css';
import './styles/characterPage.css';
import './styles/characterSheet.css';
import './styles/characterCreation.css';
import './styles/mainPage.css';
import './styles/compendium.css';
import './styles/diceRoller.css';

export const AuthUserId = React.createContext(null);  // Создается глобальный контекст для авторизованного пользователя

const App = () => {
  const [user, setUser] = useState(null);  // Хранит в себе айди авторизованного пользователя

  return (
    <BrowserRouter>
      <AuthUserId.Provider value={{ user: user, setUser: setUser }}>
        <MainRouter />
      </AuthUserId.Provider>
    </BrowserRouter>
  );
}

export default App;
