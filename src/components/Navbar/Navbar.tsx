import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.css';

import { PATHS } from 'enums';
import { ReturnComponentType } from 'types';

export const Navbar = (): ReturnComponentType => (
  <header className={styles.navbar}>
    {/* <NavLink to={PATHS.PROFILE}>Profile</NavLink> */}
    {/* <NavLink to={PATHS.PACKS}>Packs</NavLink> */}
    <NavLink
      to={PATHS.SIGN_UP}
      className={({ isActive }) => (isActive ? styles.active : '')}
    >
      Sign Up
    </NavLink>
    <NavLink
      to={PATHS.LOGIN}
      className={({ isActive }) => (isActive ? styles.active : '')}
    >
      Log In
    </NavLink>
    <NavLink
      to={PATHS.PASSWORD_RECOVERY}
      className={({ isActive }) => (isActive ? styles.active : '')}
    >
      Password Rec
    </NavLink>
    <NavLink
      to={PATHS.NEW_PASSWORD}
      className={({ isActive }) => (isActive ? styles.active : '')}
    >
      New Pass
    </NavLink>
    {/* <NavLink to={PATHS.ERROR}>404</NavLink> */}
    {/* <NavLink to={PATHS.TEST_PAGE}>Test</NavLink> */}

    {}
  </header>
);
