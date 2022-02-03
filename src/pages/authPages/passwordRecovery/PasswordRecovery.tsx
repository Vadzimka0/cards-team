import { FormEvent, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';

import { PATHS } from 'enums';
import styles from 'pages/authPages/signUp/SignUp.module.css';
import { restoreThroughEmail } from 'store/reducers/authReducer';
import { AppStoreType } from 'store/store';
import { ReturnComponentType } from 'types';

export const PasswordRecovery = (): ReturnComponentType => {
  const dispatch = useDispatch();
  const isEmailSent = useSelector<AppStoreType, boolean>(state => state.auth.isEmailSent);

  const [email, setEmail] = useState<string>('');

  const handleFormSubmit = (e: FormEvent): void => {
    e.preventDefault();
    dispatch(restoreThroughEmail(email));
  };

  if (isEmailSent) return <Navigate to={PATHS.CHECK_EMAIL} />;

  return (
    <div>
      <h4 className={styles.title}>
        Forgot your
        <br />
        password?
      </h4>

      <form onSubmit={handleFormSubmit} className={styles.form}>
        <label htmlFor="restoreEmail">
          <div>E-mail:</div>
          <input
            id="restoreEmail"
            type="email"
            value={email}
            onChange={e => setEmail(e.currentTarget.value)}
          />
        </label>
        <div>
          Enter your email address and
          <br />
          we will send you further instructions
        </div>
        <button type="submit">Create new password</button>
      </form>
      <div className={styles.info}>
        <div>Did you remember your password?</div>
        <NavLink className={styles.link} to={PATHS.LOGIN}>
          Try logging in
        </NavLink>
      </div>
    </div>
  );
};
