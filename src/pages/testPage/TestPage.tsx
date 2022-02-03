import styles from 'pages/testPage/TestPage.module.css';
import { ReturnComponentType } from 'types';

export const TestPage = (): ReturnComponentType => (
  <div className={styles.elements}>
    <>Some Button</>
    <>Some Text</>
  </div>
);
