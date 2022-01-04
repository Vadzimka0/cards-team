import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.css';

import { Paths } from 'enums';
import { ReturnComponentType } from 'types';

export const Navbar = (): ReturnComponentType => (
  <header className={styles.navbar}>
    <NavLink to={Paths.Profile}>Profile</NavLink>
    <NavLink to={Paths.LogIn}>Log In</NavLink>
    <NavLink to={Paths.SignUp}>Sign Up</NavLink>
    <NavLink to={Paths.PasswordRecovery}>Password Recovery</NavLink>
    <NavLink to={Paths.NewPassword}>New Password</NavLink>
    <NavLink to={Paths.ErrorPage}>404</NavLink>
    <NavLink to={Paths.TestPage}>Components</NavLink>
  </header>
);
