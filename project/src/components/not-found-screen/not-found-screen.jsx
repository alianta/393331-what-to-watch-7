import React from 'react';
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
        <a className="user-block__link" href="/">Вернуться на главную</a>
      </div>

      <Footer />
    </div>
  );
}

export default NotFoundScreen;
