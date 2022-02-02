import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.css';

import { PATHS } from 'enums';
import { ReturnComponentType } from 'types';

export const Navbar = (): ReturnComponentType => (
  <header className={styles.navbar}>
    <NavLink to={PATHS.PROFILE}>Profile</NavLink>
    <NavLink to={PATHS.LOGIN}>Log In</NavLink>
    <NavLink to={PATHS.SIGN_UP}>Sign Up</NavLink>
    <NavLink to={PATHS.PASSWORD_RECOVERY}>Password Recovery</NavLink>
    <NavLink to={PATHS.NEW_PASSWORD}>New Password</NavLink>
    <NavLink to={PATHS.ERROR}>404</NavLink>
    <NavLink to={PATHS.TEST_PAGE}>Components</NavLink>
  </header>
);
