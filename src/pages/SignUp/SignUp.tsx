import { FormEvent, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';

import styles from './SignUp.module.css';

import { PATHS } from 'enums';
import { registration } from 'store/reducers/authReducer';
import { AppStoreType } from 'store/store';
import { ReturnComponentType } from 'types';

export const SignUp = (): ReturnComponentType => {
  const dispatch = useDispatch();
  const isRegisterSuccess = useSelector<AppStoreType, boolean>(
    state => state.auth.isRegisterSuccess,
  );

  const [values, setValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleFormSubmit = (e: FormEvent): void => {
    e.preventDefault();
    if (values.password === values.confirmPassword) {
      dispatch(registration({ email: values.email, password: values.password }));
      // : dispatch(setAppError('CHECK YOUR PASSWORDS!'));
    }
  };

  if (isRegisterSuccess) return <Navigate to={PATHS.LOGIN} />;

  return (
    <div>
      <h3 className={styles.title}>Sign Up</h3>

      <form onSubmit={handleFormSubmit} className={styles.form}>
        <label htmlFor="registerEmail">
          <div>E-mail:</div>
          <input
            id="registerEmail"
            type="email"
            value={values.email}
            onChange={e => setValues({ ...values, email: e.currentTarget.value })}
          />
        </label>
        <label htmlFor="registerPassword">
          <div>Password:</div>
          <input
            id="registerPassword"
            type="password"
            autoComplete="on"
            value={values.password}
            onChange={e => setValues({ ...values, password: e.currentTarget.value })}
          />
        </label>
        <label htmlFor="registerConfirmPassword">
          <div>Confirm Password:</div>
          <input
            id="registerConfirmPassword"
            type="password"
            autoComplete="on"
            value={values.confirmPassword}
            onChange={e =>
              setValues({ ...values, confirmPassword: e.currentTarget.value })
            }
          />
        </label>
        <button type="submit">Register</button>
      </form>
      <div className={styles.info}>
        <div>Already have an account?</div>
        <NavLink className={styles.link} to={PATHS.LOGIN}>
          Sign In
        </NavLink>
      </div>
    </div>
  );
};
