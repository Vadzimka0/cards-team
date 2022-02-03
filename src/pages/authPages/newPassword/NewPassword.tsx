import { FormEvent, useState } from 'react';

import styles from 'pages/authPages/signUp/SignUp.module.css';
import { ReturnComponentType } from 'types';

export const NewPassword = (): ReturnComponentType => {
  /*  const dispatch = useDispatch();
  const changingPasswordSuccess = useSelector<AppStoreType, boolean>(
    state => state.auth.isPasswordChanged,
  );

  const params = useParams(); */

  const [password, setPassword] = useState<string>('');

  const handleFormSubmit = (e: FormEvent): void => {
    e.preventDefault();
    // dispatch(createNewPassword(password, params.token));
  };

  // if (changingPasswordSuccess) return <Navigate to={PATHS.LOGIN}/>

  return (
    <div>
      <h3 className={styles.title}>
        Create
        <br /> new password
      </h3>

      <form onSubmit={handleFormSubmit} className={styles.form}>
        <label htmlFor="newPassword">
          <div>Password:</div>
          <input
            id="newPassword"
            type="password"
            autoComplete="on"
            value={password}
            onChange={e => setPassword(e.currentTarget.value)}
          />
        </label>
        <p>
          Create new password and we will
          <br /> send you further instructions to email
        </p>
        <button type="submit">Create new password</button>
      </form>
    </div>
  );
};
