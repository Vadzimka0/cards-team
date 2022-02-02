import styles from './ErrorPage.module.css';

import { ReturnComponentType } from 'types';

export const ErrorPage = (): ReturnComponentType => (
  <div className={styles.error}>
    <div className={styles.emoji}> 😞 </div>
    <div>Error 404</div>
    <p>This page is not exist</p>
  </div>
);
