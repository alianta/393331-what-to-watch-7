import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';
import Logo from '../logo/logo';

function NotFoundScreen () {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
      </header>
      <div className="sign-in user-page__content">
        <h1>404. Page not found</h1>
        <Link className="user-block__link" to="/">Вернуться на главную</Link>
      </div>
      <Footer />
    </div>
  );
}

export default NotFoundScreen;
