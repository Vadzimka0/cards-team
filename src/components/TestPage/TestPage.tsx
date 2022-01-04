import styles from './TestPage.module.css';

import {
  SuperButton,
  SuperCheckbox,
  SuperInputText,
  SuperSelect,
} from 'components/common';
import { ReturnComponentType } from 'types';

const arr = ['1', '2', '3'];

export const TestPage = (): ReturnComponentType => (
  <div className={styles.elements}>
    <SuperInputText />
    <SuperButton>Some Button</SuperButton>
    <SuperCheckbox>Some Text</SuperCheckbox>
    <SuperSelect options={arr} />
  </div>
);
