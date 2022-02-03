import { Navigate, Route, Routes } from 'react-router-dom';

import { PATHS } from 'enums';
import {
  CheckEmail,
  ErrorPage,
  LogIn,
  NewPassword,
  Packs,
  PasswordRecovery,
  Profile,
  SignUp,
} from 'pages';
import { TestPage } from 'pages/testPage/TestPage';
import { ReturnComponentType } from 'types';

export const AppRoutes = (): ReturnComponentType => (
  <Routes>
    <Route path={PATHS.HOME} element={<Profile />} />
    <Route path={PATHS.PROFILE} element={<Profile />} />
    <Route path={PATHS.PACKS} element={<Packs />} />
    <Route path={PATHS.LOGIN} element={<LogIn />} />
    <Route path={PATHS.SIGN_UP} element={<SignUp />} />
    <Route path={PATHS.PASSWORD_RECOVERY} element={<PasswordRecovery />} />
    <Route path={PATHS.CHECK_EMAIL} element={<CheckEmail />} />
    <Route path={PATHS.NEW_PASSWORD} element={<NewPassword />} />
    <Route path={PATHS.NEW_PASSWORD_WITH_TOKEN} element={<NewPassword />} />
    <Route path={PATHS.ERROR} element={<ErrorPage />} />
    <Route path={PATHS.TEST_PAGE} element={<TestPage />} />

    <Route path="*" element={<Navigate to={PATHS.ERROR} />} />
  </Routes>
);
