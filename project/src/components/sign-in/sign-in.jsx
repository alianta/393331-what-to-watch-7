import React , {useRef, useState} from 'react';
import Footer from '../footer/footer';
import Logo from '../logo/logo';
import {useHistory} from 'react-router-dom';
import {AppRoute} from '../../const';
import {login} from '../../store/api-actions';
import {useDispatch} from 'react-redux';
import Error from '../error/error';
import {getServerErrorStatus} from '../../store/server/selectors';
import {useSelector} from 'react-redux';

function SignIn() {
  const isServerError = useSelector(getServerErrorStatus);
  const dispatch = useDispatch();
  const onSubmit = (authData) => {
    dispatch(login(authData));
  };

  const loginRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = (evt) => {
    const userPassword = passwordRef.current.value;
    const userLogin = loginRef.current.value;
    const emailValidateRegularExpression = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/;

    evt.preventDefault();
    if(!userLogin){
      setErrorMessage('Enter email, please!');
    }else if(!emailValidateRegularExpression.test(userLogin)) {
      setErrorMessage('Enter valid email, please!');
    }else if(!userPassword){
      setErrorMessage('Enter password, please!');
    }else if(userPassword.match(/ /gi) && userPassword.match(/ /gi).length === userPassword.length){
      setErrorMessage('Password can\'t contain only spaces');
    }else {
      onSubmit({
        login: userLogin,
        password: userPassword,
      });
    }
  };

  return (
    <div className="user-page">
      {isServerError?<Error />:''}
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form
          action="#"
          className="sign-in__form"
          onSubmit={handleFormSubmit}
        >
          <div className="sign-in__message">
            <p>{errorMessage}</p>
          </div>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                ref={loginRef}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                data-testid="login"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                ref={passwordRef}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                data-testid="password"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button
              onClick={() => history.push(AppRoute.GAME)}
              className="sign-in__btn"
              type="submit"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default SignIn;
