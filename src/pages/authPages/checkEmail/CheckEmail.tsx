import { useSelector } from 'react-redux';

import styles from 'pages/authPages/signUp/SignUp.module.css';
import { AppStoreType } from 'store/store';
import { ReturnComponentType } from 'types';

export const CheckEmail = (): ReturnComponentType => {
  const restoreEmail = useSelector<AppStoreType, string>(
    state => state.auth.restoreEmail,
  );
  return (
    <div>
      <h3 className={styles.title}>Check Email</h3>
      <p>We’ve sent an Email with instructions to {restoreEmail}</p>
    </div>
  );
};
