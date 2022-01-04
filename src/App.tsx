import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';

import {
  ErrorPage,
  LogIn,
  Navbar,
  NewPassword,
  PasswordRecovery,
  Profile,
  SignUp,
  TestPage,
} from 'components';
import { Paths } from 'enums';
import { ReturnComponentType } from 'types';

export const App = (): ReturnComponentType => (
  <>
    <HashRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path={Paths.Homepage} element={<Profile />} />
          <Route path={Paths.Profile} element={<Profile />} />
          <Route path={Paths.LogIn} element={<LogIn />} />
          <Route path={Paths.SignUp} element={<SignUp />} />
          <Route path={Paths.PasswordRecovery} element={<PasswordRecovery />} />
          <Route path={Paths.NewPassword} element={<NewPassword />} />
          <Route path={Paths.ErrorPage} element={<ErrorPage />} />
          <Route path={Paths.TestPage} element={<TestPage />} />
          <Route path="*" element={<Navigate to={Paths.ErrorPage} />} />
        </Routes>
      </main>
    </HashRouter>
  </>
);
