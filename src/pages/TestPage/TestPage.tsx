import styles from 'pages/TestPage/TestPage.module.css';
import { ReturnComponentType } from 'types';

export const TestPage = (): ReturnComponentType => (
  <div className={styles.elements}>
    <>Some Button</>
    <>Some Text</>
  </div>
);
