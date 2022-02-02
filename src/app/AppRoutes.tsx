import { Navigate, Route, Routes } from 'react-router-dom';

import { PATHS } from 'enums';
import { ErrorPage, LogIn, NewPassword, PasswordRecovery, Profile, SignUp } from 'pages';
import { TestPage } from 'pages/TestPage/TestPage';
import { ReturnComponentType } from 'types';

export const AppRoutes = (): ReturnComponentType => (
  <Routes>
    <Route path={PATHS.HOME} element={<Profile />} />
    <Route path={PATHS.PROFILE} element={<Profile />} />
    <Route path={PATHS.LOGIN} element={<LogIn />} />
    <Route path={PATHS.SIGN_UP} element={<SignUp />} />
    <Route path={PATHS.PASSWORD_RECOVERY} element={<PasswordRecovery />} />
    <Route path={PATHS.NEW_PASSWORD} element={<NewPassword />} />
    <Route path={PATHS.ERROR} element={<ErrorPage />} />
    <Route path={PATHS.TEST_PAGE} element={<TestPage />} />

    <Route path="*" element={<Navigate to={PATHS.ERROR} />} />
  </Routes>
);
