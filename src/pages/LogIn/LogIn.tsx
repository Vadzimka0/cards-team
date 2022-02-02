import { FormEvent, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';

import { PATHS } from 'enums';
import styles from 'pages/SignUp/SignUp.module.css';
import { login } from 'store/reducers/authReducer';
import { AppStoreType } from 'store/store';
import { ReturnComponentType } from 'types';

export const LogIn = (): ReturnComponentType => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.auth.isLoggedIn);

  const [values, setValues] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleFormSubmit = (e: FormEvent): void => {
    e.preventDefault();
    dispatch(login({ ...values }));
  };

  if (isLoggedIn) return <Navigate to={PATHS.PROFILE} />;

  return (
    <div>
      <h3 className={styles.title}>Sign In</h3>

      <form onSubmit={handleFormSubmit} className={styles.form}>
        <label htmlFor="loginEmail">
          <div>E-mail:</div>
          <input
            id="loginEmail"
            type="email"
            value={values.email}
            onChange={e => setValues({ ...values, email: e.currentTarget.value })}
          />
        </label>
        <label htmlFor="loginPassword">
          <div>Password:</div>
          <input
            id="loginPassword"
            type="password"
            autoComplete="on"
            value={values.password}
            onChange={e => setValues({ ...values, password: e.currentTarget.value })}
          />
        </label>
        <label htmlFor="loginRememberMe">
          <input
            id="loginRememberMe"
            type="checkbox"
            checked={values.rememberMe}
            onChange={e => setValues({ ...values, rememberMe: e.currentTarget.checked })}
          />
          <span>remember me</span>
        </label>
        <button type="submit">Login</button>
      </form>
      <div className={styles.info}>
        <NavLink className={styles.link} to={PATHS.PASSWORD_RECOVERY}>
          Forgot Password
        </NavLink>
        <div>Don’t have an account?</div>
        <NavLink className={styles.link} to={PATHS.SIGN_UP}>
          Sign Up
        </NavLink>
      </div>
    </div>
  );
};
