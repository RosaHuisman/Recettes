import React from 'react';
import { Link } from 'react-router-dom';

import LoginForm from 'src/containers/LoginForm';
// on modularise l'image, pour que webpack puisse refaire le chemin
// une fois la compilation réalisée
// attention: ceci vaut uniquement sur les images en local
import logo from 'src/assets/logo.png';

import './style.scss';

const AppHeader = () => (
  <header className="header">
    <Link to="/">
      <img src={logo} className="header-logo" alt="Logo oRecipes" />
    </Link>
    <LoginForm />
  </header>
);

export default AppHeader;
