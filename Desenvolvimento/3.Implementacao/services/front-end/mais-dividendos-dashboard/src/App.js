//icons
import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Main from './components/Main/Main';
import LoginSingUp from './components/loginSingUp/LoginSingUp';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <>
          <Header />
          <SideBar />
          <Main />
        </>
      ) : (
        <LoginSingUp onLogin={setIsLoggedIn} />
      )}
    </>
  );
}

export default App;
